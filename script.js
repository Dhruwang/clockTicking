sideNavBar = document.getElementById("sideNavBar")

handleSideBar=()=>{
    if (sideNavBar.style.transform === "translateX(0vw)") {
        sideNavBar.style.transform = "translateX(-150vw)"
    }
    else{
        sideNavBar.style.transform = "translateX(0vw)"
    }
    
}