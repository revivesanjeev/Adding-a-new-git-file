

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);
function postTodo() {
  axios
    .post("https://crudcrud.com/api/e56bd73358e0445a99f0c7436156f25d/todo", {
      title: "Learn Axios",
      completed: false,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function getTodos() {
  axios
    .get("https://crudcrud.com/api/e56bd73358e0445a99f0c7436156f25d/todo")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}

function putTodo() {
  axios
    .put(
      "https://crudcrud.com/api/e56bd73358e0445a99f0c7436156f25d/todo/65dee9cc72109f03e8c7f3ad",
      {
        title: "Learn Axios",
        completed: true,
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function deleteTodo() {
  axios
    .delete(
      "https://crudcrud.com/api/e56bd73358e0445a99f0c7436156f25d/todo/65dee9d672109f03e8c7f3af"
    )
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}
