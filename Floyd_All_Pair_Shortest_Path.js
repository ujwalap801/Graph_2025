
// Edge list: [u, v, w]
const edges = [
    [0, 1, 2],
    [1, 0, 7],
    [1, 2, 3],
    [2, 1, 8],
    [2, 3, 2],
    [3, 0, 1],
  [3, 1, 5]
  
];




function fn(v, edges)
{
    const dist = Array.from({ length: v}, (_, i) =>
        Array.from({ length: v }, (_, j) => (i == j) ? 0 : Infinity))





    for (let [i, j, w] of edges)
    {
    dist[i][j] =w
    }




    for (let k = 0; k < v; k++) {
        for (let i = 0; i < v; i++) {
            for (let j = 0; j < v; j++) {
                if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
                    dist[i][j] = Math.min(
                        dist[i][j],
                        dist[i][k] + dist[k][j]
                    );
                }
            }
        }
    }
    return dist;
}


console.log(fn(4, edges) )