function displayName(){
    alert("My Name is Kevin");
}

var $title = function (title) {
    console.log('');
    var len = Math.floor((60 - title.length) / 2);
    title = (title.length > 0) ? `${"=".repeat(len)}${title}${"=".repeat(len)}` : "=".repeat(60);
    console.log(title);
}

var $ex = function (title) {
    console.log('');
    var len = Math.floor((50 - title.length) / 2);
    title = (title.length > 0) ? `${".".repeat(len)}${title}${".".repeat(len)}` : "=".repeat(60);
    console.log(title);
}


function $g(value) {
    //判斷是否為id selector
    if (value.includes('#')) {
        //回傳Element
        return document.querySelector(value);
    }

    //回傳NodeList集合
    var nodelist = document.querySelectorAll(value);

    return nodelist.length == 1 ? nodelist[0] : nodelist;
}

function $log(value){
    console.log(value);
}

export { displayName, $title, $ex, $g, $log };