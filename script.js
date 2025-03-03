document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('#inputTask');
    const confirmBtn = document.querySelector('#confirmButtonTask');
    let list = document.querySelector('#taskList');
    let listItems = list.children;
    let deleteBtn = document.querySelectorAll('#deleteButton');

    input.value = '';

    const deleteBtns = () => {

        // deleteBtn.forEach((button, index) => {

        //     let addEvent = null;

        //     addEvent = () => {

        //         button.addEventListener('click', () => {

        //             console.log('deleteTask ' + index);  
        //             listFunctions.deleteTask(index);
        //         });
        //     }

        //     addEvent();
        // });

        // deleteBtn.forEach((button, index) => {

        //     deleteHandler = () => {

        //         console.log('deleteTask ' + index);
        //         listFunctions.deleteTask(index);
        //     }

        //     button.removeEventListener('click', deleteHandler);

        //     button.addEventListener('click', deleteHandler);
        // });

        const deleteButtons = document.querySelectorAll('#deleteButton');

        deleteButtons.forEach((button, index) => {

            const newButton = button.cloneNode(true);

            button.replaceWith(newButton);

            newButton.addEventListener('click', () => {
                
                console.log('deleteTask ' + index);
                listFunctions.deleteTask(index);
            });
        });
    };

    const listFunctions = {
        
        addTask: () => {

            if (input.value === '') {
                
                alert('Input is empty')
            } else {
    
                list.innerHTML +=  `<li class="wrapper__list-item">
                                        <p class="wrapper__item-text">${input.value}</p>
                                        <button class="wrapper__item-button" id="deleteButton"></button>
                                    </li>`
            }
            
            input.value = '';
            deleteBtns();
        },
    
        deleteTask: (index) => {        
            
            list.removeChild(listItems[index]);
            deleteBtns();
        },

        changesDOM: () => {

            deleteBtn = document.querySelectorAll('#deleteButton');
            list = document.querySelector('#taskList');
            listItems = list.children;
        }
    };

    confirmBtn.addEventListener('click', () => {

        listFunctions.addTask();
        listFunctions.changesDOM();
    });

    input.addEventListener('keydown', (event) => {

        if (event.key === 'Enter') {
            
            listFunctions.addTask();
            listFunctions.changesDOM();
        }
    });
});