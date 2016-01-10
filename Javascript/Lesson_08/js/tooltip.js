function Tooltip(inputElementId, text) {
    var $inputElement = $(inputElementId);
    var tooltipContent = text;
    var $tooltip;

    var init = function () {
        $inputElement.mouseover(mouseOverHandler);
        $inputElement.mouseout(mouseOutHandler);

        $tooltip = createTooltip();
    }

    var createTooltip = function () {
        var $tooltipContent = $('<span></span>').append(tooltipContent);

        var $tooltip = $('<div></div>', {
            'class': 'tooltip'
        });

        $tooltipContent.appendTo($tooltip);

        $tooltip.appendTo($inputElement.parent());

        return $tooltip;
    };

    var mouseOverHandler = function () {
        $tooltip.css("display", "inline-block");
    };

    var mouseOutHandler = function () {
        $tooltip.css("display", "none");
    };

    init();
}