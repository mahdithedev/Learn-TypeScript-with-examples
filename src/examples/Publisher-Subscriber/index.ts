import Publisher from "./Publisher"
import {ApplicationEvent , newEvent} from "./event"
import Subscriber from "./Subscriber"

const streamPublisher : Publisher<Uint8Array> = new Publisher()

streamPublisher.subscribe((event : ApplicationEvent<Uint8Array>) => {
    console.log(event)
})

// write youre own code expirement with it

const data : Uint8Array = new Uint8Array([12,56,13,4])

streamPublisher.publish(newEvent(data , "Stream-Initlizer"))