## Graphs

compare and contrast different graphs. Discuss utility. Adjacency list. Traverse through it using BFS DFS.

## What is it?
Finite, with unordered pairs, nodes + connections. Placement of theme doesn't matter, just connections are improtant. 

Graphs stored, linked to one another. You can see certain clusters. Internet could be modeled as a graph in entirety. Mapping like how google map works.

Recommendation Engines
You might also like...
People you might know
Frequently bought with

## Types of graphs
vertex and edge
vertex === node, one of circles
edge === connections
path => vertex edges to vertex

undirected graph
no direction from A - E, no polarity. A <-> E. Tim sees maria's content, and maria also sees tim's content.

directed graph
following is not 2-way by default, justin bieber follows Kanye. But you can

weighted graph, edges have some value associated with them.

## Representing a graph
any number of nodes or edges between them.
2 standard approaches around them.
Adjacency matrix and adjacency list.

## Adjacency Matrix
array of arrays

## Adjacency List
index contain the items as indices. Positions of an array to determine the array.

We could use hash table
```js
var list = {
  A: ["B", "C"],
  B: ["A"],
  C: ["B"]
}
```

## Big O Differences
Adjacency matrix adding an edge => O(v^2)
If your data is sparse, use a matrix instead.

Adjacency matrix is faster to lookup specific edge.
Query edge is O(1). Impelmentation of Matrix can be a little slower.

## Adjacency List?
Most real world data is sparse. List tends to be better than matrix.

## Graph example

```js
class Graph {

constructor() {
    this.adjacencyList = {};
}

addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
}

addEdge(v1, v2) {
  if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      if (!this.adjacencyList[v1].includes(v2)) {
          this.adjacencyList[v1].push(v2)      
      } 
      if (!this.adjacencyList[v2].includes(v1)) {
          this.adjacencyList[v2].push(v1)      
      } 
  }
}

removeEdge(v1,v2) {
  if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);                      
  }
}

removeVertex(vertex) {
  let oldVertices = this.adjacencyList[vertex]
  if (!oldVertices) return;
  for (let v of oldVertices) {
      this.removeEdge(v, vertex);
  }
  delete this.adjacencyList[vertex];
}
```




