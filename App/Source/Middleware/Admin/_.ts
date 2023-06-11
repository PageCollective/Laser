
export type { Middleware , Context , State }

import {
    MiddlewareHandlerContext ,
    MiddlewareHandler
} from 'Fresh/server.ts'


interface State {
    isAuthenticated : boolean
}


type Middleware = MiddlewareHandler<State> []

type Context = MiddlewareHandlerContext<State>
