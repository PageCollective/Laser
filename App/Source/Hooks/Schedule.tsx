
import { createContext , Component } from 'preact'
import { useState } from 'preact/hooks'
import { weekOfYear } from 'https://deno.land/std@0.188.0/datetime/mod.ts'

export type { Context }
export {
    Provider as ScheduleProvider
}


const Context = createContext<Context>({} as Context)


export const ScheduleContext = Context

interface Context {

    setWeek : ( week : number ) => void
    setDay : ( day : number ) => void

    week : number
    day : number
}


function getDay (){

    const day = new Date()
        .getDay()

    return ( day - 1 + 7 ) % 7
}

function getWeek (){
    return weekOfYear(new Date)
}

const toweek = getWeek()
const today = getDay()


class Provider extends Component {

    render (){

        const [ week , setWeek ] = useState(toweek)
        const [ day , setDay ] = useState(today)


        const data = {

            setWeek ,
            setDay ,

            week ,
            day

        } satisfies Context



        return <>
            <ScheduleContext.Provider value = { data } >
                { this.props.children }
            </ScheduleContext.Provider>
        </>
    }
}
