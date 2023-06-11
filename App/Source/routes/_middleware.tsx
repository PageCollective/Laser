
export { handler }

import { MiddlewareHandlerContext , MiddlewareHandler } from 'Fresh/server.ts'
import { getCookies } from 'Deno/http/cookie.ts'


interface State {
    session : null | string
}


type Middleware = MiddlewareHandler<State>[]
type Context = MiddlewareHandlerContext<State>


const handler = [

    logDuration ,
    general

] satisfies Middleware


async function logDuration (
    request : Request ,
    context : Context
){

    console.log('Beffore')

    const before = Date.now()

    const response = await
        context.next()

    const after = Date.now()

    const delta = ( after - before )

    const url = new URL(request.url)

    const millis = String(delta)
        .padStart(3,' ')

    console.debug(`> ${ millis }ms | ${ url.pathname }`)

    return response
}


async function general (
    request : Request ,
    context : Context
){

    const { headers } = request

    const cookies = getCookies(headers)
    context.state.session = cookies.session

    return await
        context.next()
}
