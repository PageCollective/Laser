
export { Hook as useKeys }

import { useEffect , useState } from 'preact/hooks'
import { IS_BROWSER } from 'Fresh/runtime.ts'


function Hook (){

    if( ! IS_BROWSER )
        return [ false ]


    const [ isOpen , setOpen ] =
        useState(false)

    console.log('IsOpen',isOpen)


    const onKey = ( event : KeyboardEvent ) => {

        if( event.code !== 'Tab' )
            return

        event.stopImmediatePropagation()
        event.preventDefault()

        setOpen( ! isOpen )

        console.debug(`Console is open`,!isOpen)
    }

    const manageOnKey = () => {

        console.log('testing')

        self.addEventListener
            ( 'keydown' , onKey )

        return () => self
            .removeEventListener('keydown',onKey)
    }


    useEffect(manageOnKey)


    return [ isOpen ]
}
