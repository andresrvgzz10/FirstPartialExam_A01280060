
function addItem(){

    let addItemBtn = document.getElementById("enviar");

    addItemBtn.addEventListener('click', (event) => {

        let itemNew = document.getElementById("newItem").value;

        

        if(itemNew == "")
        {
            alert("You need to write a item");

        }
        else{
            //alert(itemNew);

            let listAdd = document.querySelector('ul');

            listAdd.innerHTML += '<li id="newItem"> ' + itemNew + '<br/> <button id="btnCheck"> Check </button> <button id="btnDelete"> Delete </button></li>'


            //console.log(listAdd);
            
        }


        /*
        if(event.target.matches('.clickable'))
        {
            alert("This is an alert")
        }
        console.log( event.currentTarget );
        console.log( event.target.match );
        */





        event.preventDefault();

    });
}

function changesItem(){

    let listAdd = document.querySelector('ul');
    //console.log(event.target);

    listAdd.addEventListener( 'click', ( event ) => {
        
        if(event.target.matches('#btnCheck'))
        {

            if(event.target.parentNode.style.textDecoration == "line-through")
            {
                event.target.parentNode.style.textDecoration = "none";
            }
            else{
                event.target.parentNode.style.textDecoration = "line-through";
            }
            

        }
        else{

            event.target.parentNode.remove();
            //console.log(event.target.parentNode.remove());
            
        }
      });



}


function init(){
    addItem();
    changesItem();

    
}


init();