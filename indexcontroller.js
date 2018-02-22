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




Vue.component('history', {
    props: ["text",'history'],
    template:`
    <div class="history container-fluid">
    <div class="title row">
        <div class="col-6">
            <h5>{{history}}</h5>
        </div>
        <div class="col-6" style="text-align:right">
            <h5>Epic 2231</h5>
        </div>
    </div>
    <div class="row text">
        <div class="col">
            <p>
                {{text}}
            </p>
        </div>
    </div>
    <a href="#">
        <div class="task done"></div>
    </a>
    <a href="#">
        <div class="task done"></div>
    </a>
    <a href="#">
        <div class="task process"></div>
    </a>
    <a href="#">
        <div class="task"></div>
    </a>
    <a href="#">
        <div class="task"></div>
    </a>
</div>
    `
});

new Vue({
    el: '#app',
    data:{
        historias:[
            {history:'historia 1', text:'parrafo de la historia 1'},
            {history:'historia 1', text:'parrafo de la historia 1'},
            {history:'historia 1', text:'parrafo de la historia 1'},
            {history:'historia 1', text:'parrafo de la historia 1'},
            {history:'historia 1', text:'parrafo de la historia 1'},
            {history:'historia 1', text:'parrafo de la historia 1'},
            {history:'historia 1', text:'parrafo de la historia 1'},
            {history:'historia 2', text:'parrafo de la historia 2'}
        ]
    }
  })
