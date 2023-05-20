
import Environment from './Environment.ts'

console.log('Config',Environment)


import { start } from 'Fresh/server.ts'
import manifest from './Fresh.ts'

import twindPlugin from 'Fresh/plugins/twind.ts'
import twindConfig from './Wind.ts'

await start(manifest, {

    staticDir : 'Static' ,

    plugins : [
        twindPlugin(twindConfig)
    ]
})
