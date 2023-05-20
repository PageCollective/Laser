
import Environment from './Environment.ts'

import { authenticate } from './Shopify.ts'
import { ApiVersion } from 'Shopify'



const shopify = authenticate();

const session = shopify.session.customAppSession(Environment.Shopify.Host);


const graph = new shopify.clients.Graphql({
    session : session ,
    apiVersion : ApiVersion.April23
})

export { graph }
