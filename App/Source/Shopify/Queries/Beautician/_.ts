
export { fetchBeauticians }

import { MetaObject , Response } from './Response.ts'
import { Beautician , Schedule } from '../Types.ts'
import { default as query } from './Query.ts'
import { graph } from 'Graph'


async function fetchBeauticians (){

    const data = { query }

    const response = await graph
        .query<Response>({ data })

    const beauticians =
        response.body.data
        .metaobjects.nodes


    return beauticians
        .map(parse)
}


function parse ( meta : MetaObject ){

    const beautician = {} as Beautician

    console.log('Fields',meta.fields)

    beautician.handle = meta.handle;

    for ( const field of meta.fields )
        switch ( field.key ){
        case 'unavailable' :

            beautician.unavailable = JSON
                .parse(field.value ?? '[]')
                .map(( string : string ) => new Date(string))

            continue
        case 'schedule' : {

            const entries = Object
                .entries(JSON.parse(field.value ?? '{}')) as Array<[ string , [ string , string ] ]>

            beautician.schedule = Object.fromEntries(entries
                .map(([ day , range ]) => [ day , { from : range[0] , to : range[1] } ])) as Schedule

            continue
        }
        case 'avatar' : beautician.avatar = field.reference?.image?.url ; continue
        case 'name' : beautician.name = field.value! ; continue
        }

    return beautician
}

