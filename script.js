window.addEventListener("load", function(){

  let formNode = document.getElementById("name-form");
  formNode.addEventListener("submit", function(event){
    
    // ensure name input is not empty
    let nameNode = document.getElementById("name");

    if (nameNode.value.length === 0) {
          event.preventDefault();
          let messageNode = document.getElementById("error-message");
          messageNode.innerHTML = "Name is required";
          nameNode.focus();
    }
  });

});