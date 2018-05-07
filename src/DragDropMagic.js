/*
    Browser native implementation of drag/drop for react tree
*/
import EventUtils from './EventUtils.js';

class DragDropMagic {
    constructor(tree) {
        this.tree = tree;
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

    handleDragStart(e) {
        this.draggingElement = EventUtils.getCurrentTarget(e);
        this.originalIndex = Array.from(this.draggingElement.parentNode.children).indexOf(this.draggingElement);
    }

    handleDragEnter(e) {
        let hoverElement = EventUtils.getCurrentTarget(e);
        const treeDiv = hoverElement.parentNode;
        if (treeDiv.lastChild == hoverElement) {
            treeDiv.appendChild(this.draggingElement);
        } else {
            treeDiv.insertBefore(this.draggingElement, hoverElement);
        }
    }

    handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.dataTransfer.dropEffect = 'move';
    }

    handleDragLeave(e) {

    }

    handleDrop(e) {

    }

    handleDragEnd(e) {

    }

    getMousePosition() {
        return {
            x: window.event.pageX,
            y: window.event.pageY
        };
    }

}

export default DragDropMagic;