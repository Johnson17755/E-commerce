const body = document.querySelector('body'),
    header = document.querySelector('header'),
     modeToggle = document.querySelector('.dark-light');

   // js to make it store the mode while refresh the page (dark and light)
     let getMode = localStorage.getItem("mode");
      if(getMode && getMode === "dark-mode"){
         body.classList.add("dark");
      }
     

    //  javascript toggle dark and light mode 
 modeToggle.addEventListener('click', () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

   //  js to keep selected mode even page refersh or file reopen 
    if(!body.classList.contains("dark")){
      localStorage.setItem("mode", "light-mode");
    }else{
      localStorage.setItem("mode", "dark-mode");
    }
 });