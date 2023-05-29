
export default `

    query ( $after : String , $thumbnail : ImageTransformInput ){

        products ( after : $after , first : 10 ){

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
