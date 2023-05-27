
export type { AppointmentData , Response }


type Index = `_${ number }`


interface Response {

    data : {
        [ index : Index ] : AppointmentData
    }
}


type AppointmentData = null | {
    id : string
}
