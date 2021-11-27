const tasks = document.querySelector('.tasks');

class Task{
    constructor(text) {
        this.text = text;
    }

    showTask(){
        const newBlock = document.createElement('div');
        newBlock.classList.add('taskBlock');
        newBlock.textContent = `• ${this.text}`;
        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'X'
        buttonRemove.classList.add('btnRemove')
        newBlock.append(buttonRemove);
        tasks.append(newBlock);

        buttonRemove.addEventListener('click', () => {
            newBlock.innerHTML = '';
            newBlock.classList.remove('taskBlock');
        })
    }
}

const btn = document.querySelector('button');
const input = document.querySelector('input');
btn.addEventListener('click', () => {
    let inputValue = document.querySelector('input').value;
    let firstLetter = inputValue.slice(0, 1).toUpperCase();
    let rest = inputValue.slice(1).toLowerCase();
    let finish = firstLetter + rest;
    if(inputValue){
        const newBlock = new Task(finish);
        newBlock.showTask();
        input.value = '';
    }
    else{
        alert('Please enter the text!!')
    }
})