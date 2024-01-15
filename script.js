let carousel1Items = document.querySelectorAll('#recipeCarousel1.carousel .carousel-item');

carousel1Items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = carousel1Items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

let carousel2Items = document.querySelectorAll('#recipeCarousel2.carousel .carousel-item');

carousel2Items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = carousel2Items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});


let bookmarks = document.querySelectorAll("i.fa-regular.fa-bookmark");

for (const bookmark of bookmarks) {
    bookmark.addEventListener("mouseenter", (element) => {
        element.target.classList.remove('fa-regular');
        element.target.classList.add('fa-solid');
    })
    bookmark.addEventListener("mouseleave", (element) => {
        element.target.classList.remove('fa-solid');
        element.target.classList.add('fa-regular');
    })
};

/* let courseCards = document.querySelectorAll("div.st-course-block");

for (const courseCard of courseCards) {
    courseCard.addEventListener("mouseenter", (element) => {
       element.target.parentElement.parentElement.add("st-show-overflow");
    })
    courseCard.addEventListener("mouseleave", (element) => {
        element.target.parentElement.parentElement.remove("st-show-overflow");
    })
} */
