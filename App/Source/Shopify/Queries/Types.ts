
export type {
    Beautician , Appointment ,
    Customer , Schedule ,
    Bodypart , Weekday
}

export { Errors }


type Weekday =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday'


interface Range {
    from : Time
    to : Time
}

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type Hours = `${ 0 | 1 }${ Digit }` | `${ 2 }${ 0 | 1 | 2 | 3 }`

type Time = `${ Hours }:${ 0 | 1 | 2 | 3 | 4 | 5 }${ 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 }`

type Schedule = Record<Weekday,Range>


interface Beautician {

    unavailable : Array<Date>
    schedule : Schedule
    avatar ?: string
    name : string
}


interface Bodypart {


}

interface Customer {

}

interface Appointment {

    beautician : Beautician
    customer : Customer
    program : Array<Bodypart>

    duration : number
    time : Time
}


enum Errors {

    MetaObject_Definition_Missing ,
    MetaObject_Field_Missing ,
    MetaObject_Invalid_Value
}
