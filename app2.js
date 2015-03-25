function addItem() {
    var item = $('#todo')
    $('#items').prepend("<li> <span id='del'>  x  </span>" + "     " + item.val() + " " + "<input type='checkbox'>" + "</li>");
}

$(document).ready(function() {
    $('#add').click(function() {
        addItem();    
    });
    $('#items').on('click', 'li span', function() {
        $(this).parent().remove();
    });
    $('#removeall').click(function() {
        $('li').remove();
    });
});