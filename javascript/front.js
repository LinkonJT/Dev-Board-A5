document.getElementById("random-color").addEventListener("click", function(){
    // event.preventDefault();
    let randomBodyColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    document.body.style.background = randomBodyColor;

})