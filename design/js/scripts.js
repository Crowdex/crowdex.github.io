$(function() {

    $('.panel-group').on('show.bs.collapse', function (e) {
        $(e.target).prev('.panel-heading').addClass('active');
    });

    $('.panel-group').on('hidden.bs.collapse', function (e) {
        $(this).find('.panel-heading').not($(e.target)).removeClass('active');
    });
    
    setTimeout(function(){
        alerts.print("Ahoj svet! Ja som len informácia...", alerts.info);
    }, 1000);
    
    setTimeout(function(){
        alerts.print('Something went wrong. Please contact technical support. <a href="#" onclick="alerts.hide([MSGID]);return false"><i class="fa fa-times"></i></a>', alerts.error, 0);
    }, 4000);
    
    setTimeout(function(){
        alerts.print('Pozor, táto stránka je kritická! A toto upozornenie tu bude presne 10 sekúnd.', alerts.warning, 10);
    }, 6000);
    
    setTimeout(function(){
        alerts.print('Super! Oslávujme minútu. <a href="#" onclick="alerts.hide([MSGID]);return false">Alebo nie?</a>', alerts.success, 60);
    }, 8000);

});

/* Sprava upozorneni na stranke. */
var alerts = {

    // KONFIGURACIA
    // Predvolena dlzka zobrazenia upozornenia (v sekundach, 0 = trvale upozornenie).
    defaultTimeout: 5,
    
    // Typy sprav.
    error: 1,
    success: 2,
    info: 3,
    warning: 4,
    
    // Archivuje nasledujuce ID spravy.
    nextmsgid: 0,
    
    // Vypise upozornenie na stranke. V sprave bude nahradeny text [MSGID] IDckom spravy.
    // msg - sprava
    // type - typ spravy
    //        predvolena hodnota - 3 (info)
    // timeout - dlzka zobrazenia upozornenia (v sekundach, 0 = trvale upozornenie);
    //           predvolene sa nacitava hodnota atributu defaultTimeout
    print: function(msg, type, timeout) {
        
        if(typeof(timeout) == "undefined") {
            timeout = this.defaultTimeout;
        }
        
        if(typeof(type) == "undefined") {
            type = this.info;
        }
        
        var msgid = this.nextmsgid;
        var msgtype = "info";
        var icon = '<i class="fa fa-info-circle"></i>';
        
        switch(type) {
                case 1:
                    msgtype = "danger";
                    icon = '<i class="fa fa-exclamation-circle"></i>';
                break;
                case 2:
                    msgtype = "success";
                    icon = '<i class="fa fa-check-circle"></i>';
                break;
                case 4:
                    msgtype = "warning";
                    icon = '<i class="fa fa-exclamation-triangle"></i>';
                break;
        }
        
        // V sprave bude nahradeny priznak [MSGID] samotnym ID spravy.
        msg = msg.replace(/\[MSGID\]/, msgid);
        
        icon += '&nbsp;&nbsp;';
        
        // Pridanie do zoznamu sprav.
        $("#alerts-container").append('<div id="alert-i'+msgid+'" class="alert alert-'+msgtype+'" style="display: none">'+icon+msg+'</div>');
        
        alerts.show(msgid);
        
        // Automaticke skrytie po urcitom case.
        if (timeout > 0) {
            setTimeout(function() {
                alerts.hide(msgid);
            }, timeout * 1000);
        }
        
        this.nextmsgid++;
        
        return msgid;
    
    },
    
    // Zobrazi spravu.
    // id - ID spravy
    show: function(id) {
        
        $("#alert-i"+id).slideDown(500);
        
    },
    
    // Skryje spravu.
    // id - ID spravy
    hide: function(id) {
        
        $("#alert-i"+id).slideUp(500);
        
    }

};