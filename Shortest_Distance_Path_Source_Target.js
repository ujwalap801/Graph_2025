let adj = [
    [1, 2],
    [3],
    [4],
    [5],
    [3],
    []
]


function graph(src, target, graph)
{


    let dist = new Array(graph.length).fill(Infinity);
    let parent = new Array(graph.length).fill(null);

    dist[src] = 0;
    let q = [src];

    while (q.length)
    {
        let curr = q.shift();
        if (curr == target)
        {
            break;
        }
        for (let n of graph[curr])
        {
            if (dist[n] == Infinity) {
                dist[n] = dist[curr] + 1;
                parent[n] = curr;
                q.push(n);
            }
        }
    }

    


    if (dist[target] == Infinity)
    {
        return { distance: -1, path :[] };
}
    let path = [];
    for (let v = target; v != null; v = parent[v])
    {
        path.push(v);


    }


  path.reverse();

  return {
    distance: dist[target],
    path
  };


}

console.log(graph(0,5, adj))