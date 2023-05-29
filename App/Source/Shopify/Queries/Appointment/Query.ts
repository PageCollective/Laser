
export { buildQuery }


const query = ( index : number ) => [
    `$_${ index } : ID!` ,
    `_${ index } : metaobject ( id : $_${ index } ){


        handle

        beautician : field ( key : "beautician" ){

            reference {

              	... on Metaobject {
                    handle
                }
            }
        }


        customer : field ( key : "customer" ){

            reference {

              	... on Metaobject {

                    name : field ( key : "name" ){
                      	value
                    }
                }
            }
        }

        program : field ( key : "program" ){
            value
        }

        duration : field ( key : "duration" ){
            value
        }

        time : field ( key : "time" ){
            value
        }
    }`
]



function buildQuery ( count : number ){

    const [ variables , queries ] =
        Array(count)
        .fill(null)
        .map( ( _ , index ) => query(index) )
        .reduce((a,b) => [ `${ a[0] } , ${ b[0] }` , a[1] + b[1] ])

    return `

        query ( ${ variables } ){
            ${ queries }
        }
    `
}
