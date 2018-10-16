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

## Graph traversal
We start from one graph, then go to another node
DG, edges are one way. 0 --> 6, need to specifiy starting point. Write code for back tracking, why shoudl you care?

Web crawlers, find link to another page. Etc. Crawling is just a graph traversal.

## Most overlap with
millions of datapoints to figure out which has most things in common.

## Facebook friends graph
Find friends of friends, closest with shared friends, then recommend them.
GPS navigation
AI shortest path to win game

## Graphs not trees
Depth frist traversal, moving away.
Depth first, visit order first. We remember where we have been. Follow neighbors before stepping back.

## DFS
base case when vertex is empty
you can mark something visited using hash.

if neighbor not visited, then call DFS on neighbor. Depth First order using recursion.

```js
dfs(start) {
  var results = []
  var visited = {}
  var list = this.adjacencyList;

  function visit(vertex) {
      if (!list[vertex]) return null;
      console.log('visited ' + vertex + ' neighbors: ' + list[vertex])
      console.log('already seen', visited)
      results.push(vertex)
      visited[vertex] = true;

      for (let neighbor of list[vertex]) {
          if (!visited[neighbor]) {
              visit(neighbor)
          }
      }
  }
  let firstKey = Object.keys(this.adjacencyList).shift();
  visit(start || firstKey)
  console.log(results)
  return results
}
```

## DFS Iteratively
```js
dfsIterative(start) {
    var results = []
    var visited = {}
    var list = this.adjacencyList;
    let firstKey = start || Object.keys(list).shift();
    let stack = [firstKey]
    let vertex;
    visited[firstKey] = true;

    while (stack.length) {
        console.log('stack', stack)
        vertex = stack.pop();
        results.push(vertex);
        
        for (let neighbor of list[vertex]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                stack.push(neighbor)
            }
        }
    }
    console.log(results)
    return results
}
```
above youg et a different order for the results, because you pop off the stack you grab from the last element in the array, meaning you don't go from beginning of the stack.

## Breadth First Traversal
Each neighbor has 3 neighbors of height 2. Number of jumps away from source. We visit things of same height before we visit the neighbors.

so this function accepts a starting vertex
then acepts a queue or array and place vertex in it.
create an array to store nodes visited
then object to store nodes visited
mark starting vertex as visited

## BFS
```js
bfs(start) {
    var results = []
    var visited = {}
    var list = this.adjacencyList;
    let firstKey = start || Object.keys(list).shift();
    let queue = [firstKey]    
    visited[firstKey] = true;
    let vertex;

    while (queue.length) {
        console.log('queue', queue)
        vertex = queue.shift();
        results.push(vertex);
        
        for (let neighbor of list[vertex]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor)
            }
        }
    }
    console.log(results)
    return results
}
```
Basically the main difference here is we shift or take from the beginning of the neighbors and we work our way through those neighbors visiting them and their neighbors.


## Dijkstras Algorithm
What is it?
graph and priority queue. Fastest way to go from point A to point B. Edsger Dijkstra, working early started as physicist. He established rigor in computer science, he wrote a number of influencial paper. He created new fields in CS.

## Why is it useful?
GPS, finding fastest route
Network Routing -- finds open shortest path for data
Biology -- used to model spread of viruses among humans

## We need a weighted graph
We need to update it so that our edge has value
We need to store [{ node: "B", weight: 10}]



