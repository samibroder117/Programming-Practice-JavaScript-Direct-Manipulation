const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
/* Declaring the alternative text for each image file */
const alttext = ['Closeup of a human eye', 'Random swirls', 'Purple and white flowers', 'Cave drawings', 'Brown butterfly'];

/* Looping through images */
for (let i = 0; i < filenames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filenames[i]);
    newImage.setAttribute('alt', alttext[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () => displayedImage.setAttribute('src', filenames[i]));
    newImage.addEventListener("click", () => displayedImage.setAttribute('alt', alttext[i]));
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", () => {    
    const currClass = btn.getAttribute("class");

    if (currClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0.0)";
    }
});

