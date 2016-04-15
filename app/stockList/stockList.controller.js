(function() {
  'use strict';

  angular.module('app.stockList')
    .controller("StockList", StockList);

  function StockList(quoteService) {
    var vm = this;
    vm.message = "StockList Controller";
    //vm.stockQuotes = stockQuotes;
    quoteService.getQuotes()
            .success(function (data) { vm.stockQuotes = data; })
            .error(function () { console.log("Failed to Load Data"); });
  }
})();
