const taskIdShow = document.querySelector(".task-edit-id");
const nameInput = document.querySelector(".task-edit-name");
const form = document.querySelector(".single-task-form");
const checkBox = document.querySelector(".task-edit-completed");
const params = window.location.search;
const id = new URLSearchParams(params).get("id");
console.log(id);
const showTask = async (e) => {
  let tempName;

  try {
    const response = await axios.get(`${apiBaseUrl}/tasks/${id}`);
    // const response = await axios.get(`/tasks/${id}`);
    // console.log(response);
    const { data } = response;
    const { name, status, _id: taskID } = data.task;

    taskIdShow.textContent = taskID;
    nameInput.value = name;
    tempName = name;
    //   if (completed) {
    //     taskCompletedDOM.checked = true;
    //   }
  } catch (error) {
    console.log(error);
  }
};
showTask();
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let taskName = nameInput.value;
  let taskCompleted = checkBox.checked;
  const params = window.location.search;
  const id = new URLSearchParams(params).get("id");
  //  const response = await axios.patch(`/tasks/${id}`
  try {
    const response = await axios.patch(`${apiBaseUrl}/tasks/${id}`, {
      name: taskName,
      status: taskCompleted,
    });
    const { data } = response;
    const { name, status, _id: taskID } = data.task;
    console.log({
      name,
      status,
      taskID,
    });
    tempName = name;
    taskID;
    taskCompleted = status;
    window.location.href = "/";
  } catch (err) {
    console.error("Error fetching tasks:", err);
    // errorContainer.textContent =
    //   err.response.headers || "Failed to load tasks.";
  }
});
