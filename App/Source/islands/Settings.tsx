
export default Component

import { useEffect , useRef } from 'preact/hooks'
import { useSettings } from '../Hooks/Settings.tsx'
import { IS_BROWSER } from 'Fresh/runtime.ts'


function Component (){

    const dialogRef = useRef<HTMLDialogElement>(null)


    if( IS_BROWSER ){

        const [ isOpen ] = useSettings()


        useEffect(() => {

            const { current } = dialogRef

            if( ! current )
                return

            if( isOpen === current.open )
                return

            if( isOpen )
                current.showModal()
            else
                current.close()
        })
    }


    return (

        <dialog
            aria-modal = 'true'
            ref = { dialogRef }
            id = 'SettingsDialog'

            class = { `
                hidden modal:flex
                flex-col min-w-[20rem]
                bg-white rounded-xl border-2 border-gray-200
            ` }
        >

            <div>

                Dark Mode

            </div>

        </dialog>
    )
}
