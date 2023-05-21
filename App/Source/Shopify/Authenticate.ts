
export { authenticate }

import 'Shopify/Adapter'


import { RestResources , restResources } from 'RestResources'
import { ApiVersion, shopifyApi } from 'Shopify'

import Environment from 'Environment'


function authenticate (){

	const shopify = shopifyApi<RestResources>({

		adminApiAccessToken : Environment.Shopify.Token ,
        apiSecretKey : Environment.Shopify.Secret ,
        hostName : Environment.Shopify.Host ,

        isCustomStoreApp : true ,
		isEmbeddedApp : false ,

		restResources : restResources ,
        apiVersion : ApiVersion.April23 ,

		scopes : [
            'write_metaobject_definitions' ,
            'write_metaobjects ' ,
            'write_orders' ,
            'read_themes'
        ]
	})

    return shopify
}

