const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const formDataContainer = document.querySelector(".form-data");
const apiBaseUrl = "https://task-manager-ayub.vercel.app";

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  try {
    await axios.post("/register", data);
    // await axios.post(`${apiBaseUrl}/register`, data);
    // formDataContainer.innerHTML = `${data.name} ${data.email} ${data._id}`;
    // console.log("Success:", response.data);
    // const userName = data.name;
    // localStorage.setItem("username", userName);
    window.location.href = "/login.html";
  } catch (err) {
    console.log(err);
  }
});
