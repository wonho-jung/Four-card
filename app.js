document.querySelector('.m-butt').addEventListener('click', mobile);
document.querySelector('.t-butt').addEventListener('click', tablet);
document.querySelector('.d-butt').addEventListener('click', desktop);



function mobile() {
    window.open("index.html", "", "width=375, height=600");
}


function tablet() {
    window.open("index.html", "", "width=1000, height=700");

}

function desktop() {
    window.open("index.html", "", "width=1500, height=800");

}