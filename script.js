$(document).ready(function() {
    let activeIndex = 0

    function initCarousel() {
        let i
        let carouselItems = document.getElementsByClassName("carousel-item")
        let indicators = document.getElementsByClassName("indicator")

        for (i = 0; i < carouselItems.length; i++) {
            carouselItems[i].style.display = "none"
        }

        activeIndex++
        if (activeIndex > carouselItems.length)
            activeIndex = 1  

        for (i = 0; i < indicators.length; i++)
            indicators[i].className = indicators[i].className.replace(" active", "")
        
        carouselItems[activeIndex - 1].style.display = "block"
        indicators[activeIndex - 1].className += " active"
        setTimeout(initCarousel, 4000) 
    }

    initCarousel()
})