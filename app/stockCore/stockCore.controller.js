(function() { // This is an IIFE

	angular.module("app.stockCore")
		.controller("StockCore", StockCore);

	function StockCore() {
		var vm = this;
		vm.message = "StockCore Controller";
	}
	
})();