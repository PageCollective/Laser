
export default `

    query (
        $thumbnail : ImageTransformInput ,
        $after : String ,
        $query : String
    ){

        products (
            query : $query ,
            after : $after ,
            first : 10
        ){

            pageInfo {
                hasNextPage
                endCursor
            }

            nodes {

                handle
                title
                id

                featuredImage {

                    altText

                    url ( transform : $thumbnail )
                }

                priceRange {

                    minVariantPrice {
                        currencyCode
                        amount
                    }

                    maxVariantPrice {
                        currencyCode
                        amount
                    }
                }
            }
        }
    }
`
