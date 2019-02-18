class Graph {
  constructor() {
    this.numNodes = 0;
    this.adjaceny = {};
  }
  addVertex(node) {
    this.adjaceny[node] = [];
    this.numNodes++;
  }
  addEdge(node1, node2) {
    if (node1 === node2) return null;
    const addNodeToList = (nodeA, nodeB) => {
      let nodeList = this.adjaceny[nodeA];
      let foundNodeIdx = nodeList.indexOf(nodeB);
      if (foundNodeIdx > -1) {
        return nodeList[foundNodeIdx];
      } else {
        nodeList.push(nodeB);
      }
    };
    addNodeToList(node1, node2);
    addNodeToList(node2, node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjaceny);
    console.log("CONNECTIONS:");
    for (let node of allNodes) {
      console.log(`  ${node}-->${this.adjaceny[node].join(" ")}`);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addEdge("2", "0");
myGraph.addEdge("2", "0");
myGraph.addEdge("2", "1");
myGraph.addEdge("1", "0");
myGraph.addEdge("2", "2");
myGraph.showConnections();
