
export type { AppointmentData , Response }


type Index = `_${ number }`


interface Response {

    data : {
        [ index : Index ] : AppointmentData
    }
}


type AppointmentData = null | {

    handle : string

    beautician : null | {
        reference : null | {
            handle : string
        }
    }

    customer : null | {
        reference : null | {
            name : null | {
                value : null | string
            }
        }
    }

    program : null | {
        value : null | string
    }

    time : null | {
        value : null | string
    }

    duration : null | {
        value : null | string
    }
}
