const ui = require("sdk/ui");
const tabs = require("sdk/tabs");
const self = require("sdk/self")

var catchClick = false;
var worker;
const action_button = ui.ActionButton({
	id: "honeyLineButton",
	label: "HoneyLine it!",
	icon: {
		"32": "./icon-32.jpg",
		"64": "./icon-64.jpg"
	},
	onClick: function(state) {
		if(worker){
			worker.port.emit("actionTriggert", "HoneyLine it!");
		}
	}
});

tabs.on("ready", function (tab) {
  worker = tab.attach({
    contentScriptFile: self.data.url("contentScript.js")
  });
});


