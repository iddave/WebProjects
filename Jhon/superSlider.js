let postParent = document.querySelector('.featured_works');
let posts = postParent.children;
console.log(posts);
// posts[0].parentElement.hidden=true;
for (let i = 1; i < posts.length; i++) {
    posts[i].hidden = true;
    posts[i].setAttribute('activePost', false);
}
posts[0].setAttribute('activePost', true);

document.addEventListener('click', function(event) {
    let current = document.querySelector("[activePost='true']")
    let prev = current.previousElementSibling;
    let last = postParent.lastElementChild;
    let first = postParent.firstElementChild;
    let next = current.nextElementSibling; //elem!!
    let nextToShow;

    console.log(`current = ${current.innerHTML}`);
    console.log(`currentHidden = ${current.hidden}`);
    console.log(`currentActive = ${current.getAttribute('activePost')}`);

    let id = event.target.dataset.about;
    console.log(`id = ${id}`);
    console.log(`event.target = ${event.target}`);
    if (!id) return;
    current.setAttribute('activePost', false);
    current.hidden = true;
    if (id == 'left') showNextPost(prev, last);
    else showNextPost(next, first);
    console.log(`currentHiddenAfterClick = ${current.hidden}`);
    console.log(`currentActiveAfterClick = ${current.getAttribute('activePost')}`);
});

function showNextPost(between, edge) {
    nextToShow = between ? ? edge;
    nextToShow.setAttribute('activePost', true);
    nextToShow.hidden = false;
}