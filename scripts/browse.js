$(document).ready(function () {    
    $('.thumbButton').on('click', likeButtonClick);
    $('.commentButton').on('click', commentButtonClick);
});


//this.name is the id of the meme clicked on
function likeButtonClick(event) {
    console.log(this.name);
}

function commentButtonClick(event) {
    console.log(this.name);
}