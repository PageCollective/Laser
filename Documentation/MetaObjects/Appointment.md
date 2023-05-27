
# Appointment

MetaObject referencing the personal, customer,  
program, as well as temporal information.

<br>

```ts
interface Appointment {
    
    /**
     *  The personal carrying out the appointment
     */
    
    beautician : MetaObject<Beautician>
    
    /**
     *  The person being served by the salon
     */
    
    customer : MetaObject<Customer>
    
    /**
     *  The body parts that will be treated
     */
     
    program : MetaObject<BodyPart> []
    
    /**
     *  Time the appointment will take place
     */
     
    time : SingleTextLine
    
    /**
     *  The amount of time the appointment will take up
     */
     
    duration : Integer
}
```

<br>