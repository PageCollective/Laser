
export { fetchAppointments }

import { Appointment , Beautician , Bodypart , Customer } from 'Types'
import { AppointmentData , Response } from './Response.ts'
import { buildQuery } from './Query.ts'
import { graph } from 'Graph'
import { z } from 'Zod'
import moment from 'npm:moment@2.29.4'


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


    const collected = {
        beautician : data.beautician?.reference?.handle ,
        customer : data.customer?.reference?.name?.value ,
        duration : data.duration?.value ,
        program : data.program?.value ,
        time : data.time?.value ,
        handle : data.handle
    }

    const Collected = z.object({
        beautician : z.string() ,
        customer : z.string() ,
        duration : z.string() ,
        program : z.string() ,
        time : z.string() ,
        handle : z.string()
    })


    const parsed = Collected.safeParse(collected)

    if( ! parsed.success )
        return {
            success : false ,
            error : 'Wrong format' ,
            details : {

            }
        } as const


    const formatted = parsed.data

    const duration = parseInt(formatted.duration)

    formatted.time = formatted.time + ' - ' + moment(formatted.time,'hh:mm')
        .add(duration,'minutes')
        .format('hh:mm')



    return {
        success : true ,
        data : formatted
    } as const
}

