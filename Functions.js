/**
 * Created by eberh060 on 1/28/14.
 */


function searchFor(what, where) { <!--returns the index-->
    return where.indexOf(what);
}

function makeObject(start){
    var state=start;
    var saveStates = new Array();

    function setState(newState){
        state = newState;
    }
    function addState(newState){
        if(saveStates.length > 4) {
            for (var i = 0; i < 4; i++) {
                saveStates[i] = saveStates[i+1];
            }
            saveStates[4] = newState;
        } else {
            saveStates.add(newState);
        }
    }
    function getState(){
        return saveStates[saveStates.length - 1];
    }
}

//function highlight(search){
//    return "$('body').text().highlight('" + search + "my text to highlight')";
//}

module.exports.searchFor = searchFor;
//module.exports.highlight = highlight;