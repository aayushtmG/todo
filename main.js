


// making sure that input field is not empty
 let input = document.getElementById('newTask');
function check(){
    if(input.value.length == 0){
        alert('PLEASE ENTER SOMETHING TO ADD!!');
    }else{
        add();
    }
}    


// using enter to accept the input
let newtask = document.getElementById('newTask');
newtask.addEventListener('keypress',function(event){
    if(event.key == 'Enter'){
        check();
    }
})


function add(){
    
    const toAdd = document.getElementById('newTask').value;
    const list = document.createElement('li');

    //creating div that contain icon for check and del...
    const actions = document.createElement('div');

    
    list.append(toAdd);
    list.append(actions);
    actions.setAttribute('id','actions');
    const del = document.createElement('button');
    const check = document.createElement('button');
    del.setAttribute('class','btn btn-danger');
    check.setAttribute('class','btn btn-primary');
    del.innerHTML= '<i class="fas fa-trash"></i>';
    check.innerHTML= '<i class="fas fa-check"></i>';
    actions.append(check);
    actions.append(del);
    del.setAttribute('id','delBtn');
    check.setAttribute('id','checkBtn');
    const toWhere = document.getElementById('task');
    toWhere.appendChild(list);
    input.value = "";
    
    del.addEventListener('click',function(){
        toWhere.removeChild(list);
    })
    check.addEventListener('click',checkState);
    function checkState(){
        if(list.style.textDecoration === 'none'){
            list.style.textDecoration = 'line-through red';
            list.style.color = "rgba(0, 0, 0, 0.637)";
        }else{
            list.style.textDecoration = 'none';
            list.style.color = 'black';
        }
    };
    
}
