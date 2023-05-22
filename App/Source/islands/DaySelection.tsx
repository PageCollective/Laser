
export default DaySelection

import { useState } from 'preact/hooks'
import { Context } from '../Hooks/Context.tsx'


const Days = [
    'Monday' ,
    'Tuesday' ,
    'Wednesday' ,
    'Thursday' ,
    'Friday' ,
    'Saturday' ,
    'Sunday'
]





function DaySelection ( { context } : { context : Context } ){

    const { day : selected } = context;

    console.log('Selected',selected)

    const days = Days
        .map(( day , index ) => <>
            <Day
                selected = { selected == index }
                onClick = { () => context.setDay(index) }
                name = { day }
            />
        </> )

    return <>

        <div class = 'Days' >
            { days }
        </div>
    </>
}


interface DayProps {

    onClick : () => void

    selected : boolean
    name : string
}


function Day ( { selected , onClick , name } : DayProps ){

    const short = name
        .slice(0,3)
        .toUpperCase()

    const id = `Weekday-${ name }`

    return <>

        <label id = { id } key = { name } class = 'Day button' >

            <input
                checked = { selected }
                onClick = { onClick }
                type = 'checkbox'
                id = { id }
            />

            { short }

        </label>
    </>
}
