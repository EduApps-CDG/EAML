new eaml.uses(api.tag.Button);
new eaml.uses(api.feature.Window);
eaml.debug(true);
console.log("pipa!");

function main() {
	var bot = new eaml.tag.Button("oi");
	bot.show();
	var win = new eaml.feature.Window("hey");
}
