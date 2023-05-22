
# MetaObjects


## Data Inputs

-   Single Line Text
-   Multi Line Text
-   Integer
-   Decimal
-   Product
-   File
-   Date & Time
-   Date
-   Dimensions
-   Volume
-   Weight
-   Rich Text
-   Page
-   Product
-   Variant
-   Metaobject
-   Collection
-   Boolean
-   Color
-   Rating
-   Url
-   Money
-   JSON
-   Mixed Reference

<br>

## Beautician

Represents the personal of the salon.

```ts
interface Beautician {
    
    avatar ?: File
    name : SingleTextLine
}
```

<br>

## Appointments

List of appointment orders with their date as  
handle, used to make querying by date easier.

```ts
interface Appointments {
    
    orders : Array<Integer>
    date : SingleTextLine
}
```