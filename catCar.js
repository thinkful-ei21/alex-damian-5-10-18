$(function () {
    $('.thumbnail img').click(function(event){
        $('.hero img').attr('src', $(event.currentTarget).attr('src'));
        console.log($(event.currentTarget).attr('src'));

    })
} );