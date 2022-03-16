var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.value = undefined;
        this.next = null;
        this.value = val;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(head, val) {
        if (head === void 0) { head = null; }
        this.length = 0;
        this.head = null;
        if (head)
            this.head = head;
        else
            this.head = new ListNode(val);
        this.length = 1;
    }
    ;
    LinkedList.prototype.insert = function (val, index) {
        var newNode = new ListNode(val);
        var prev = null;
        var currentNode = this.head;
        var i = 0;
        console.log(index, this.length - 1);
        if (index > this.length - 1) {
            throw "out of range trying to access element ".concat(index, " at LinkedList");
        }
        while (i < index) {
            prev = currentNode;
            currentNode = currentNode.next;
        }
        if (!prev) {
            this.head = newNode;
            newNode.next = currentNode;
        }
        else {
            prev.next = newNode;
            newNode.next = currentNode;
        }
    };
    return LinkedList;
}());
var l = new LinkedList("Head node");
l.insert("Second node", 0);
console.log(l.head);
