function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("navmove").classList.toggle("move");
    console.log("It is working!")
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

let imagesToLoad = document.querySelectorAll(".moveImg[data-src]");
let boxToLoad = document.querySelectorAll(".box");

function loadImages(image){
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
  image.style.filter = "blur(0em)";
  image.style.margin = 0;
  image.style.opacity = "1";
  image.style.transition = "all 1s 0.5s";
};

function loadBox(box){
    box.style.filter = "blur(0em)";
    box.style.margin = 0;
    box.style.opacity = "1";
    box.style.transition = "all 2.5s 0.5s";
  };

if ("IntersectionObserver" in window) {
  
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
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

if ("IntersectionObserver" in window) {
  
    const observerBox = new IntersectionObserver((boxes, observer) => {
      boxes.forEach((box) => {
        if (box.isIntersecting) {
          loadBox(box.target)
          observer.unobserve(box.target);
        }
      });
    });

    boxToLoad.forEach((box) => {
      observerBox.observe(box);
    });
  
  } else {

    boxToLoad.forEach((box) => {
      loadBox(box);
    });
  }