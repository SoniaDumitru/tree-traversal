import { a,b,c,e,h,d, logger} from './tree.js'

/*
Go down as far as you can and then start executing.
k,l,e,b,f,g,m,h,c,i,j,d,a
                 (a)
              /   |   \
            (b)  (c)   (d)
          /     / | \    | \
        (e)  (f)  (g)(h) (i)(j)
        /|            |
      (k)(l)         (m)
*/

// when we get to the bottom then we execute the callback
const depthFirstPostOrder = (node, callback)=> {
  node.children.forEach(child => depthFirstPostOrder(child, callback))
  callback(node)
}
depthFirstPostOrder(a, logger)
