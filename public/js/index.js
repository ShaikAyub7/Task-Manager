const form = document.querySelector(".form");
const input = document.querySelector(".input");
const user = document.querySelector(".user");
const logout = document.querySelector(".logout");
const taskContainer = document.querySelector(".tasks");
const task = document.querySelector(".task");
const errorContainer = document.querySelector(".error-container");
const deleteBtn = document.querySelectorAll(".deleteBtn");
const updateBtn = document.querySelectorAll(".updateBtn");

// const socket = io();

form.addEventListener("submit", async function (e) {
  // e.preventDefault();
  const name = input.value;
  input.value = "";
  try {
    await axios.post("/createtask", { name });
    console.log("success");
  } catch (err) {
    errorContainer.innerHTML = err.messages;
  }
});

const showTask = async (e) => {
  // e.preventDefault();
  try {
    const response = await axios.get("/tasks");
    console.log(response);
    const {
      data: { tasks },
    } = response;
    taskContainer.innerHTML = "";

    tasks.forEach((singleTask) => {
      const { name, status, _id } = singleTask;
      const taskHTML = `
        <div class="task">
          <h4><i class="fa-solid fa-bars-progress"></i> &nbsp;${name}</h4>
        <p>${status}</p>
          <a href="task.html?id=${_id}" class=edit-task"><i class="fa-regular fa-pen-to-square"></i></a>
     <button type="button" class="delete-btn" data-id="${_id}"><i class="fa-solid fa-trash"></i></button>
        </div>
      `;
      taskContainer.innerHTML += taskHTML;
    });
  } catch (err) {
    console.error("Error fetching tasks:", err);
    errorContainer.textContent =
      err.response.headers || "Failed to load tasks.";
  }
};
showTask();

const updateTask = async (e) => {
  // e.preventDefault();
  try {
    const response = await axios.patch(`/tasks/${id}`);
    console.log(response);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    errorContainer.textContent =
      err.response.headers || "Failed to load tasks.";
  }
};
taskContainer.addEventListener("click", async function (e) {
  const el = e.target;
  if (el.parentElement.classList.contains("delete-btn")) {
    // loadingDOM.style.visibility = "visible";
    const id = el.parentElement.dataset.id;
    try {
      await axios.delete(`/tasks/${id}`);
      showTask();
    } catch (error) {
      console.log(error);
    }
  }
  // task.style.opacity = 0;
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.post("/login", data);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  const token = localStorage.getItem("authToken");
  // console.log({ token });
  if (!token) {
    window.location.href = "/login.html";
  }
});

logout.addEventListener("click", function () {
  const token = localStorage.getItem("authToken");
  if (token) {
    localStorage.removeItem("authToken");

    window.location.href = "/login.html";
    console.log("logout successfully");
  } else {
    window.location.href = "/";
  }
});
// ////////////////////////////////////////

// deleteBtn.addEventListener("click", function () {
//   console.log("hello");
// });
updateBtn.forEach((e) => {
  e.addEventListener("click", () => {
    alert("click");
  });
});
deleteBtn.forEach((e) => {
  e.addEventListener("click", () => {
    alert("click");
  });
});
