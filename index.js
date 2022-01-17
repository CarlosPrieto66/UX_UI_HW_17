let menuBtn = document.querySelector('.menu-button')
let dropdownNav = document.querySelector('.dropdownNav')
let nav = document.querySelector('.mobile')

menuBtn.addEventListener('click', (e) => {

    if (dropdownNav.classList.contains('closed')) {
    dropdownNav.classList.remove('closed')
    document.getElementById("menuIcon").src="images/Logo-opened-64px.png";
    document.getElementById("mobile").style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  
  } else {
    dropdownNav.classList.add('closed')  
    document.getElementById("menuIcon").src="images/Logo-closed-64px.png"; 
    document.getElementById("mobile").style.backgroundColor = "rgba(0, 0, 0, 0.75)";


  }
})


