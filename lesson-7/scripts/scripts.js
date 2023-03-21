let imagesToLoad = document.querySelectorAll(".move[data-src]");

function loadImages(image){
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
  image.style.filter = "blur(0em)";
  image.style.margin = 0;
  image.style.opacity = "1";
  image.style.transition = "all 2s 1s";
};

if ("IntersectionObserver" in window) {
  
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        console.log("aqui", item);
        observer.unobserve(item.target);
      }
    });
  });

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });

} else {

  imagesToLoad.forEach((img) => {
    loadImages(img);

  });
}