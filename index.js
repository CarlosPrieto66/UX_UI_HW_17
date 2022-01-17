let menuBtn = document.querySelector('.menu-button')
let dropdownNav = document.querySelector('.dropdownNav')


menuBtn.addEventListener('click', (e) => {
  console.log(e)

    if (dropdownNav.classList.contains('closed')) {
    dropdownNav.classList.remove('closed')
    document.getElementById("menuIcon").src="images/Logo-opened-64px.png";
    //document.getElementsByClassName("mobile").style.background = "black";
    // $("mobile").css("background-color", "url(/image.jpg)");
  } else {
    dropdownNav.classList.add('closed')  
    document.getElementById("menuIcon").src="images/Logo-closed-64px.png"; 

  }
})


