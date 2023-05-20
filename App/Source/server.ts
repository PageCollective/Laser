
import Environment from './Environment.ts'

import { authenticate } from './Shopify.ts'
import { ApiVersion } from 'Shopify'
import { serve } from 'aleph/server'

import denoDeploy from 'aleph/plugins/deploy'
import modules from './Routes/_export.ts'
import react from 'aleph/plugins/react'

serve({

    port : 3000 ,

    plugins : [
        denoDeploy({ moduleMain : import.meta.url , modules }) ,
        react({ ssr : true })
    ],

    router : {
        exts : [ '.tsx' ] ,
        dir : './Routes'
    }
})



console.log('Config',Environment)


const shopify = authenticate();

const session = shopify.session.customAppSession(Environment.Shopify.Host);


const query = `

    query MetaObjectByHandle ( $handle : MetaobjectHandleInput! ){

        metaobjectByHandle ( handle : $handle ){
            displayName
        }
    }
`

const graph = new shopify.clients.Graphql({
    session : session ,
    apiVersion : ApiVersion.April23
})

const meta = await graph.query({
    data : {

        query ,

        variables : {
            handle : {
                handle : 'test' ,
                type : 'test'
            }
        }
    }
})

console.log('Meta',meta)
