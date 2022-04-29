class ListNode {
    constructor(v) {
        this.val = v;
        this.next = null;
    }
}

function findMiddleNode(list) {
    //brute force

    // if (list == null || list.next == null) {
    //     return list;
    // } else {
    //     let listLen = 0;
    //     let currNode = list;
    //     while (currNode) {
    //         listLen += 1;
    //         currNode = currNode.next;
    //     }

    //     let secondPass = 0;
    //     let secondCurrNode = list;
    //     while (secondPass < Math.floor(listLen / 2)) {
    //         secondPass += 1;
    //         secondCurrNode = secondCurrNode.next;
    //     }

    //     return secondCurrNode;
    // }

    // two pointers method
    fast = list;
    slow = list;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
