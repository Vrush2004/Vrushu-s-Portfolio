var typed = new Typed(".text", {
    strings:[" Frontend Developer", " Web Developer", " Data Scientist"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const circles = document.querySelectorAll('.circle')
circles.forEach(elem=>{
    var dots = parseInt(elem.getAttribute("data-dots"));
    var marked = parseInt(elem.getAttribute("data-percent"));
    var percent = Math.floor(dots*marked/100);
    var rotate = 360 / dots
    let points = "";
    for(let i = 0; i<dots; i++){
        points += `<div class='points' style='--i:${i}; --rot:${rotate}deg'></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent; i++){
        pointsMarked[i].classList.add('marked')
    }
})
