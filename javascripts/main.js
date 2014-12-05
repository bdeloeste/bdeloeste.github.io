/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var stateModifier = new StateModifier({
	opacity: 1
});

context.add(stateModifier).add(surface);

stateModifier.setOpacity(
	0,
	{curve: 'linear', duration : 500},
	function() {console.log('animation finished!') }
	);