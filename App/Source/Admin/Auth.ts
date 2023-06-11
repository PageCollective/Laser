
export { AdminSession }

import { deleteCookie , setCookie } from 'Cookie'


let session : null | string = null


const AdminSession = {

    check ( value : null | string ){

        if( ! value )
            return false

        if( session !== value )
            return false

        return true
    },

    renewCookie ( headers : Headers ){

        session = crypto.randomUUID()

        setCookie(headers,{
            name : 'Session_Admin' ,
            value : session ,
            path : '/Admin/',
            httpOnly : true ,
            secure : true ,
            maxAge : 60 * 60
        })
    },

    clearCookie ( headers : Headers ){

        session = null

        deleteCookie(headers,'Session_Admin',{
            path : '/Admin/'
        })
    }
}
