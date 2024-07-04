// mobile navbar
function main(){
    var menuIconOpen = document.getElementsByClassName("open")[0];
    var menuIconClose = document.getElementsByClassName("close")[0];
    var menuItems = document.getElementsByClassName("menu");

    menuIconClose.style.display = "none";

    menuIconOpen.onclick = function() {
      this.style.display = "none";
      menuIconClose.style.display = "block";
      menuDisplay("show", menuItems);
    };

    menuIconClose.onclick = function() {
      this.style.display = "none";
      menuIconOpen.style.display = "block";
      menuDisplay("hide", menuItems);
    };
  }

  function menuDisplay(state, items){
    if(state=="show"){
      for(var i=0; i<items.length; i++){
        items[i].classList.add("show");
      }
    } else {
      for(var i=0; i<items.length; i++){
        items[i].classList.remove("show");
      }
    }
  }

  window.addEventListener("load", (event) => {
    main();
    smsEmbeddedForm();
    emailEmbeddedForm();
    console.log('Have you registered or declined notifications from this site yet? \n \nYou may need to update your browser settings to retrigger the prompt');
  })