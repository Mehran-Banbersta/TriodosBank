// Enable hidden nav bar when user sroll up and down
{
 const body = document.body
 let lastScroll = 0

 window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset
  if (currentScroll <= 0) {
  body.classList.remove("scroll-up")
  } 

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
   body.classList.remove("scroll-up")
   body.classList.add("scroll-down")
   } 

   if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
    } 


  lastScroll = currentScroll
 })
}

// open and close menu
let openNav = document.getElementById("open-nav")



function mobileMenu() {
  if (document.getElementById("modal").style.display == 'block') {
    document.getElementById("modal").style.display = 'none'
  } else {
    document.getElementById("modal").style.display = 'block'
  }
}

openNav.addEventListener('click', mobileMenu)