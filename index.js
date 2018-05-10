function addListItem(foodItem){
    //console.log(foodItem);
    $('.shopping-list').append(`<li>
    <span class="shopping-item">${foodItem}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
}

function main(){
    $('#js-shopping-list-form button').click(function(event){
        event.preventDefault();
        //console.log($('#js-shopping-list-form input').val());
        if($('#js-shopping-list-form input').val() !== ''){
            addListItem($('#js-shopping-list-form input').val());
        }
    });
}

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });

  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

$(main());