function reconstruct(preorder, inorder) {
  if (!preorder && !inorder) return null;
  if (preorder.length === inorder.length === 1) return preorder[1]

  if (!preorder.length) return []
  let root = preorder[0]
  console.log('root:', root, 'preorder:', preorder, 'inorder:', inorder)
  let rootIndex = inorder.indexOf(root)
  root.left = reconstruct(preorder.slice(1, 1 + rootIndex), inorder.slice(0, rootIndex))
  root.right = reconstruct(preorder.slice(1 + rootIndex), inorder.slice(rootIndex + 1))
  return root
}

preorder = ['a', 'b', 'd', 'e', 'c', 'f', 'g']
inorder = ['d', 'b', 'e', 'a', 'f', 'c', 'g']

console.log(reconstruct(preorder, inorder))