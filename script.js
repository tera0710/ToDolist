const tggleDark = document.getElementById("tggledark");

tggleDark.onclick = () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        tggleDark.textContent = "white"
    }

    else{
        tggleDark.textContent = "dark"
    }
}


function addTask() {
  const task_input = document.getElementById("taskInput");
  const task_text = task_input.value.trim();

  if (task_text === "") return;

  const day_input = document.getElementById("dayInput");
  const day_text = day_input.value.trim();

  if (day_text === "") return;



// task
  const li = document.createElement("li");

  const task_span = document.createElement("span");
  task_span.classList.add("taskText");
  task_span.textContent = task_text;

  task_span.onclick = () => {
    task_span.classList.toggle("completed");
  };


//   day
  const day_span = document.createElement("span");
  day_span.classList.add("dayText");
  day_span.textContent = day_text;


// 削除
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  deleteBtn.className = "delete-btn";

  deleteBtn.onclick = () => {
    li.remove();
  };

  li.appendChild(task_span);
  li.appendChild(day_span)
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  task_input.value = "";
  day_input.value = "";
}