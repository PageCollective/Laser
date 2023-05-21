
export type { Response , MetaObject }


interface Response {

    data : {
        metaobjects : {
            nodes : Array<MetaObject>
        }
    }
}


interface MetaObject {
    fields : Array<Field>
}


interface Field {

    reference : null | MediaImage

    value : null | string
    key : string
}


interface MediaImage {

    __typename : 'MediaImage'

    image : null | {
        url : string
    }
}
