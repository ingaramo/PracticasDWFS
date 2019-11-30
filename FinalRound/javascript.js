/* --sacar tantos eventos de los botones porque no son secuenciales ( changeState y show items se pueden ejecutar en distinto orden y romper)
 -- agregar id para independizar js del html
 */

let formulario = {
    
    toDoList: document.getElementById('toDoList'),
    completedList: document.getElementById('completedList'),
    primaryInput : document.getElementById('input'),
    addButton: document.getElementById('addButton'),
    items : [],
    
    init: function(){
        formulario.addButton.addEventListener('click', formulario.addItem , false);
        formulario.addButton.addEventListener('click', formulario.showItems , false);
        formulario.primaryInput.addEventListener('keyup', function(event){
            if(event.keyCode===13){
                formulario.addItem();
                formulario.showItems();
            }
            
        })

    },
    showItems: function (){
        formulario.toDoList.innerText='';
        formulario.completedList.innerText= '';
        formulario.items.forEach(function(element){
            
            const liItem = document.createElement('li');
            const checkbox = document.createElement('input');
            const editButton = document.createElement ('button');
            const deleteButton = document.createElement('button');
            const text= document.createTextNode(element.task);
            const editIcon = document.createElement('img');
            const deleteIcon = document.createElement('img');
            const textContainer = document.createElement('span');
            const buttonContainer = document.createElement('div');

            buttonContainer.setAttribute('class','buttonContainer')
            editIcon.setAttribute('src','img/edit.png');
            editIcon.setAttribute('width','15px');
            deleteIcon.setAttribute('src','img/delete.png');
            deleteIcon.setAttribute('width','15px');
            checkbox.setAttribute('type', "checkbox");
            liItem.setAttribute('class','Item');
            editButton.appendChild(editIcon);
            deleteButton.appendChild(deleteIcon);
            editButton.setAttribute('class','editButton');
            deleteButton.setAttribute('class','deleteButton');

            textContainer.appendChild(text);
            buttonContainer.appendChild(editButton);
            buttonContainer.appendChild(deleteButton);
            liItem.appendChild(checkbox);
            liItem.appendChild(textContainer);
            liItem.appendChild(buttonContainer);
            if(element.state === false){
                formulario.toDoList.appendChild(liItem);
            }else {
                
                liItem.querySelector("input").setAttribute("checked",'');
                formulario.completedList.appendChild(liItem);
                
            };
            deleteButton.addEventListener('click',formulario.deleteItem, false)
            editButton.addEventListener('click',formulario.editItem, false);
            checkbox.addEventListener('click', formulario.changeState, false);
            checkbox.addEventListener('click', formulario.showItems, false);
        });
    },
    addItem: function (){
        var input = document.getElementById('input').value;
        let index = formulario.items.map(function(e) { return e.task; }).indexOf(input);
        if(index===-1){
            formulario.items.push({task: input, state: false});
            document.getElementById('input').value= 'Ingrese nueva tarea';
        }else{
            console.log('tarea existente');
            document.getElementById('input').value= 'Ingrese nueva tarea';
        }
    },
    changeState: function(){
        const task = this.nextSibling.innerText;
        formulario.items.forEach(function (item){
            if(item.task === task){
                if(item.state===false){
                    item.state= true;
                }else {
                    item.state=false;
                }
            }
        });
        
        
    },
    editItem: function (){
        document.getElementById('input').value= task;
        const index = formulario.items.map(function(e) { return e.task; }).indexOf(task);
        formulario.items.splice(index,1);
        formulario.showItems();
        
    },
    deleteItem: function () {
        const task = this.parentNode.parentNode.querySelector('span').innerText;
        const index = formulario.items.map(function(e) { return e.task; }).indexOf(task);
        formulario.items.splice(index,1);
        formulario.showItems();
    }
}
window.onload=function (){
    formulario.init();
}

    


