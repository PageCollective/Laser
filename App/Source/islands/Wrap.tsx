
import { AppointmentPreview, Beautician } from 'Types'
import { ScheduleProvider } from '../Hooks/Schedule.tsx'

import Icon_Help from 'Icon/help.tsx'

import {
    AppointmentSelection , BeauticianSelection ,
    AppointmentDetails , WeekdaySelection
} from 'Components'


interface Props {
    appointments : Array<AppointmentPreview>
    beauticians : Array<Beautician>
    // beautician : string | null
}


export default function  ( { appointments , beauticians } : Props ){

    const openHelp = () =>
        window.open(`https://pagecollective.github.io/?Topic=Laser-Help`,'_blank')?.focus();


    if( beauticians.length < 1 )
        return <>

            <div class = 'Schedule--Warning' >
                No beauticians have been registered
            </div>
        </>

    return <>

        <ScheduleProvider beauticians = { beauticians } >

            <div class = 'Schedule--Wrapper' >

                <BeauticianSelection beauticians = { beauticians } />

                <WeekdaySelection />

                <AppointmentSelection appointments = { appointments } />

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
