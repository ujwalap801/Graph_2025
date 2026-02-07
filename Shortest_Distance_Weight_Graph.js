class MyMinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(value, priority) {
        this.heap.push({ value, priority });
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[index].priority >= this.heap[parent].priority) break;
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

            if (left < length && this.heap[left].priority < this.heap[smallest].priority)
                smallest = left;

            if (right < length && this.heap[right].priority < this.heap[smallest].priority)
                smallest = right;

            if (smallest === index) break;
            this.swap(index, smallest);
            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}


// Graph: [ [neighbor, weight], ... ]
const graph = [
    [[1, 2], [2, 4]],
    [[3, 7], [2, 1]],
    [[4, 3], [5, 1]],
    [[6, 1]],
    [[3, 2], [6, 5]],
    [[3, 3], [6, 8]],
    []
];

function dijkstra(graph, src) {
    let n = graph.length;
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    let pq = new MyMinPriorityQueue();
    pq.enqueue(src, 0);

    while (pq.size()) {
        let { value: node, priority: nodeDist } = pq.dequeue();

        if (nodeDist > dist[node]) continue;

        for (let [neighbor, weight] of graph[node]) {
            let newDist = dist[node] + weight;

            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                pq.enqueue(neighbor, newDist);
            }
        }
    }

    return dist;
}

console.log(dijkstra(graph, 0));
