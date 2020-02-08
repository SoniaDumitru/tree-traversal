import { a,b,c,e,h,d, logger} from './tree.js'

/*
Execute an entire level before moving down.
                 (a)
              /   |   \
            (b)  (c)   (d)
          /     / | \    | \
        (e)  (f)  (g)(h) (i)(j)
        /|            |
      (k)(l)         (m)
*/
const beadthFist = (node, callback) => {
  // start the queue with a node
  const queue = [node]
  while(queue.length) {
    const currNode = queue.shift()
    // execute the callback function on that and push all the children of that node in a queue
    callback(currNode)
    queue.push(...currNode.children)
  }
}

beadthFist(a, logger)
