/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    

    let graph = {};

    for(let [from, to] of tickets)
    {
        if(!graph[from]) graph[from] =[];
        graph[from].push(to);

    }

    // console.log(graph)
    
    for(let node in graph)
    {
        graph[node].sort();
    }

    console.log(graph);

    let path =[];
    let dfs =(curr)=>
    {

        let dest = graph[curr] || [];
        while(dest.length)
        {
            let neigh = graph[curr].shift();
            dfs(neigh);
        }

        path.unshift(curr);

    }

    dfs("JFK");

    return path;
};