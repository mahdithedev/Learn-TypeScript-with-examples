import {ApplicationEvent} from "./event";

type Subscriber<T> = ( event : ApplicationEvent<T> ) => void  

export default Subscriber