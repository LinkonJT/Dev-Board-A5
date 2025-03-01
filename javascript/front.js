document.getElementById("random-color").addEventListener("click", function () {
  // event.preventDefault();
  let randomBodyColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.background = randomBodyColor;
});

//update date

function updateDate() {
  const displayDate = document.getElementById("display-date");

  const currentDate = new Date().toLocaleDateString("en-US", {
    timezone: "dhaka",
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  displayDate.innerText = currentDate;
}

updateDate();

//completed-btn

const completedButtons = document.querySelectorAll(".completed-btn");

for(const button of completedButtons){
  button.addEventListener("click", function(){
    alert ("Board updated successfully")


    const completedTime = new Date().toLocaleTimeString("en-US",{
      hour: "2-digit",
      minute: "2-digit",
      hour12: true

    })

    const activityContainer = document.getElementById("activity-container")
    const div = document.createElement("div");
    div.innerHTML = `<h2 class="bg-slate-200 rounded-sm text-xs p-4 mb-4">You have completed the task at ${completedTime }</h2>`
    activityContainer.appendChild(div);
    
  })
}

// clear history
document.getElementById("clear-history").addEventListener("click", function(){
  
  const activityContainer = document.getElementById("activity-container");

  activityContainer.innerHTML = " "
  
})



