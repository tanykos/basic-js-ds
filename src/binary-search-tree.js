// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    const currNode = this.root();
    if (!currNode) {
      this.rootNode = newNode;
    } else {
      this.addNode(currNode, newNode);
    }
  }

  addNode(currNode, newNode) {
    if(newNode.data < currNode.data) {
      if (!currNode.left) {
        currNode.left = newNode;
      } else {
        this.addNode(currNode.left, newNode);
      }
    } else {
      if (!currNode.right) {
        currNode.right = newNode;
      } else {
        this.addNode(currNode.right, newNode);
      }
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    let currNode = this.root();

    if (currNode) {
      return this.findNode(currNode, data);
    }
    return null;
  }

  findNode(currNode, data) {
    if (data === currNode.data) return currNode;

    if(data < currNode.data) {
      if (currNode.left) {
        return this.findNode(currNode.left, data);
      } else {
        return null;
      }
    } else {
      if (currNode.right) {
        return this.findNode(currNode.right, data);
      } else {
        return null;
      }
    }
  }

  remove(data) {    
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(currRoot, data) {
    if (!currRoot) return null;

    if (data < currRoot.data) {
      currRoot.left = this.removeNode(currRoot.left, data);
    } else if (data > currRoot.data) {
      currRoot.right = this.removeNode(currRoot.right, data);
    } else {
      if (!currRoot.left && !currRoot.right) {
        return null;
      }
      if (!currRoot.left) {
        return currRoot.right;
      } else if (!currRoot.right) {
        return currRoot.left;
      }
      currRoot.data = this.min(currRoot.right);
      currRoot.right = this.removeNode(currRoot.right, currRoot.data);
    }

    return currRoot;
  }

  min(subTree = this.root()) {
    let min = subTree;

    if (min && min.left) {
      while (min.left) {
        min = min.left;      
      }
    }

    return min.data;
  }

  max() {
    let max = this.root();

    if (max && max.right) {
      while (max.right) {
        max = max.right;      
      }
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};
