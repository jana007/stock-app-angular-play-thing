(function() {
  'use strict';

  angular.module('app.stockList')
    .controller("StockList", StockList);

  function StockList(stockQuotes, $location) {
    var vm = this;
    vm.message = "StockList Controller";
    vm.stockQuotes = stockQuotes;
  }
})();
