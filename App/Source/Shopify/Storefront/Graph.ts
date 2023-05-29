
export { storefront }

import Environment from '../../Environment.ts';


const { Host , API } = Environment.Shopify

const endpoint = `https://${ Host }/api/2023-04/graphql.json`


interface Props {
    variables ?: Record<string,unknown>
    query : string
}


async function storefront < Result > ( props : Props ){

    let { variables , query } = props

    variables ??= {}

    const request = {

        headers : {
            'X-Shopify-Storefront-Access-Token' : API.Storefront.Token ,
            'Content-Type' : 'application/json'
        },

        method : 'POST' ,

        body : JSON.stringify({ variables , query })

    } satisfies RequestInit

    const response = await fetch(endpoint,request)

    if( response.ok ){

        const json = await
            response.json()

        if( json.errors ){

            const message = json.errors
                .map(( error : Error ) => error.message )
                .join('\n')

            return {
                success : false ,
                error : message
            } as const
        }

        return {
            success : true ,
            data : json.data as Result
        } as const
    }

    const body = await
        response.text()

    return {
        success : false ,
        error : `${ response.status } ${ body }`
    } as const
}

