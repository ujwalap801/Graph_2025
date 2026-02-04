function hasCycle(edges) {
  // your solution here

  let graph = {};
  for (let [x, y] of edges)
  {
    if (!graph[x]) graph[x] = [];
    if (!graph[y]) graph[y] = [];

    graph[x].push(y);
    graph[y].push(x);
  }
  let visited = new Set();

  let dfs = (curr, parent) =>
  {

    visited.add(curr);
    for (let neighbour of graph[curr])
    {
      if (!visited.has(neighbour))
      {
      return  dfs(neighbour, curr);
      } else if (neighbour != parent)
      {
        return true;
      }
    }
    return false;

  }

  return dfs(0, -1);


}

module.exports = { hasCycle };
