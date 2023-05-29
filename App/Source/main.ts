
import { start } from 'Fresh/server.ts'

import Environment from './Environment.ts'
import WindConfig from '../.config/twind.config.ts'
import WindPlugin from 'Fresh/plugins/twind.ts'
import manifest from './fresh.gen.ts'


console.log('Config',Environment)


const tailwind = WindPlugin(WindConfig)


await start(manifest, {

    staticDir : 'Static' ,

    plugins : [ tailwind ]
})
