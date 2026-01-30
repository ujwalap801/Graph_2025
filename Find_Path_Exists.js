// BFS 
var validPath = function(n, edges, source, destination) {
    let map ={};

    for(let [x, y] of edges)
    {

        if(!map[x]) map[x] =[];
        if(!map[y]) map[y] =[];
        map[x].push(y);
        map[y].push(x);
    }

    // console.log(map);

    let q =[source];

    let visited = new Set();
    visited.add(source);

    while(q.length)
    {
    let curr = q.shift();
    if(curr ==destination )
    {
        return true;
    }
   for(let neighbor of map[curr])
   {
   if(!visited.has(neighbor))
   {
    q.push(neighbor);
    visited.add(neighbor);
   }
   }

    }

    return false;
};





// DFS


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let map ={};

    for(let [x, y] of edges)
    {

        if(!map[x]) map[x] =[];
        if(!map[y]) map[y] =[];
        map[x].push(y);
        map[y].push(x);
    }

    // console.log(map);

    let stack =[source];

    let visited = new Set();
    visited.add(source);

    while(stack.length)
    {
    let curr = stack.pop();
    if(curr ==destination )
    {
        return true;
    }
   for(let neighbor of map[curr])
   {
   if(!visited.has(neighbor))
   {
    stack.push(neighbor);
    visited.add(neighbor);
   }
   }

    }

    return false;
};




// DFS RECRUSIVE
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let map ={};

    for(let [x,y] of edges)
    {
        if(!map[x])  map[x] =[];

        if(!map[y]) map[y] =[];

        map[x].push(y);
        map[y].push(x);


    }

    // console.log(map);

    let visited = new Set();

    let dfs =(curr)=>
    {
     
     if(curr ===destination )
     {
        return true;
     }
     for(let neighbor of map[curr])
     {
        if(!visited.has(neighbor))
        {
            visited.add(neighbor);
           if(dfs(neighbor))
           {
            return true;
           }
        }
     }


     return false;
    }


    return dfs(source)

};