let scrollPos = window.pageYOffset;
      var ini = window.pageYOffset;
      var st = document.getElementById("sidenav").style.top;
      const header = document.getElementById("head");
      function lookCool(){
          const currentScrollPos = window.pageYOffset;
          if (scrollPos < currentScrollPos){
              header.style.opacity = "0";
              document.getElementById("sidenav").style.position="fixed";
              document.getElementById("sidenav").style.top="0";
              
          } 
          else if (scrollPos == ini){
              header.style.opacity = "1";
              document.getElementById("sidenav").style.top=st;
          }
          else {
              header.style.opacity = "1";
              document.getElementById("sidenav").style.top=st;
          }
          scrollPos = currentScrollPos;
      }

      window.addEventListener("scroll", lookCool);
      lookCool();





      sideNav = document.getElementById("sidenav");
      function openSesame(){
        sideNav.classList.add("visible");
      }
      function closeSesame(){
        sideNav.classList.remove("visible");
      }