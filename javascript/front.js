

/**random color button */
document.getElementById("random-color").addEventListener("click", function () {
  
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  document.body.style.background = `rgb(${r}, ${g}, ${b})`; 
});

/***********update date ********** */

function updateDate() {
  const displayDate = document.getElementById("display-date");

  let date = new Date();

  const weekday = date.toLocaleDateString("en-US", {weekday: "short"});
  const month = date.toLocaleDateString("en-US", {month: "short"});
  const day = date.toLocaleDateString("en-US", {day: "2-digit"});
  const year = date.toLocaleDateString("en-US", {year: "numeric"});
  displayDate.innerHTML = `${weekday}, <br> ${month} ${day} ${year}`;
}
updateDate();

/*************completed-btn**********/

const completedButtons = document.querySelectorAll(".completed-btn");

for(const button of completedButtons){
  button.addEventListener("click", function(){
    alert ("Board updated successfully")

    //disable button
    this.disabled = true;

    //add to top total

    const taskDone = document.getElementById("task-done");
    const convertedTaskDone = parseInt(taskDone.innerText);
    const totalTaskDone = convertedTaskDone + 1;
    taskDone.innerText = totalTaskDone;

//remaining task assigned

const remainingTask = document.getElementById("remaining-task");
    const ConvertedRemainingTask = parseInt(remainingTask.innerText);
    const totalRemainingTask = ConvertedRemainingTask - 1;
    remainingTask.innerText = totalRemainingTask;

     if(totalRemainingTask === 0){
      alert("Congrats!!! You have completed all the current tasks");
      remainingTask.innerText = 0;
     }


    //Activity log - completed time update
    const completedTime = new Date().toLocaleTimeString("en-US",{
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    })
    //activity log - task heading

    // button.addEventListener("click", function(event){
    // // const taskHeading = event.target.parentElement.parentElement.querySelector(".taskhead").innerText;
    // const taskHeading = event.target.closest("article").querySelector(".taskhead").innerText;
    // console.log(taskHeading);
    
    // })

    const taskHeading = this.closest("article").querySelector(".taskhead").innerText;

    //final activity log

    const activityContainer = document.getElementById("activity-container")
    const div = document.createElement("div");
    div.innerHTML = `<p class="bg-slate-200 rounded-sm text-xs p-4 mb-4">You have completed the task <span class="font-medium">${taskHeading} </span> at ${completedTime }</p>`
    activityContainer.appendChild(div);
    
  })
}


/************ clear history ***********/
document.getElementById("clear-history").addEventListener("click", function(){
  const activityContainer = document.getElementById("activity-container");
  activityContainer.innerHTML = "";
  
})


/*********Discover Box *******/

document.getElementById("discover-box").addEventListener("click", function(){

window.location.href = "./blogQ&A.html";

});



