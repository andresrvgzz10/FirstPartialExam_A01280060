
function addComment(){

    let buttonSubmit = document.getElementById("submit");
   
    buttonSubmit.addEventListener('click', (event) => {
        let username = document.getElementById("userName").value;
        let userComment = document.getElementById("userComment").value;
        if(username == "")
        {
            let validation = document.getElementById("validationName");
            validation.innerHTML = '<p> You need to write your name</p>';
        }
        else if(username == "")
        {
            let validationComment = document.getElementById("validationArea");

            validationComment.innerHTML = '<p> You need to write a comment</p>';
        }
        else{

            //add Comment

            let sectionComments = document.getElementById("seccionComments");

            sectionComments.innerHTML += '<h5>' + username + '<h5><p> ' + userComment + '</p> <input type=submit value="Delete" id="delete"\>' ;

        }

        event.preventDefault();
    });

}

function deleteComment(){

    let validationComment = document.querySelector('.seccionComments');
    validationComment.addEventListener('submit', (event) => {

        

    console.log(event);

    });

    

}



function init(){
    addComment()
    deleteComment()

}

init();