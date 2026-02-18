/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */



class UnionFind{
  constructor(n)
  {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(0);
  }



  find(x)
  {
    if (this.parent[x] !== x)
    {
      this.parent[x] = this.find(this.parent[x]);
    }


    return this.parent[x];
  }

  union(x, y)
  {
    let rootX = this.find(x);
    let rootY = this.find(y);

    // cycle detected
    if (rootX == rootY) return false;


    if (this.rank[rootX] > this.rank[rootY])
    {
      this.parent[rootY] = rootX;
    }
    else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
      }

    return true;
  }



}
function kruskalsMST(n, edges) {
  // Your code here

  edges.sort((a, b) => a[2] - b[2]);

  let mstCost = 0;


  let uf = new UnionFind(n);
  for (let [x, y, w] of edges)
  {
    if (uf.union(x, y, w))
    {
      mstCost += w;
    }
  }

  return mstCost;
}

module.exports = { kruskalsMST };