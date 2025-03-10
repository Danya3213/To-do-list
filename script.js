document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('#inputTask');
    const confirmBtn = document.querySelector('#confirmButtonTask');
    let list = document.querySelector('#taskList');
    let listItems = list.children;
    let deleteButtons = document.querySelectorAll('#deleteButton');
    let completeButtons = document.querySelectorAll('#completedMark');
    let texts = document.querySelectorAll('#taskText');
    input.value = '';

    const deleteBtns = () => {

        const deleteButton = () => {

            const button = event.target;
            listFunctions.deleteTask(button);
        };

        deleteButtons = document.querySelectorAll('#deleteButton');

        deleteButtons.forEach((button) => {

            button.addEventListener('click', deleteButton);
        });
    };

    const completeTasks = () => {

        completeButtons = document.querySelectorAll('#completedMark');

        const addTask = () => {

            const button = event.target;
            listFunctions.completeTask(button);
        };

        completeButtons.forEach(button => {

            button.addEventListener('click', addTask);
        });
    };

    const listFunctions = {
        
        addTask: () => {

            if (input.value === '') {
                
                alert('Input is empty');
            } else {
    
                list.innerHTML +=  `<li class="wrapper__list-item">
                                        <div class="wrapper__item-column">
                                            <button class="wrapper__item-mark" id="completedMark">
                                            </button>
                                            <p class="wrapper__item-text" id="taskText">${input.value}</p>
                                        </div>
                                        <button class="wrapper__item-button" id="deleteButton"></button>
                                    </li>`;
            };
            
            input.value = '';
            listFunctions.changesDOM();
        },
    
        deleteTask: (button) => {        
            
            button.parentElement.remove();
            listFunctions.changesDOM();
        },

        completeTask: (marker) => {

            if (marker.classList.contains('_completed')) {

                marker.classList.replace('_completed', '_anim');
                marker.nextElementSibling.classList.replace('_completed', '_anim');

                setTimeout(() => {

                    marker.classList.remove('_anim');
                    marker.nextElementSibling.classList.remove('_anim');
                }, 300);
            } else {

                marker.classList.add('_completed');
                marker.nextElementSibling.classList.add('_completed');
            };
        },

        changesDOM: () => {

            deleteButtons = document.querySelectorAll('#deleteButton');
            completeButtons = document.querySelectorAll('#completedMark');
            texts = document.querySelectorAll('#taskText');
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
        };
    });
});