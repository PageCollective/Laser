
import { ScheduleProvider } from '../Hooks/Schedule.tsx'
import Icon_Help from 'Icon/help.tsx'

import {
    AppointmentSelection , BeauticianSelection ,
    AppointmentDetails , WeekdaySelection
} from 'Components'


interface Beautician {

    avatar ?: string
    name : string
}


interface Props {
    beauticians : Array<Beautician>
}


export default function  ( { beauticians } : Props ){

    const openHelp = () =>
        window.open(`https://pagecollective.github.io/?Topic=Laser-Help`,'_blank')?.focus();


    return <>

        <ScheduleProvider>

            <div class = 'Schedule--Wrapper' >

                <BeauticianSelection beauticians = { beauticians } />

                <WeekdaySelection />

                <AppointmentSelection />

                <AppointmentDetails />

                <div class = 'Schedule--Actions' >
                    <div class = 'Schedule--Help button shadow' title = 'Help' onClick = { openHelp }>
                        <Icon_Help color = 'var(--Color-Tertiary)' />
                    </div>
                </div>

            </div>

        </ScheduleProvider>
    </>
}
