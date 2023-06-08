
export { Hook as useLocal }

import { signal } from '@preact/signals'


const available = signal(isAvailable())


function isAvailable (){

    try {

        localStorage.setItem('test','test')
        localStorage.removeItem('test')

        return true

    } catch ( exception ) {}

    return false
}

function install ( type : string ){
    Object.defineProperty(window,type,{
        value : new Storage
    })
}


function Hook (){

    if( ! available.value )
        install('localStorage')

    return [ self.localStorage , available.value ] as const
}


class Storage {

    #storage = new Map

    setItem ( key : string , value : string ){
        this.#storage
            .set(key,value)
    }

    getItem ( key : string ){
        this.#storage
            .get(key)
    }

    removeItem ( key : string ){
        this.#storage
            .delete(key)
    }

    clear (){
        this.#storage
            .clear()
    }

    key ( index : number ){
        return [ ... this.#storage.keys() ]
            .at( index )
    }

    get length (){
        return this
            .#storage
            .size
    }
}
