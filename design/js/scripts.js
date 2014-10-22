$(function() {

    $('.panel-group').on('show.bs.collapse', function (e) {
        $(e.target).prev('.panel-heading').addClass('active');
    });

    $('.panel-group').on('hidden.bs.collapse', function (e) {
        $(this).find('.panel-heading').not($(e.target)).removeClass('active');
    });

    setTimeout(function() {
        var a1 = new Alert('Ahoj svet! Ja som len informácia...');
    }, 1000);

    setTimeout(function() {
        var a2 = new Alert('Something went wrong. Please contact technical support.', {
            type: Alert.Error,
            timeout: 0,
            dismissible: true
        });
    }, 4000);

    setTimeout(function() {
        var a3 = new Alert('Pozor, táto stránka je kritická! A toto upozornenie tu bude presne 10 sekúnd.', {
            type: Alert.Warning,
            timeout: 10
        });
    }, 6000);

    setTimeout(function() {
        var a4 = new Alert('Super! Oslávujme minútu.', {
            type: Alert.Success,
            timeout: 60,
            dismissible: true
        });
    }, 8000);

});