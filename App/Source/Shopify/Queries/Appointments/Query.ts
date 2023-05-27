
export default `

    query ( $type : String! , $handle : MetaobjectHandleInput! ){

        definition : metaobjectDefinitionByType ( type : $type ){
    		id
  	    }

        metaobject : metaobjectByHandle ( handle : $handle ){

            list : field ( key : "list" ){
                value
            }
        }
    }
`
