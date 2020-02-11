// How to traverse a tree with breadthFirst and depthFirst approaches.

// function to create a node with value and children property
function node(value) {
  return {
    value,
    children: []
  }
}

// initilize nodes
const a = node('a')
const b = node('b')
const c = node('c')
const d = node('d')
const e = node('e')
const f = node('f')
const g = node('g')
const h = node('h')
const i = node('i')
const j = node('j')
const k = node('k')
const l = node('l')
const m = node('m')

/*
                 (a)
              /   |   \
            (b)  (c)   (d)
          /     / | \    | \
        (e)  (f)  (g)(h) (i)(j)
        /|            |
      (k)(l)         (m)
*/


// push the appropriate children
a.children.push(b,c,d)
b.children.push(e)
e.children.push(k,l)
c.children.push(f,g,h)
h.children.push(m)
d.children.push(i,i)

// callback that we will use for testing, taking the node and log that's node value
const logger = node => {
  console.log(node.value)
}

// export root node of the tree and the logger function
// module.exports = { a,logger }
export { a,b,c,e,h,d }
export { logger }
