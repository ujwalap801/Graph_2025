

const n = 6;
const adj = [
    [],
    [ 2],
    [3],
    [1],
    [0, 1],
    [0, 2]
]

function topologicalSort(n, graph) {
    // your solution here


    let indegree = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let node of graph[i]) {
            indegree[node]++;
        }
    }

    // console.log(indegree);


    let q = [];

    for (let i = 0; i < indegree.length; i++)
    {
        if (indegree[i] == 0)
        {
            q.push(i)
        }
    }

    // console.log(q);

    let ans = [];
    while (q.length)
    {
        let curr = q.shift();
        ans.push(curr);
        for (let neighbour of graph[curr])
        {
            indegree[neighbour]--;
            if (indegree[neighbour] == 0)
            {
                q.push(neighbour);
            }
        }
    }



    if (ans.length !== n)
    {
        console.log("grpah has cycle no toolploical is formed");
       return []

    }


    // console.log(ans)
    return ans;
}


 console.log(topologicalSort(n, adj))


