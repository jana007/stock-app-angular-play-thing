(function () {
    angular.module('app.stockCore')
        .constant("yahooFinanceWebServiceURL", { url: "https://query.yahooapis.com/v1/public/yql" })
        .service("quoteService", quoteService);

    function quoteService($http, yahooFinanceWebServiceURL) {
        this.getQuotes = function () {
            var query = 'select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")';
            return getQuotes(query);
        }

        this.getQuote = function (symbol) {
            var query = 'select * from yahoo.finance.quote where symbol = "' + symbol + '"';
            return getQuotes(query);
        }

        function getQuotes(query) {
            var config = {
                    params: {
                        q: query,
                        format: "json",
                        diagnostics: "true",
                        env: "store://datatables.org/alltableswithkeys",
                        callback: "JSON_CALLBACK"
                }
            };
            return $http.jsonp(yahooFinanceWebServiceURL.url, config);
        }
    }
})();
