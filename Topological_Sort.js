function topologicalSort(n, graph) {
  // your solution here

  let visited = new Set();


  let ans = [];

  let dfs = (curr) =>
  {

    visited.add(curr);


    for (let neighbour of graph[curr])
    {
      if (!visited.has(neighbour))
      {
        dfs(neighbour);
  }
    }

    ans.unshift(curr);




}




  for (let i = 0; i < n; i++)
  {
    if (!visited.has(i)) {
      dfs(i);
    }
  }




  return ans;

}

module.exports = { topologicalSort };