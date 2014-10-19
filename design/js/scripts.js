$(function() {

    $('.panel-group').on('show.bs.collapse', function (e) {
        $(e.target).prev('.panel-heading').addClass('active');
    });

    $('.panel-group').on('hidden.bs.collapse', function (e) {
        $(this).find('.panel-heading').not($(e.target)).removeClass('active');
    });

});