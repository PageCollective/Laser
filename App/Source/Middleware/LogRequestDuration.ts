
export { middleware as logRequestDuration }

import { MiddlewareHandlerContext } from 'Fresh/server.ts'


async function middleware (
    request : Request ,
    context : MiddlewareHandlerContext
){

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
