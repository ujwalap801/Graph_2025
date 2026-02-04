function shortestDistance(graph, src) {
  // your solution here

  let dist = new Array(graph.length).fill(Infinity);
  dist[src] = 0;

  let q = [src];

  while (q.length)
  {
    let curr = q.shift();
    for (let n of graph[curr])
    {
      if (dist[n] == Infinity)
      {
        dist[n] = dist[curr] + 1;

           q.push(n);
      }

   
    }
  }

  return dist;



}

module.exports = { shortestDistance };
