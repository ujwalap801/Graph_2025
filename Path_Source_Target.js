/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let start =0;
    let end = graph.length-1;

    let allPaths =[];

    const dfs =(curr, path)=>
    {

        if(curr == end)
        {

            allPaths.push([...path]);
            return;
        }

        for(let neighbour of graph[curr])
        {
            path.push(neighbour);
            dfs(neighbour , path);
            path.pop();
        }

    }

    dfs(0, [0]);

    return allPaths;
    
};