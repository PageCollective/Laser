
export { fetchAppointmentIds }

import { default as query } from './Query.ts'
import { Appointment, Errors } from '../Types.ts'
import { Response } from './Response.ts'
import { graph } from 'Graph'
import { z } from 'Zod'



const MetaobjectGID = z
    .string()
    .regex( new RegExp('^gid:\\/\\/shopify\\/Metaobject\\/\\d+$') , `MetaObject GID Format` )

const Appointments = z
    .array(MetaobjectGID)



interface Props {
    date : string
}


async function fetchAppointmentIds ( { date } : Props ){

    const type = 'orders'

    const handle = {
        handle : date ,
        type : type
    }

    const variables = { handle , type }

    const data = { variables , query }

    const response = await graph
        .query<Response>({ data })


    const { metaobject , definition } =
        response.body.data

    if( ! definition )
        return failMissingTable(type)


    if( ! metaobject )
        return {
            success : true ,
            ids : [] as Array<string>
        } as const


    const { list } = metaobject

    if( ! list )
        return failMissingField('list')


    const { value } = list

    if( ! value )
        return {
            success : true ,
            ids : [] as Array<string>
        } as const


    const jsonResult =
        safeParse(value)

    if( ! jsonResult.success )
        return failInvalidValue({
            format : `Value isn't valid JSON` ,
            field : 'list' ,
            value : list
        })


    const zodResult = Appointments
        .safeParse(jsonResult.data)

    if( ! zodResult.success )
        return failInvalidValue({
            format : zodResult.error.toString() ,
            value : jsonResult.data ,
            field : 'list' ,
        })


    return {
        success : true ,
        ids : zodResult.data
    } as const
}


function failMissingTable ( name : string ){
    return fail({
        details : { name } ,
        error : Errors.MetaObject_Definition_Missing
    })
}

function failMissingField ( name : string ){
    return fail({
        details : { name } ,
        error : Errors.MetaObject_Field_Missing
    })
}


interface InvalidValueDetails {

    format : string
    field : string
    value : any
}

function failInvalidValue ( details : InvalidValueDetails ){
    return fail({
        details : details ,
        error : Errors.MetaObject_Invalid_Value
    })
}


interface Failure < Details extends object > {
    details : Details
    error : Errors
}

function fail < Details extends object > ( failure : Failure<Details> ){
    return {
        success : false ,
        ... failure
    } as const
}


function safeParse ( json : string ){

    try {

        const object = JSON
            .parse(json)

        return {
            success : true ,
            data : object
        } as const

    } catch ( _ ){
        return { success : false } as const
    }
}
