document.getElementById("random-color").addEventListener("click", function(){
    // event.preventDefault();
    let randomBodyColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    document.body.style.background = randomBodyColor;

})



//update date

function updateDate(){
    const displayDate = document.getElementById("display-date");

    const currentDate = new Date().toLocaleDateString("en-US", {
        timezone: "dhaka",
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric"

    });

    displayDate.innerText = currentDate;

}

updateDate();

