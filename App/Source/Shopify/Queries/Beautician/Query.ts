
export default `

    query Beauticians {

        metaobjects ( type : "beautician" , first : 10 ){
            nodes {

                fields {

                    reference {

                        __typename

                        ... on MediaImage {
                            image {
                                url
                            }
                        }
                    }

                    value
                    key
                }
            }
        }
    }
`
