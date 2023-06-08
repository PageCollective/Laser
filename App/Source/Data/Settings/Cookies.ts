
export { fromCookies , fromJSON }

import { parseCookie , parseJSON } from 'Data'
import { Defaults } from './Default.ts'
import { Model } from './Zod.ts'


function fromCookies ( header : string ){

    const { cookies } = parseCookie(header)

    const json = cookies
        .get('Settings')

    return fromJSON( json ?? '{}' )
}


function fromJSON ( json : string ){

    const parsed = parseJSON( json ?? '{}' )

    const result = Model
        .safeParse(parsed)

    return ( result.success )
        ? result.data : Defaults
}
