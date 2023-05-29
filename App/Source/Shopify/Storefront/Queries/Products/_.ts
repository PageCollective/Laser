
export { fetchProducts }

import { storefront } from '../../Graph.ts'
import { Response } from './Response.ts'
import query from './Query.ts'


interface Props {
    cursor ?: string
}


async function fetchProducts ( props : Props ){

    const { cursor } = props

    const variables = {

        cursor : cursor ,

        thumbnail : {
            preferredContentType : 'WEBP' ,
            maxHeight : 400 ,
            maxWidth : 400
        }
    }


    const response = await storefront
        <Response>({ variables , query })


    return response
}
