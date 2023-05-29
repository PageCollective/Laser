
export default Component

import { useContext } from 'preact/hooks'
import { ScheduleContext } from '../Hooks/Schedule.tsx'


const Days = [
    'Monday' ,
    'Tuesday' ,
    'Wednesday' ,
    'Thursday' ,
    'Friday' ,
    'Saturday' ,
    'Sunday'
]


function Component (){

    const { day : selected , setDay } = useContext(ScheduleContext)

    console.log('Selected',selected)

    const days = Days
        .map(( day , index ) => <>
            <Day
                selected = { selected == index }
                onClick = { () => setDay(index) }
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

            <span>{ short }</span>

        </label>
    </>
}
