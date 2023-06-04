
export type { Response }

import { Product } from 'Storefront/Types'


interface Response {

    products : {

        pageInfo : {
            hasNextPage : boolean
            endCursor : null | string
        }

        nodes : Array<Product>
    }
}






