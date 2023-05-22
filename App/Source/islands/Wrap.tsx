import { useState } from 'preact/hooks'


import {
    AppointmentSelection , BeauticianSelection ,
    AppointmentDetails , WeekdaySelection
} from 'Components'


interface Beautician {

    avatar ?: string
    name : string
}
import type { Context } from '../Hooks/Context.tsx'
import Icon_Help from 'Icon/help.tsx'

interface Props {
    beauticians : Array<Beautician>
}

function getDay (){

    const day = new Date()
        .getDay()

    return ( day - 1 + 7 ) % 7
}

const today = getDay()


export default function ( { beauticians } : Props ){


    const [ day , setDay ] = useState(today)


    const con = {
        setDay : ( day : number ) => setDay(day) ,
        day
    } satisfies Context

    return <>

        <div class = 'Schedule--Wrapper' >

            <BeauticianSelection beauticians = { beauticians } />

            <WeekdaySelection context = { con } />

            <AppointmentSelection />

            <AppointmentDetails />

            <div class = 'Schedule--Actions' >
                <div class = 'Schedule--Help button shadow' title = 'Help' >
                    <Icon_Help color = 'var(--Color-Tertiary)' />
                </div>
            </div>

            <p>{ day }</p>

        </div>
    </>
}
