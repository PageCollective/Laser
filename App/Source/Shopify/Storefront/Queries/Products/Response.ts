
export type { Response }


interface Response {

    products : {

        pageInfo : {
            hasNextPage : boolean
            endCursor : null | string
        }

        nodes : {

            handle : string
            title : string
            id : string

            featuredImage : null | {

                altText : null | string
                url : string
            }

            priceRange : {

                minVariantPrice : {
                    currencyCode : string
                    amount : string
                }

                maxVariantPrice : {
                    currencyCode : string
                    amount : string
                }
            }
        }
    }
}
