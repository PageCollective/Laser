
import { z } from 'Zod'


const { parse } = JSON;
const { env } = Deno;


const json = env
    .get('Config')

if( ! json )
    throw `'Config' environment variable is missing!`


let config;

try { config = parse(json) }
catch ( _ ){}

if( ! config )
    throw `'Config' environment variable is not valid JSON!`


const Config = z.object({

    Shopify : z.object({

        Host : z.string() ,

        API : z.object({

            Version : z.string() ,

            Storefront : z.object({
                Token : z.string()
            }),

            Admin : z.object({

                Secret : z.string() ,
                Token : z.string()
            })
        })
    }),

    App : z.object({
        Interface : z.string()
    })
})

const result = Config
    .safeParse(config)

if( ! result.success ){
    console.error(result.error);
    throw `'Config' environment variable has an invalid structured!`
}


export default result.data
