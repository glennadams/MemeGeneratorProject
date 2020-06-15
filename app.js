const memeContainer = document.querySelector('#meme-container');
const getMemeForm = document.querySelector('form');
const addMemeBtn = document.querySelector("#add-meme-btn");

// Get form input on submit button click
// Build meme image and add to container
getMemeForm.addEventListener('submit', function(e) {
    // Stop form from refresshing
    e.preventDefault();

    // Collect input data from form
    let imageUrl = document.querySelector('#image-url').value;
    let topText = document.querySelector('#top-text').value;
    let bottomText = document.querySelector('#bottom-text').value;

    console.log(imageUrl);
    console.log(topText);
    console.log(bottomText);

    // build div element that contains image and text
    // Create parent element
    let newImgDiv = document.createElement('div');
    // Create child elements
    let newImg = document.createElement('img');
        newImg.src = imageUrl;
    let newTopText = document.createElement('h3');
        newTopText.innerHTML = topText;
        newTopText.id = 'h3-text-top';
    let newBottomText = document.createElement('h3');
        newBottomText.innerHTML = bottomText;
        newBottomText.id = 'h3-text-bottom';
    let newDeleteBtn = document.createElement('button');
        newDeleteBtn.classList = 'delete-btn';
        newDeleteBtn.innerHTML = 'delete';
    // Add child elements to parent meme div
    newImgDiv.appendChild(newImg);
    newImgDiv.appendChild(newTopText);
    newImgDiv.appendChild(newBottomText);
    newImgDiv.appendChild(newDeleteBtn);
    // Add meme div to meme container
    memeContainer.appendChild(newImgDiv);

    // reset inputs
    getMemeForm.reset();
})

// delete memes when clicked on them

memeContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
})