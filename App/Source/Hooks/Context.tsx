
import { createContext } from 'preact'




interface Context {

    setDay : ( day : number ) => void

    day : number
}



// const Default = {
//     setDay : () => console.log('NIOIO')
// }



export type { Context }

