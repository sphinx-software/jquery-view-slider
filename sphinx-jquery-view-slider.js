;(function ($, window) {

    'use strict';

    var ViewsNavigator = function ($element) {
        this.$element = $element;
        this.$views   = $element.find('[data-view]');
        this.$currentView = null;

        // Detach all view elements from dom
        this.$views.detach();
    };

    ViewsNavigator.prototype.transit = function (to) {

        var dfd = $.Deferred();

        var $currentView = this.$currentView;
        var $target      = this.$views.filter('[data-view="' + to + '"]');
        var self         = this;

        if ($currentView) {
            $currentView.detach();
        }

        $target.addClass('slider-enter');
        $target.appendTo(this.$element);
        $target.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('slider-enter');
            self.$currentView = $(this);
            dfd.resolve($(this));
        });

        return dfd.promise();
    };


    window.ViewsNavigator = ViewsNavigator;
})(jQuery, window);
