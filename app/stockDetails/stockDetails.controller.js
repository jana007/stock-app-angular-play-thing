(function() {
  'use strict';

  angular.module('app.stockDetails')
    .controller("StockDetails", StockDetails);

  function StockDetails() {
    var vm = this;
    vm.message = "StockDetails Controller";
  }
})();
