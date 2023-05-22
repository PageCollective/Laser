
import Environment from './Environment.ts'

console.log('Config',Environment)


import { start } from 'Fresh/server.ts'
import manifest from './fresh.gen.ts'

await start(manifest, {

    staticDir : 'Static' ,

    plugins : []
})
