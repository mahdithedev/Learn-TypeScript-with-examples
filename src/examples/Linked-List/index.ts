class ListNode<T> {

    public value : T | undefined = undefined
    public next : ListNode<T> | null = null

    constructor(val : T) {
        this.value = val
    }

}

class LinkedList<T> {

    public length : number = 0
    public head : ListNode<T> | null = null

    constructor(head : ListNode<T> | null)
    constructor(val : T)
    constructor(head : ListNode<T> | null = null , val? : T) {
        if(head)
         this.head = head
        else
         this.head = new ListNode<T>(val)
        this.length = 1
    };

    insert(val : T , index : number) {
        
        const newNode = new ListNode<T>(val)

        let prev : ListNode<T> | null = null
        let currentNode : ListNode<T> = this.head
        let i : number = 0
        
        console.log(index , this.length-1)

        if(index > this.length-1) {
            throw `out of range trying to access element ${index} at LinkedList`
        }

        while(i < index) {
            prev = currentNode
            currentNode = currentNode.next
        }

        if(!prev) {
            this.head = newNode
            newNode.next = currentNode
        }
        else {
            prev.next = newNode
            newNode.next = currentNode
        }

    }

}

const l = new LinkedList<string>("Head node")
l.insert("Second node" , 0)