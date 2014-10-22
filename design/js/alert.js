/*
 *  Alert
 *
 *  Trieda pre vytvaranie upozorneni, ktore sa zobrazuju na vrchu stranky.
 *  - text: Text upozornenia
 *  - options: Nastavenia (objekt)
 *      - type: Typ upozornenia, moznosti: Alert.Success, Alert.Info (default), Alert.Warning, Alert.Error
 *      - timeout: Cas v sekundach, za ktory ma upozornenie zmiznut (default je 5), ak je nastavene 0, upozornenie nezmizne nikdy
 *      - dismissable: Zobrazenie tlacitka na konci upozornenia, pomocou ktoreho ho moze pouzivatel sam skryt (default false)
 */
(function() {

function Alert( text, options ) {
    this.text = text;

    this.options = $.extend({
        type: Alert.Info,
        timeout: DefaultTimeout,
        dismissible: false
    }, options);

    this.domContainer = this.createContainer();

    $('#alerts-container').append(this.domContainer);

    this.show();
}

Alert.prototype = {

    createContainer: function() {
        var container = $('<div class="alert alert-' + this.options.type + '" style="display: none"></div>');

        var iconClass = {
            'success': 'fa-check-circle',
            'info': 'fa-info-circle',
            'warning': 'fa-exclamation-triangle',
            'danger': 'fa-exclamation-circle'
        };

        var iconHTML = '<i class="alert-icon fa ' + iconClass[this.options.type] + '"></i>';

        container.html(iconHTML + this.text);

        if (this.options.dismissible) {
            var hideButton = $('<a href="#" class="alert-icon"><i class="fa fa-times"></i></a>');
            hideButton.on('click', this.onDismissClick.bind(this));
            container.append(hideButton);
        }

        return container;
    },

    // Public: Zobrazenie spravy
    show: function() {
        if (this.options.timeout) {
            this.hideTimer = setTimeout(this.hide.bind(this), this.options.timeout * 1000);
        }

        this.domContainer.slideDown(SlideTime);
    },

    // Public: Skrytie spravy
    hide: function() {
        if (this.options.timeout) {
            clearTimeout(this.hideTimer);
        }

        this.domContainer.slideUp(SlideTime);
    },

    onDismissClick: function() {
        this.hide();

        return false;
    }

};

var DefaultTimeout = 5;
var SlideTime = 500;

Alert.Success = 'success';
Alert.Info = 'info';
Alert.Warning = 'warning';
Alert.Error = 'danger';

window.Alert = Alert;

})();