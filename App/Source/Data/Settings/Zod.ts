
export type { Type }
export { Model }

import { Defaults } from './Default.ts'
import { z } from 'Zod'


const Data = {

    minimalist : z.boolean().default(false)

}


const Model = z
    .object(Data)
    .catch(() => Defaults )


type Type = z.TypeOf< typeof Model >
