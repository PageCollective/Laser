
export { handler }

import { determineAuthorization } from '../../Middleware/Admin/DetermineAuthorization.ts'
import { AdminSession } from '../../Admin/Auth.ts'
import { deleteCookie } from 'Deno/http/mod.ts'
import { Context } from '../../Middleware/Admin/_.ts'
import { delay } from 'Async'


const handler = [

    throttle ,
    determineAuthorization ,
    redirect
]


async function timed (
    context : Context
){

    const before = Date.now()

    const response = await
        context.next()

    const after = Date.now()

    const delta = ( after - before )

    return [ response , delta ] as const
}


async function throttle (
    request : Request ,
    context : Context
){

    const [ response , delta ] =
        await timed(context)

    if( delta < 10 )
        await delay( 10 - delta )

    return response
}


async function redirect (
    request : Request ,
    context : Context
){

    const { isAuthenticated } = context.state
    const { pathname } = new URL(request.url)


    if( onLogin(pathname) )
        return await context.next()

    if( isAuthenticated ){

        const response = await
            context.next()

        AdminSession.renewCookie
            ( response.headers )

        return response
    }


    const headers = new Headers
    headers.set('location','/Admin/Login')

    deleteCookie(headers,'Session_Admin',{
        path : '/Admin/'
    })

    return new Response(null,{
        status : 303 ,
        headers
    })
}



function onLogin ( path : string ){
    return path === '/Admin/Login'
}
