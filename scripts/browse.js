$(document).ready(function () {    
    $('.thumbButton').on('click', likeButtonClick);
    $('.commentButton').on('click', commentButtonClick);
    
    var socket = io();
    
    socket.on('updateLikes', function(meme) {
        var id = 'likes-' + meme._id;
        console.log(id);
        console.log(meme.likes);
        $('#' + id).html(meme.likes);
    })
});


//this.name is the id of the meme clicked on
function likeButtonClick(event) {    
    $.ajax({
        type: 'GET',
        url: '/addLike/'+this.name
    });
    
}

function commentButtonClick(event) {
    console.log(this.name);
}