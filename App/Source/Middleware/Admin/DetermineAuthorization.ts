
export { middleware as determineAuthorization }

import { MiddlewareHandlerContext } from 'Fresh/server.ts'
import { AdminSession } from '../../Admin/Auth.ts'
import { CookieMap } from 'Deno/http/mod.ts'


async function middleware (
    request : Request ,
    context : MiddlewareHandlerContext
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
