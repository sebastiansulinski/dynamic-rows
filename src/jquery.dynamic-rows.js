/*
 * ssdDynamicRows jQuery plugin
 * Examples and documentation at: https://github.com/sebastiansulinski/dynamic-rows
 * Copyright (c) 2015 Sebastian Sulinski
 * Version: 2.0.1 (27-FEB-2015)
 * Licensed under the MIT.
 * Requires: jQuery v1.9 or later
 */
(function($) {

    $.fn.ssdDynamicRows = function(options) {

        "use strict";

        var settings = $.extend({

            eventType           : 'click',

            row                 : '.row',

            addButton           : '.dynamicAdd',
            removeButton        : '.dynamicRemove',

            warning             : '.warning',

            clearWarningMethod  : 'remove',
            clearWarningClass   : 'show',

            nameDivider         : '-'

        }, options);



        var row =           settings.row,
            add =           settings.addButton,
            remove =        settings.removeButton,
            warning =       settings.warning;


        function preventStop(event) {

            "use strict";

            event.preventDefault();
            event.stopPropagation();

        }

        function clearWarning(instance) {

            "use strict";

            switch(settings.clearWarningMethod) {
                case 'removeClass':
                    instance.removeClass(settings.clearWarningClass);
                    break;
                default:
                    instance.remove();
                    break;
            }

        }

        function dynamicAttributes(instance) {

            "use strict";

            var inputs = instance.find(':input'),
                labels = instance.find('label'),
                warnings = instance.find(warning);

            $.each(inputs, function(index, value) {

                var name = $(this).prop('name').split(settings.nameDivider),
                    newName = name[0] + settings.nameDivider + (parseInt(name[1], 10) + 1);

                $(this).prop('name', newName)
                    .prop('id', newName)
                    .val('');

            });

            $.each(labels, function(index, value) {

                var forAttr = $(this).prop('for').split(settings.nameDivider),
                    newForAttr = forAttr[0] + settings.nameDivider + (parseInt(forAttr[1], 10) + 1);

                $(this).prop('for', newForAttr)
                    .prop('class', newForAttr)
                    .find('.warning').remove();

            });

            $.each(warnings, function(index, value) {

                clearWarning($(this));

            });

            return instance;

        }

        function dynamicTemplate(instance) {

            "use strict";

            return dynamicAttributes(instance.closest(row).clone());

        }

        function dynamicAdd(instance) {

            "use strict";

            instance.on(settings.eventType, add, function(event) {

                preventStop(event);

                var thisRow = $(this).closest(row),
                    newItem = dynamicTemplate(thisRow);

                instance.find(add)
                    .hide();

                instance.append(newItem);

                instance.find(remove)
                    .show();

            });

        }

        function dynamicRemove(instance) {

            "use strict";

            instance.on(settings.eventType, remove, function(event) {

                preventStop(event);

                var thisRow = $(this).closest(row);

                thisRow.fadeOut(200, function() {

                    $(this).remove();

                    var allItems = instance.children(row);

                    allItems.last(row)
                        .find(add)
                        .show();

                    if (allItems.length < 2) {

                        allItems.last(row)
                            .find(remove)
                            .hide();

                    }

                });

            });

        }

        function setUp(instance) {

            "use strict";

            instance.last(row)
                .find(remove)
                .hide();

        }




        return this.each(function() {

            "use strict";

            setUp($(this));
            dynamicAdd($(this));
            dynamicRemove($(this));

        });




    }

})(jQuery);