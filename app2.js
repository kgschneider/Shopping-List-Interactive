$(document).ready(function() {
    $('#add').click(function() {
        var item = $('#todo')
        $('#items').prepend("<li> <span id='del'>  x  </span>" + "     " + item.val() + " " + "<input type='checkbox'>" + "</li>");
    });
    $('#items').on('click', 'li span', function() {
        $(this).parent().remove();
    });
    $('#removeall').click(function() {
        $('li').remove();
    });
});