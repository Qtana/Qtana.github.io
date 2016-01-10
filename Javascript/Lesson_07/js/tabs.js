function Tab(label, content) {
    this.label = label;
    this.content = content;
}

function Tabs(containerId) {
    var tabs = {};
    var $tabContainer = $(containerId);
    var $tabBar;
    var $tabContent;
    var activeTabId;

    this.addTab = function (tab) {
        var tabButtonId = 'tabs-button-' + Object.keys(tabs).length;

        tabs[tabButtonId] = tab;

        createTabButton(tabButtonId, tab.label);

        if (typeof activeTabId === 'undefined') {
            activateTab(tabButtonId);
        }
    };

    var activateTab = function (tabId) {
        if (typeof activeTabId != 'undefined') {
            $("#" + activeTabId).removeClass("tabs-button-active");
        }

        activeTabId = tabId;

        $("#" + tabId).addClass("tabs-button-active");

        $tabContent.text(tabs[tabId].content);
    };

    var createBar = function () {
        var $bar = $('<ul></ul>', {'class': 'tabs-bar'});

        $bar.appendTo($tabContainer);

        return $bar;
    };

    var createTabButton = function (tabButtonId, label) {
        var $button = $('<li></li>', {
            'id': tabButtonId,
            'class': 'tabs-button'
        });

        $button.click(tabClickHandler);

        $button.append(label);

        $button.appendTo($tabBar);

        return $button;
    };

    var createContentArea = function () {
        var $tabContentArea = $('<div></div>', {
            'class': 'tabs-content',
            'id': 'tabs-content'
        });

        $tabContentArea.appendTo($tabContainer);

        return $tabContentArea;
    };

    var tabClickHandler = function (event) {
        activateTab(event.target.id);
    };

    $tabBar = createBar();
    $tabContent = createContentArea();
}