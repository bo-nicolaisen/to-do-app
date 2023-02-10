
const myInputElement = document.getElementById('myTaskInput');

const myFeedbackElement = document.getElementById('taskList');

const mySubmitButton = document.getElementById('settask');
const myDeleteButton = document.getElementById('deleteTask');


mySubmitButton.addEventListener('click', addTask);
myDeleteButton.addEventListener('click', removeTask);

let myTasks = [];


function addTask() {
    let mytask = myInputElement.value;
    myTasks.push(mytask);

    updateView();
}


function removeTask() {
    myTasks.shift();
    updateView();
}


function updateView() {




    let myText = '<strong>Opgaver:</strong><br><ul>';
    console.log(myText);

    myTasks.map((item) => {
        console.log(item);
        myText = myText + '<li>' + item + '</li>';
        console.log(myText);
    });


    myText = myText + '</ul>';

    myFeedbackElement.innerHTML = myText;


}

