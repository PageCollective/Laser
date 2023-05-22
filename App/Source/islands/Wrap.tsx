

import {
    AppointmentSelection , BeauticianSelection ,
    AppointmentDetails , WeekdaySelection
} from 'Components'


interface Beautician {

    avatar ?: string
    name : string
}
import Icon_Help from 'Icon/help.tsx'
import { ScheduleProvider } from '../Hooks/Schedule.tsx'

interface Props {
    beauticians : Array<Beautician>
}




export default function  ( { beauticians } : Props ){

    return <>

        <ScheduleProvider>

            <div class = 'Schedule--Wrapper' >

                <BeauticianSelection beauticians = { beauticians } />

                <WeekdaySelection />

                <AppointmentSelection />

                <AppointmentDetails />

                <div class = 'Schedule--Actions' >
                    <div class = 'Schedule--Help button shadow' title = 'Help' >
                        <Icon_Help color = 'var(--Color-Tertiary)' />
                    </div>
                </div>

            </div>

        </ScheduleProvider>
    </>
}
