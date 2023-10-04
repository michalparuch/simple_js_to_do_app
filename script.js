const inputText = document.getElementById('input-text');
const listItems = document.getElementById('list-items');

function addNewTask(){
    if(inputText.value ===''){
        alert('Please add your task first!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        listItems.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputText.value = '';
    saveList();
}

listItems.addEventListener('click', function(a){
    if(a.target.tagName ==='LI'){
        a.target.classList.toggle('checked');
        saveList();
    }
    else if(a.target.tagName === 'SPAN'){
        a.target.parentElement.remove();
        saveList();
    }
});

function saveList(){
    localStorage.setItem('data', listItems.innerHTML);
}

function displayList(){
    listItems.innerHTML = localStorage.getItem('data')
};

displayList();