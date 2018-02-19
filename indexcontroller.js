let $ = require('jquery')
let cont = 0

$('#txtcantidad').text(cont.toString())
$('#btnsumar').click(function () {
    cont++
    $('#txtcantidad').text(cont)
})

$("#btnmostrar").click(function () {
    console.log('haciendo click');
    if (app3.seen) {
        app3.seen = false
    }
    else {
        app3.seen = true
    }
})


var app = new Vue({
    el: '#app',
    data: {
        message: "hello bitches"
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})


Vue.component('mycomponent', {
    template:`
        <div>
            <h1>welcome to my component</h1>        
            <h2>this es the sub title</h2>
            <p>this es my component text</p>
        </div>
    `
});


new Vue({
    el: "#component"
});
