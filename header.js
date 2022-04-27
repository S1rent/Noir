$(document).ready(function() {
    const initScrollListener = () => {
        let lastScrollTop = 0

        window.addEventListener("scroll", function() { 
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop
            if (currentScroll < lastScrollTop){
                document.getElementById('navbar-section').style.display = 'block'
            } else {
                if(window.innerWidth < 443)
                    document.getElementById('navbar-section').style.display = 'none'
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
        }, false)
    }  
    initScrollListener()
})