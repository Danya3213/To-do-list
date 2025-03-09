document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('#inputTask');
    const confirmBtn = document.querySelector('#confirmButtonTask');
    let list = document.querySelector('#taskList');
    let listItems = list.children;
    let deleteButtons = document.querySelectorAll('#deleteButton');
    let completeButtons = document.querySelectorAll('#completedMark');
    input.value = '';

    const deleteBtns = () => {

        const deleteButton = () => {

            const button = event.target;
            listFunctions.deleteTask(button);
        }

        deleteButtons = document.querySelectorAll('#deleteButton');

        deleteButtons.forEach((button) => {

            button.addEventListener('click', deleteButton);
        });
    };

    const completeTasks = () => {

        completeButtons = document.querySelectorAll('#completedMark');

        const addTask = () => {

            const button = event.target
            listFunctions.completeTask(button);
        }

        completeButtons.forEach(button => {

            button.addEventListener('click', addTask);
        })
    };

    const listFunctions = {
        
        addTask: () => {

            if (input.value === '') {
                
                alert('Input is empty')
            } else {
    
                list.innerHTML +=  `<li class="wrapper__list-item">
                                        <div class="wrapper__item-column">
                                            <div class="wrapper__item-mark" id="completedMark">
                                            </div>
                                            <p class="wrapper__item-text">${input.value}</p>
                                        </div>
                                        <button class="wrapper__item-button" id="deleteButton"></button>
                                    </li>`
            }
            
            input.value = '';
            listFunctions.changesDOM();
        },
    
        deleteTask: (button) => {        
            
            button.parentElement.remove();
            listFunctions.changesDOM();
        },

        completeTask: (marker) => {

            marker.classList.toggle('_completed');
        },

        changesDOM: () => {

            deleteButtons = document.querySelectorAll('#deleteButton');
            completeButtons = document.querySelectorAll('#completedMark');
            list = document.querySelector('#taskList');
            listItems = list.children;
            deleteBtns();
            completeTasks();
        }
    };

    confirmBtn.addEventListener('click', () => {

        listFunctions.addTask();
    });

    input.addEventListener('keydown', (event) => {

        if (event.key === 'Enter') {
            
            listFunctions.addTask();
        }
    });
});