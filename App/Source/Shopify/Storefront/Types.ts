
export type { Product , Image , Price }


interface Image {

    altText : null | string
    url : string
}


interface Price {
    currencyCode : string
    amount : string
}


interface Product {

    handle : string
    title : string
    id : string

    featuredImage : null | Image

    priceRange : {

        minVariantPrice : Price
        maxVariantPrice : Price
    }
}
