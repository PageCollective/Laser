
export default Component

import { Settings , fromJSON } from 'Data'
import { useLayoutEffect } from 'preact/hooks'
import { IS_BROWSER } from 'Fresh/runtime.ts'
import { detailed } from '../islands/Settings.tsx'

import Cookie from 'Cookie'


interface Props {
    settings : Settings
}


function Component ( props : Props ){

    if( ! IS_BROWSER )
        detailed.value = ! props.settings.minimalist


    useLayoutEffect(() => {

        const json = Cookie.get('Settings') ?? '{}'

        const settings = fromJSON(json)

        console.debug('Settings',settings)

        detailed.value = ! settings.minimalist

    },[])

    return <div />
}
