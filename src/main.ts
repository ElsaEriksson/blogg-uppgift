import "./../scss/style.scss";
import { Content } from "./Models/Content";

const createBlogPostButton = document.getElementById(
  "CreateBlogPost"
) as HTMLButtonElement;
const blogContent = document.getElementById("BloggContent") as HTMLDivElement;

let blogPosts: Content[] = [];
let filteredPosts: Content[] = [];

blogPosts = JSON.parse(localStorage.getItem("Blogposts") || "[]");
filteredPosts = blogPosts;

createHTML();

function createHTML() {
  blogContent.innerHTML = "";
  for (let index = 0; index < filteredPosts.length; index++) {
    const newContent = filteredPosts[index];

    const blogPostElement = document.createElement("div");
    blogPostElement.id = "cardPost";
    blogPostElement.className = "card";
    blogPostElement.innerHTML = `<h5>${newContent.title}
    </h5><p>${newContent.text}</p>
    <h7 id="categoryText">${newContent.category}</h7>
    <a href="#modal2" id="goButton"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop2"
    >Go somewhere</a>`;

    //<button id="deleteButton" type="button" class="btn btn-danger">Delete</button>;

    const deleteButton = document.createElement("button") as HTMLButtonElement;
    deleteButton.id = "deleteButton";
    deleteButton.className = "btn btn-danger";
    deleteButton.type = "button";
    deleteButton.innerHTML = "Delete";

    deleteButton.addEventListener("click", () => {
      blogPosts.splice(index, 1);
      createHTML();
    });
    blogPostElement.appendChild(deleteButton);
    blogContent?.appendChild(blogPostElement);
  }

  localStorage.setItem("Blogposts", JSON.stringify(blogPosts));
  console.log(blogPosts);
}

createBlogPostButton?.addEventListener("click", () => {
  const titleInput = document.getElementById(
    "modal-input-title"
  ) as HTMLInputElement;
  const textInput = document.getElementById(
    "modal-input-text"
  ) as HTMLInputElement;
  const categoryInput = document.getElementById(
    "Category"
  ) as HTMLSelectElement;
  const Modal = document.getElementById("modalTitle") as HTMLHeadingElement;
  const Modal2 = document.getElementById("modalbody") as HTMLParagraphElement;
  const Modal3 = document.getElementById("modalfooter") as HTMLDivElement;
  const titleFromUser = titleInput.value;
  const textFromUser = textInput.value;
  const categoryFromUser = categoryInput.value;

  Modal.innerHTML = titleFromUser;
  Modal2.innerHTML = textFromUser;
  Modal3.innerHTML = categoryFromUser;

  const newContent = new Content(
    titleFromUser,
    textFromUser,
    categoryFromUser,
    new Date()
  );
  blogPosts.push(newContent);

  createHTML();
});

const sortButton = document.getElementById("SortButton") as HTMLSelectElement;
sortButton.addEventListener("change", (e: any) => {
  // blogPosts.sort((a, b) => {
  //   if (a.category.toLowerCase() > b.category.toLowerCase()) return 1;
  //   else return -1;
  // });
  filteredPosts = blogPosts.filter((p) => {
    if (p.category === e.target.value) return p;
  });
  createHTML();
  console.log(filteredPosts);
});
