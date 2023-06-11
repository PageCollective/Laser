
export { handler }

import { MiddlewareHandlerContext , MiddlewareHandler } from 'Fresh/server.ts'
import { deleteCookie , getCookies , CookieMap } from 'Deno/http/mod.ts'
import { AdminSession } from '../../Admin/Auth.ts'


interface State {
    isAuthenticated : boolean
}


type Middleware = MiddlewareHandler<State>[]
type Context = MiddlewareHandlerContext<State>


const handler = [

    throttle ,
    checkAuthentication ,
    redirect

] satisfies Middleware


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


async function wait ( millis : number ){
    await new Promise(( resolve ) =>
        setTimeout(resolve,millis))
}


async function throttle (
    request : Request ,
    context : Context
){

    const [ response , delta ] =
        await timed(context)

    console.debug('Delta',delta,10 - delta)

    if( delta < 10 )
        await wait( 10 - delta )

    return response
}


async function checkAuthentication (
    request : Request ,
    context : Context
){

    const { headers } = request

    const cookies = new CookieMap(headers)

    const session = cookies
        .get('Session_Admin') ?? null

    context.state.isAuthenticated =
        AdminSession.check(session)

    console.debug('Admin Session Cookie',session,context.state)

    return await
        context.next()
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
