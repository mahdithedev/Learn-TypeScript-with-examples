export interface ApplicationEvent<T> {
    name : string
    description? : string
    data : T
}

export function newEvent<T>(data : T , name : string , description? : string) : ApplicationEvent<T> {
    return {name , data , description}
}