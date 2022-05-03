function $g(selector){
    //判斷是否為id selector
    if(selector.includes('#') && !selector.includes(' ')){
        return document.querySelector(selector);
    }
    let nodeliist = document.querySelectorAll(selector);
    return nodeliist.length == 1? nodeliist[0]:nodeliist;
}
function $c(selector){
    return document.createElement(selector);
}