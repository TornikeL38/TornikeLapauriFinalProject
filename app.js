const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function onSignup() {
    console.log("shemovida")
    const email = document.getElementById("emailInput");
    console.log(email.value)
    if(validateEmail(email.value)){
        console.log("sworia")
        const successText = document.getElementById("success");
        successText.style.visibility = "visible";

    } else {

        const lightBox = document.getElementById('lightBox');
        console.log(lightBox)
        lightBox.id =""
        lightBox.classList.add("darkBox");

    }
}