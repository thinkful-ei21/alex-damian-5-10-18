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

$(main());