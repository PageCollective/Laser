
export { handler }

import { MiddlewareHandlerContext , MiddlewareHandler } from 'Fresh/server.ts'
import { getCookies } from 'Deno/http/cookie.ts'
import { logRequestDuration } from '../Middleware/LogRequestDuration.ts'


interface State {
    session : null | string
}


type Middleware = MiddlewareHandler<State>[]
type Context = MiddlewareHandlerContext<State>


const handler = [

    logRequestDuration ,
    general

]



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
