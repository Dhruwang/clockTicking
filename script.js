sideNavBar = document.getElementById("sideNavBar")
color = document.getElementById("color")
var r = document.querySelector(':root');


handleSideBar=()=>{
    if (sideNavBar.style.transform === "translateX(0vw)") {
        sideNavBar.style.transform = "translateX(-150vw)"
    }
    else{
        sideNavBar.style.transform = "translateX(0vw)"
    }
    
}
color.addEventListener("input", function(){
    r.style.setProperty('--b', color.value);
  }, false);

