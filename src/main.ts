import "./../scss/style.scss";
import { Content } from "./Models/Content";



const titleInput = document.getElementById("modal-input-title") as HTMLInputElement;
const titleFromUser = titleInput.value;

const textInput = document.getElementById("modal-input-text") as HTMLInputElement;
const textFromUser = textInput.value;

const categoryInput = document.getElementById("SortButton") as HTMLSelectElement;
const categoryFromUser = categoryInput.value;

const bloggPosted = document.createElement("div");
bloggPosted.className = "card";
bloggPosted.innerHTML = `<h2>${titleFromUser}</h2><p>${textFromUser}</p><h4>${categoryFromUser}</h4>` ;

const blogContent = document.getElementById("BloggContent");
const createBlogPost = document.getElementById("createBlogPost");
createBlogPost?.addEventListener("click", ()=>{
blogContent?.appendChild(bloggPosted);
});

