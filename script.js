// Gallery Section
const selectImage = document.querySelectorAll(".next-preview img");
const previewImg = document.querySelector(".preview-area img");
selectImage.forEach((image) => {
  let currentImage;
  image.addEventListener("click", () => {
    image.setAttribute("id", "selected");
    currentImageSrc = image.getAttribute("src");

    console.log("currentImageSrc", currentImageSrc);
    previewImage(currentImageSrc);
    unSelectImage(currentImageSrc);
  });
});
function unSelectImage(currentImageSrc) {
  selectImage.forEach((image) => {
    if (image.getAttribute("src") != currentImageSrc) {
      image.removeAttribute("id");
    }
  });
}

function previewImage(currentImage) {
  previewImg.setAttribute("src", currentImage);
}

// Ham Menu
 const openMenu = document.querySelector('.open-menu');
 const closeMenu = document.querySelector('.close-menu');
 openMenu.addEventListener('click',()=>{
       const list = document.querySelector('.lists');
       list.style.left = "0%";
       openMenu.style.display = 'none';
       closeMenu.style.display = 'block';
 });

 closeMenu.addEventListener('click',()=>{
      const list = document.querySelector('.lists');
      list.style.left = "-100%";
      openMenu.style.display = 'block';
      closeMenu.style.display = 'none';
});


// Search Bar
const container = document.querySelector('.container');
const search = document.querySelector('.search-icon img');
const searchBar = document.querySelector('.search-icon input');
search.addEventListener('click',()=>{
      search.style.display = 'none';
      searchBar.style.display = 'block';
});

container.addEventListener('click',()=>{
      search.style.display = 'block';
      searchBar.style.display = 'none';
})