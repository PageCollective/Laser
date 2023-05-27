
export { fetchAppointments }

import { AppointmentData , Response } from './Response.ts'
import { Appointment } from 'Types'
import { buildQuery } from './Query.ts'
import { graph } from 'Graph'


async function fetchAppointments ( ids : Array<string> ){

    const variables = Object.fromEntries(
        ids.map(( id , index ) => [ `_${ index }` , id ]))

    const query = buildQuery(ids.length)

    const data = { variables , query }

    const response = await graph
        .query<Response>({ data })


    const items = response.body.data

    return ids
        .map(( _ , index ) => items[ `_${ index }`] )
        .map(parse)
}


function parse ( data : AppointmentData ){

    if( ! data )
        return {
            success : false
        } as const


    return {
        success : true ,
        data : {} satisfies Appointment
    } as const
}

