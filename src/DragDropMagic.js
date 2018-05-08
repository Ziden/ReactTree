/*
    Browser native implementation of drag/drop for react tree
*/
import EventUtils from './EventUtils.js';


class DragDropMagic {
    constructor(treeComponent) {
        this.treeComponent = treeComponent;
        this.treeElement = document.getElementById("reactTree");
        var items = Array.from(document.querySelectorAll('.treeItem'));
        items.forEach(item => {
            item.addEventListener('dragstart', this.handleDragStart.bind(this), false);
            item.addEventListener('dragenter', this.handleDragEnter.bind(this), false);
            item.addEventListener('dragover', this.handleDragOver.bind(this), false);
            item.addEventListener('dragleave', this.handleDragLeave.bind(this), false);
            item.addEventListener('drop', this.handleDrop.bind(this), false);
            item.addEventListener('dragend', this.handleDragEnd.bind(this), false);
        });
    }

    moveChildren(element, movingElement, newIndex) {
        if (element.children.lenght == newIndex) {
            element.appendChild(movingElement);
        } else {
            element.insertBefore(movingElement, element.children[newIndex]);
        }
    }

    handleDragStart(e) {
        this.draggingElement = EventUtils.getCurrentTarget(e);
        this.originalIndex = Array.from(this.draggingElement.parentNode.children).indexOf(this.draggingElement);
    }

    handleDragEnter(e) {}

    handleDragOver(e) {
        const hoverElement = EventUtils.getCurrentTarget(e);
        const mousePos = EventUtils.getMousePosition();
        const elementPos = EventUtils.getElementCenter(hoverElement);
        let insertIndex = Array.from(this.treeElement.children).indexOf(hoverElement);
        if (mousePos.y > elementPos.y) {
            insertIndex++;
        } else {
            insertIndex--;
        }
        this.moveChildren(this.treeElement, this.draggingElement, insertIndex);
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
    }

    handleDragLeave(e) {

    }

    handleDrop(e) {
        const newTreeItemOrder = Array.from(this.treeElement.children).map(element => element.id);
        const treeItems = [];
        newTreeItemOrder.forEach(itemId => {
            const item = this.treeComponent.state.items.filter(item => item.id == itemId)[0];
            treeItems.push(item);
        });
        this.treeComponent.setState({
            items: treeItems
        });
    }

    handleDragEnd(e) {

    }

}

export default DragDropMagic;