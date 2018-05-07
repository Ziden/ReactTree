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
  
};

export default EventUtils;