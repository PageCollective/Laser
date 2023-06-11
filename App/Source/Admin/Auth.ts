
export { AdminSession }

import { deleteCookie , setCookie } from 'Cookie'


const OneHour = 60 * 60


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
            sameSite : 'Strict' ,
            httpOnly : true ,
            secure : true ,
            maxAge : OneHour ,
            value : session ,
            name : 'Session_Admin' ,
            path : '/Admin/'
        })
    },

    clearCookie ( headers : Headers ){

        session = null

        deleteCookie(headers,'Session_Admin',{
            path : '/Admin/'
        })
    }
}
