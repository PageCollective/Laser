
import { Manifest } from 'Fresh/server.ts'

import config from '../deno.json' assert { type : 'json' }
import routes from './Routes/_.ts'


export default {

    islands : {} ,

    baseUrl : import.meta.url ,
    routes ,
    config

} satisfies Manifest

