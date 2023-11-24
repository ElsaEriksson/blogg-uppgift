import "./../scss/style.scss";
import { Content } from "./Models/Content";


const createBlogPostButton = document.getElementById("CreateBlogPost") as HTMLButtonElement;
const blogContent = document.getElementById("BloggContent") as HTMLDivElement;

let blogPosts:Content[] =  [];


  blogPosts = JSON.parse(localStorage.getItem("Blogposts") || "[]");

createHTML();

function createHTML () {
    blogContent.innerHTML="";
    for (let index = 0; index < blogPosts.length; index++) {
        const newContent = blogPosts[index];

        const blogPostElement = document.createElement("div");
        blogPostElement.id ="cardPost"
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
        
        
        
        const goButton = document.createElement("button") as HTMLButtonElement;
        goButton.id= "goButton";
        goButton.className= "btn btn-danger";
        goButton.type= "button";
        goButton.innerHTML="Delete"
        goButton?.setAttribute("data-toggle", "modal")
        goButton?.setAttribute("data-target", "#staticBackdrop2")

        
        
        
        const deleteButton = document.createElement("button") as HTMLButtonElement;
        deleteButton.id= "deleteButton";
        deleteButton.className= "btn btn-danger";
        deleteButton.type= "button";
        deleteButton.innerHTML="Delete"
        

        
          deleteButton.addEventListener("click", () => {
            blogPosts.splice(index, 1);
           createHTML();
          });
          blogPostElement.appendChild(deleteButton);
          blogContent?.appendChild(blogPostElement);
        };

        localStorage.setItem("Blogposts", JSON.stringify(blogPosts));
        console.log(blogPosts);
    }

  

createBlogPostButton?.addEventListener("click", () => {
  createBlogPostButton.type = "submit";
  const titleInput = document.getElementById("modal-input-title") as HTMLInputElement;
  const textInput = document.getElementById("modal-input-text") as HTMLInputElement;
  const categoryInput = document.getElementById("Category") as HTMLSelectElement;

  
  const titleFromUser = titleInput.value;
  const textFromUser = textInput.value;
  const categoryFromUser = categoryInput.value;

  
  const newContent = new Content(titleFromUser, textFromUser, categoryFromUser);
  blogPosts.push(newContent);
    console.log(newContent);

    createHTML ();

});


