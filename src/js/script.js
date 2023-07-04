// Open/Close DropDown
if(document.getElementsByClassName("hamburger-container")){
    document.getElementsByClassName("hamburger-container")[0].addEventListener("click", (evt) => {
        if(document.getElementById("chk").checked){
            document.getElementById("dropdown").style.height = "0"
            document.querySelector("main").style = "filter: none;"
            document.querySelector("footer").style = "filter: none;"
        }else{
            const mediaQueryList = window.matchMedia("(orientation: portrait)")
            if(mediaQueryList.matches){
                document.getElementById("dropdown").style.height = "530px"
            }else{
                document.getElementById("dropdown").style.height = "90vh"
            }
            document.querySelector("main").style = "filter: blur(3px);"
            document.querySelector("footer").style = "filter: blur(3px);"
        }
    })
}

// NavBar links effect
if(document.getElementsByClassName("navbar-item")){
    const NAVBAR_ITEMS = [...document.getElementsByClassName("navbar-item")]
    NAVBAR_ITEMS.map(item => {
        item.children[0].addEventListener("mouseover", (evt) => {

            NAVBAR_ITEMS.map(item => {
                item.children[0].style = "opacity: 1;"
            })
            document.getElementsByClassName("active")[0].style = "opacity: 1"

            evt.target.style = "opacity: .5"
        })
    })

    const NAVBAR = [...document.getElementsByClassName("navbar")]
    NAVBAR[0].children[0].addEventListener("mouseleave", (evt) => {
        NAVBAR_ITEMS.map(item => {
            item.children[0].style = "opacity: 1;"
        })
        document.getElementsByClassName("active")[0].style = "opacity: .5"
    })
}

// Cookie Alert
if(localStorage.cookie == null){
  const COOKIE_ALERT = window.document.getElementsByClassName("cookie-alert")[0]
  COOKIE_ALERT.style.display = "block" 

  const COOKIES = window.document.getElementById("btn-cookie")
  COOKIES.addEventListener("click", (evt) => {
      localStorage.cookie = "true"
      const COOKIE_ALERT = window.document.getElementsByClassName("cookie-alert")[0]
      COOKIE_ALERT.style.display = "none" 
  })
}

