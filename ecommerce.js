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

  // ********* HEADER SECTION ON MOBILE *****
          // COPY MENU FOR MOBILE
   let copyMenu = () => {
      let depCategory = document.querySelector('.dpt-cat');
      let dptPlace = document.querySelector('.departments');
      dptPlace.innerHTML = depCategory.innerHTML;


      // COPY INSIDE NAV TO NAV
      let mainNav = document.querySelector('.header-nav nav');
      let navPlace = document.querySelector('.off-canvas nav')
      navPlace.innerHTML = mainNav.innerHTML;

      // COPY HEADER-TOP -WRAPPER TO .THETOP-NAV
      let topNav = document.querySelector('.header-top .wrapper');
      let topPlace = document.querySelector('.off-canvas .thetop-nav')
      topPlace.innerHTML = topNav.innerHTML;
   }

   copyMenu();