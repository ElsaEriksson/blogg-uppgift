import "./../scss/style.scss";
import { Content } from "./Models/Content";

const createBlogPostButton = document.getElementById("CreateBlogPost");
const blogContent = document.getElementById("BloggContent");

createBlogPostButton?.addEventListener("click", () => {
  const titleInput = document.getElementById("modal-input-title") as HTMLInputElement;
  const textInput = document.getElementById("modal-input-text") as HTMLInputElement;
  const categoryInput = document.getElementById("SortButton") as HTMLSelectElement;

  
  const titleFromUser = titleInput.value;
  const textFromUser = textInput.value;
  const categoryFromUser = categoryInput.value;

  
  const newContent = new Content(titleFromUser, textFromUser, categoryFromUser);
    console.log(newContent);
    
 
  const blogPostElement = document.createElement("div");
  blogPostElement.className = "card";
  
  blogPostElement.innerHTML = `<h2>${newContent.title}</h2><p>${newContent.text}</p><h4>${newContent.category}</h4>`;

  
  blogContent?.appendChild(blogPostElement);
});
