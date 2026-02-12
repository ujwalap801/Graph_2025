class MyMinPriorityQueue {
    constructor(compareFn) {
        this.heap = [];
        this.compare = compareFn;
    }

    enqueue(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.compare(this.heap[index], this.heap[parent]) >= 0) break;

            this.swap(index, parent);
            index = parent;
        }
    }

    dequeue() {
        if (this.heap.length === 0) return null;

        const min = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }

        return min;
    }

    heapifyDown() {
        let index = 0;
        let length = this.heap.length;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length &&
                this.compare(this.heap[left], this.heap[smallest]) < 0)
                smallest = left;

            if (right < length &&
                this.compare(this.heap[right], this.heap[smallest]) < 0)
                smallest = right;

            if (smallest === index) break;

            this.swap(index, smallest);
            index = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}


// Adjacency list
const edges = [
    [[1, 4], [2, 2], [3, 5]],
    [[0, 4], [3, 1]],
    [[0, 2], [3, 3]],
    [[1, 1], [2, 3]]
];


function preMST(n, graph) {

    let visited = new Array(n).fill(false);

    // Compare by weight
    let pq = new MyMinPriorityQueue((a, b) => a[1] - b[1]);

    let mst = 0;
    let edgesUsed = 0;

    // Push as [node, weight]
    pq.enqueue([0, 0]);

    while (!pq.isEmpty() && edgesUsed < n) {

        let [node, weight] = pq.dequeue();

        if (visited[node]) continue;

        visited[node] = true;
        mst += weight;
        edgesUsed++;

        for (let [nextNode, nextWeight] of graph[node]) {
            if (!visited[nextNode]) {
                pq.enqueue([nextNode, nextWeight]);
            }
        }
    }

    return mst;
}

console.log(preMST(4, edges));