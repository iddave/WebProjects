let postParent = document.querySelector('.featured_works');
let posts = postParent.children;

if (window.innerWidth < 769) {
    hidePosts();
    menu.style.display = "none";
    console.log(`firstIf `);
}
window.addEventListener('resize', function() {
    if (window.innerWidth >= 769) {
        makeAllFlex();
        menu.style.display = "flex";

    } else {
        menu.style.display = "none";
        hidePosts();
    }
});

function makeAllFlex() {
    for (let i = 0; i < posts.length; i++) {
        posts[i].style.display = "flex";
        posts[i].setAttribute('activePost',true);
    }
}

function hidePosts() {
    if (document.querySelector("[activePost='false']") == null) {
        for (let i = 1; i < posts.length; i++) {
            posts[i].hidden = true;
            posts[i].style.display = "none";
            posts[i].setAttribute('activePost', false);
            console.log(`postInHidden = ${posts[i]}`);
        }
        posts[0].setAttribute('activePost', true);
    }
}

document.addEventListener('click', function(event) {
    let current = document.querySelector("[activePost='true']")
    let prev = current.previousElementSibling;
    let last = postParent.lastElementChild;
    let first = postParent.firstElementChild;
    let next = current.nextElementSibling; 
    let nextToShow;
    let id = event.target.dataset.about;
    if (!id) return;

    current.setAttribute('activePost', false);
    current.style.display = "none";
    if (id == 'left') showNextPost(prev, last);
    else showNextPost(next, first);
});

function showNextPost(between, edge) {
    nextToShow = between ?? edge;
    nextToShow.setAttribute('activePost', true);
    nextToShow.style.display = "flex";
}

function showMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "flex";
        burgir.style.border = '2px solid black';
    } else {
        menu.style.display = "none";
        burgir.style.border = 'none';
    }
}