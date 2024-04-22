var title = document.getElementById("title");
var description = document.getElementById("description");
var posts = document.getElementById("posts");
var backgroundImage = "";

function post()
{
    posts.innerHTML += `<div class="card mt-2">
    <div class="card-header">
    @posts <div><i onclick="closePost()" class="fa-solid fa-xmark close"></i></div>
    </div>
    <div class="card-body" style="background-image:url(${backgroundImage})">
      <blockquote class="blockquote mb-0">
        <p>${title.value}</p>
        <footer class="blockquote-footer">${description.value}</cite></footer>
      </blockquote>
    </div>
</div>`

}

function selectImage(src){
  backgroundImage = src
    var bgImage = document.getElementsByClassName('bg-image');

    for(var i = 0; i< bgImage.length;i++){
        bgImage[i].className = "bg-image"
    }
    event.target.className += " images-list-selected"
}

function closePost(){
  if(event.target.tagName === "I"){
    event.target.parentNode.parentNode.parentNode.remove()
  }
}