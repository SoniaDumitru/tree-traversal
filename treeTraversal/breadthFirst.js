import { a,b,c,e,h,d, logger} from './tree.js'

/*
Execute an entire level before moving down.
a,b,c,d,e,f,g,h,i,j,k,l,m
                 (a)
              /   |   \
            (b)  (c)   (d)
          /     / | \    | \
        (e)  (f)  (g)(h) (i)(j)
        /|            |
      (k)(l)         (m)
*/

// start the queue with a node execute the callback function on that and push all the children of that node in a queue
const beadthFist = (node, callback) => {

  const queue = [node]
  while(queue.length) {
    const currNode = queue.shift()
    callback(currNode)
    queue.push(...currNode.children)
  }
}

beadthFist(a, logger)
