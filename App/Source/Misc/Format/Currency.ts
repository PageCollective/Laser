
export { formatCurrency }

import { Price } from 'Storefront/Types'


const { NumberFormat } = Intl


function formatCurrency ( price : Price ){

    const { currencyCode , amount } = price

    const formatter = new NumberFormat('en-US',{
        currency : currencyCode ,
        style : 'currency'
    })

    return formatter
        .format(parseFloat(amount))
}
