
import { createContext , Component } from 'preact'
import { useState } from 'preact/hooks'

export type { Context }
export {
    Provider as ScheduleProvider
}


const Context = createContext<Context>({} as Context)


export const ScheduleContext = Context

interface Context {

    setDay : ( day : number ) => void

    day : number
}


function getDay (){

    const day = new Date()
        .getDay()

    return ( day - 1 + 7 ) % 7
}

const today = getDay()


class Provider extends Component {

    render (){

        const [ day , setDay ] = useState(today)


        const data = {

            setDay : ( day : number ) => setDay(day) ,

            day

        } satisfies Context



        return <>
            <ScheduleContext.Provider value = { data } >
                { this.props.children }
            </ScheduleContext.Provider>
        </>
    }
}
