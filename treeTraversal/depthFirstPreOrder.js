import { a,b,c,e,h,d, logger} from './tree.js'

/*
Go down as far as you can, executing as you go down.
a,b,e,k,l,c,f,g,h,m,d,i,j
                 (a)
              /   |   \
            (b)  (c)   (d)
          /     / | \    | \
        (e)  (f)  (g)(h) (i)(j)
        /|            |
      (k)(l)         (m)
*/

// we execute the callback on the node going through each children of that node and recursivly call depthFirstPreOrder
const depthFirstPreOrder = (node, callback)=> {
  callback(node)
  node.children.forEach(child => depthFirstPreOrder(child, callback))
}
depthFirstPreOrder(a, logger)
