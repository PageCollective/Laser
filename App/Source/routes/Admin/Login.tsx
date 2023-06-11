
export default Page
export { handler }

import { PageProps , Handlers } from 'Fresh/server.ts'
import { setCookie } from 'Deno/http/cookie.ts'

import Environment from 'Environment'
import { AdminSession } from '../../Admin/Auth.ts'
import * as OTPAuth from 'TOTP'


const { Secret } = Environment.Admin.TOTP

const totp = new OTPAuth.TOTP({
    algorithm : 'SHA1' ,
    issuer : 'PageCollective' ,
    secret : Secret ,
    period : 30 ,
    digits : 6 ,
    label : 'Beauty Salon'
})


interface Data {}


const handler = {

    async GET ( _request , context ){

        const { isAuthenticated } = context.state

        if( ! isAuthenticated )
            return await context.render()

        const headers = new Headers
        headers.set('location','/Admin/Dashboard')

        return new Response(null,{
            status : 303 ,
            headers
        })
    },

    //! Add throttling so admin login cannot be spammed with login requests.

    async POST ( request , context ){


        const form = await
            request.formData()


        const password = form
            .get('password')
            ?.toString()
            ?? null

        const token = form
            .get('2fa')
            ?.toString()
            ?? null


        if( notValid(password,token) )
            return context.render()


        const headers = new Headers
        headers.set('location','/Admin/Dashboard')

        AdminSession.renewCookie(headers)

        const response = new Response(null,{
            status : 303 ,
            headers
        })

        return response
    }

} satisfies Handlers<Data>


function notValid (
    password : null | string ,
    token : null | string
){
    const { Password } =
        Environment.Admin

    if( password !== Password )
        return true

    if( token === null )
        return true

    const delta = totp.validate({ token , window : 1 })

    console.log('Delta',delta)

    if( delta === null )
        return true

    return false
}


function Page (){


    return (

        <form method = 'post' >

            <label>

                <p> Password </p>

                <input
                    type = 'password'
                    name = 'password'
                />

            </label>

            <label>

                <p> 2FA </p>

                <input
                    type = 'password'
                    name = '2fa'
                />

            </label>

            <button type = 'submit'>
                Login
            </button>

        </form>
    )
}
