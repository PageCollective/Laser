
export default Component

import IconRight from 'Icon/arrow-big-right-filled.tsx'
import IconLeft from 'Icon/arrow-big-left-filled.tsx'

import { ScheduleContext } from '../../Hooks/Schedule.tsx'
import { weekOfYear } from 'https://deno.land/std@0.188.0/datetime/mod.ts'
import { useContext } from 'preact/hooks'


const { min , max } = Math;


function deltaDate ( date : Date , days : number ){

    const copy = new Date(date)
    copy.setDate( date.getDate() + days )

    return copy
}


function Component (){

    const { week , setWeek } =
        useContext(ScheduleContext)


    const forward = () =>
        setWeek( min( week + 1 , 53 ) )

    const back = () =>
        setWeek( max( week - 1 , 1 ) )


    const today = new Date

    const delta = ( week - weekOfYear(today) ) * 7

    const monday = deltaDate(today, - today.getDay() + 1 )


    const first = deltaDate(monday,delta)
    const last = deltaDate(first,6)

    const Months = [
        'January' ,
        'February' ,
        'March' ,
        'April' ,
        'May' ,
        'June' ,
        'July' ,
        'August' ,
        'October' ,
        'September' ,
        'November' ,
        'December'
    ]

    const month = Months[ first.getMonth() ]

    return <>

        <div class = 'Week' >

            <div class = 'button back' onClick = { back } >
                <IconLeft />
            </div>

            <div class = 'Display' >
                Week { week }
                </div>

            <div class = 'Display' >
                 { month } { formatDate(first) } - { formatDate(last) }  </div>

            <div class = 'button forward' onClick = { forward } >
                <IconRight />
            </div>

        </div>
    </>
}


function formatDate ( time : Date ){

    const date = time
        .getDate()

    return `${ date }`.padStart(2,' ') + dateSuffix(date)
}


function dateSuffix ( date : number ){

    switch ( date ){
    case 1 : case 21 : case 31 : return 'st'
    case 2 : case 22 : return 'nd'
    case 3 : case 23 : return 'rd'
    default : return 'th'
    }
}

