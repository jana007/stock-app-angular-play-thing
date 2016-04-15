(function() {
  'use strict';

  angular.module('app.stockDetails')
    .controller("StockDetails", StockDetails);

  function StockDetails(quoteService, $routeParams) {
    var vm = this;
    vm.message = "StockDetails Controller";
    quoteService.getQuote($routeParams.Symbol)
      .success(function (data) { vm.stockQuote = data; })
      .error(function () { console.log("Failed to Load Data"); });
  }
})();
