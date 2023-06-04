
export type { Product , Image }


interface Image {

    altText : null | string
    url : string
}


interface Product {

    handle : string
    title : string
    id : string

    featuredImage : null | Image

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
