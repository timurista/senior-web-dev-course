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
