var EventUtils = {

    getCurrentTarget: function (e) {
        let target= EventUtils.getEventTarget(e);
        while(!target.classList.contains("treeItem"))
            target = target.parentNode;
        return target;
    },

    getEventTarget: function(e) {
        if (e.toElement) {
            return e.toElement;
        } else if (e.currentTarget) {
            return e.currentTarget;
        } else if (e.srcElement) {
            return e.srcElement;
        } else {
            return null;
        }
    },

    preventDefault: function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
    },

    getElementCenter: el => {
        const original = el;
        var xPos = 0;
        var yPos = 0;
        while (el) {
            if (el.tagName == "BODY") {
                var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
                var yScroll = el.scrollTop || document.documentElement.scrollTop;
                xPos += (el.offsetLeft - xScroll + el.clientLeft);
                yPos += (el.offsetTop - yScroll + el.clientTop);
            } else {
                xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
                yPos += (el.offsetTop - el.scrollTop + el.clientTop);
            }

            el = el.offsetParent;
        }
        return {
            x: xPos + original.offsetWidth/2,
            y: yPos + original.offsetHeight/2
        };
    },

    getMousePosition: function (e) {
        var posx = 0,
            posy = 0;
        if (!e) {
            e = window.event;
        }

        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        return {
            x: posx ,
            y: posy
        };
    }

};

export default EventUtils;