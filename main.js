function toggleMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode');

  // Save the user's preference in local storage
  localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
}

// Function to set initial mode based on local storage
function setInitialMode() {
  const savedMode = localStorage.getItem('mode');
  const body = document.body;

  if (savedMode === 'dark') {
    body.classList.add('dark-mode');
  }
}

// Set the initial mode when the page loads
document.addEventListener("DOMContentLoaded", setInitialMode);





const acc = document.getElementsByClassName('top-section');
  let maxHeight = 200;
  
   for(let i=0; i < acc.length; i++){
  acc[i].addEventListener('click' , function() {

        this.classList.toggle('open')
        this.classList.toggle('rotate')
    let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
      panel.style.maxHeight = null;

    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
      }
  })


 }
 
 
 
   const navItem = document.querySelectorAll('.menu_sm .menu_container span a');
  
  const removeActiveClass1 = () => {
    navItem.forEach(items => {
      const links = items.querySelector('i');
      links.classList.remove('active1');
    })
  }
  
  
  
  navItem.forEach(items=>{
    const links = items.querySelector('i');
    links.addEventListener('click',()=>{
      removeActiveClass1();
      links.classList.add('active1');
    })
  })
  

 
//////////////////////////
 
 
 
  const navItems = document.querySelectorAll('nav ul li');
  
 //remove active class
const removeActiveClass=()=>{
  navItems.forEach(item=>{
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}
  
  
  
    // add active class

  navItems.forEach(item=>{
    const link = item.querySelector('a');
    link.addEventListener('click',()=>{
      removeActiveClass();
      link.classList.add('active');
    })
  })
  
  
