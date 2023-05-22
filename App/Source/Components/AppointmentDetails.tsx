
import { ScheduleContext } from '../Hooks/Schedule.tsx'
import { useContext } from 'preact/hooks'


function AppointmentDetails (){

    const { day } = useContext(ScheduleContext)

    return <>
        <div class = 'Schedule--Details' />

        <p style={ {color : 'black' }}> Selected Day : { day }</p>
    </>
}


export { AppointmentDetails }
