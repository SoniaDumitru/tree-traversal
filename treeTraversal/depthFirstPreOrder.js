import { a,b,c,e,h,d, logger} from './tree.js'

/*
Go down as far as you can, executing as you go down.
                 (a)
              /   |   \
            (b)  (c)   (d)
          /     / | \    | \
        (e)  (f)  (g)(h) (i)(j)
        /|            |
      (k)(l)         (m)
*/
const depthFirstPreOrder = (node, callback)=> {
  // we execute the callback on the node
  callback(node)
  // going through each children of that node and recursivly call depthFirstPreOrder
  node.children.forEach(child => depthFirstPreOrder(child, callback))
}
depthFirstPreOrder(d, logger)
