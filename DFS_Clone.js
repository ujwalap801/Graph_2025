
var cloneGraph = function(root) {
    if(!root) return null;
    let stack =[root];
    let visited = new Map();


    let cloneRoot = new Node(root.val);
    visited.set(root, cloneRoot);

    while(stack.length)
    {
        let curr = stack.pop();
        for(let n of curr.neighbors)
        {
if(!visited.has(n))
{

            stack.push(n);
            visited.set(n, new Node(n.val));
        }


        let cloneCurr = visited.get(curr);
        cloneCurr.neighbors.push(visited.get(n));
    }
    }
    

    return cloneRoot;
};