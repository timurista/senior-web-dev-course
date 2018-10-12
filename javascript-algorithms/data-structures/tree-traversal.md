## Tree Traversal
how do you visit every node only once?
It is a tree with a root, but data is not ordered
Visit every node once? Many ways to do it.

4 Different ways

## Breadth First, Depth First Search

BFS
You start at beginning then working across.

DFS
YOu just go to the end of the tree then work back up.

DFS - Pre order root down to end.

DFS - Post order, down to bottom than work way back up.

## Breadth first search
visit every sibling node BEFORE you visit a child.

### Implementation?
Use List or Array to model a queue
push to add in,
shift to remove

Queue to track things
Root then add to Queue. Queue and visited.

Binary tree BFS. First in first out, straightforward.
Loop over all children.

```js
bfs() {
    if (!this.root) return [];
    var queue = [this.root];
    var visited = [];
    var node;

    while (queue.length) {
        node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        visited.push(node.val);
    }
    return visited;
}
```

## Node
For any node we do the visit then explore left side, then right side.
Explore node then traverse left and right.

Recursively do it.

```js
dfsPreorder() {
    var visited = [];

    function traverse(node) {
        visited.push(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
}
```

## DFS PostOrder
basically same, but after we finish traversing, then we store the variable in visited.

```js
dfsPostorder() {
    var visited = [];

    function traverse(node) {             
        if (node.left) traverse(node.left)
        if (node.right) traverse(node.right)
        visited.push(node.val); // only change is move this at the end            
    }

    traverse(this.root);
    return visited;
}
```

In order is basically just traversing the left first and pushing that.

```js
dfsInOrder() {
    var visited = [];

    function traverse(node) {             
        if (node.left) traverse(node.left)
        visited.push(node.val)
        if (node.right) traverse(node.right)                          
    }

    traverse(this.root);
    return visited;
}
```

## BFS or DFS
It depends on your situation on which one to use.
Depends on tree, if tree is fully fleshed out many siblings > children. Then use DFS, since you don't have to keep much in memory.

time complexity is same for DFS, but the space complexity can change.

## DFS - IN order
DFS in order you get set of all nodes in order on binary search tree.

DFS PreOrder is given in order when you can recreate it.

