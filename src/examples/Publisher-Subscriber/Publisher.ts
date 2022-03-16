import {ApplicationEvent} from "./event"
import Subscriber from "./Subscriber"

class Publisher<T> {

    private subscribers : Subscriber<T>[] = []
    private currentSubscriberId : number = -1

    public subscribe(subscriber : Subscriber<T> ) : number {
        this.subscribers.push(subscriber)
        return ++this.currentSubscriberId
    }

    public publish(event : ApplicationEvent<T>) : void {
        this.subscribers.forEach(subscriber => {
            subscriber(event)
        })
    }

    public unsubscribe(subscriberID : number) {
        this.subscribers.splice(subscriberID , 1)
    }


}

export default Publisher