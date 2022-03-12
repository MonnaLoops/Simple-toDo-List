//select the btn
let addToDo = document.querySelector('#input-btn');
//select the input
let inputData = document.querySelector('#input-data');
//select the empty div
let newTask = document.querySelector('.new-task');

//creat the event
addToDo.addEventListener('click', ()=>{
    //create new element and it's class
    let newTaskElement = document.createElement('p');
    newTaskElement.classList.add('new-item');

    //condition
    if(inputData.value === ""){

        alert('Input field is empty. Insert a new tast');

    }else{

        //select and add input data
        newTaskElement.innerText = inputData.value;
        newTask.appendChild(newTaskElement);
        inputData.value = '';

        //cross event
        newTaskElement.addEventListener('click', () =>{
            newTaskElement.style.textDecoration = 'line-through';
        });

        //delete event
        newTaskElement.addEventListener('dblclick', () =>{
            newTask.removeChild(newTaskElement);
        });
    }
});
