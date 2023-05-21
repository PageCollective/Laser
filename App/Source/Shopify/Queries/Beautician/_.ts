
export { fetchBeauticians }

import { Response , MetaObject } from './Response.ts'
import { default as query } from './Query.ts'
import { Beautician } from '../Types.ts'
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

    for ( const field of meta.fields )
        switch ( field.key ){
        case 'avatar' : beautician.avatar = field.reference?.image?.url ; continue
        case 'name' : beautician.name = field.value! ; continue
        }

    return beautician
}

