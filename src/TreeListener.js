class TreeListener {
    constructor(tree) {
        this.tree = tree;
    }

    onClickTreeItem(treeItem) {
        console.log("Clicked ",treeItem.state.item);
    }

    onDragStart(treeItem) {
        console.log("Drag Started on ",treeItem);
    }
}

export default new TreeListener();