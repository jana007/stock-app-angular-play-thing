(function () {
    angular
      .module('app.stockList')
      .filter("upOrDown", upOrDown);

    function upOrDown() {
        return function (data, sign) {
            if (typeof data === 'undefined' || typeof data[0].Change === 'undefined') return data;
            if (sign != "+" && sign != "-") return data;

            var filtered = [];
            for (var i = 0; i < data.length; i++) {
                if ((sign == "+" && data[i].Change > 0) || (sign == "-" && data[i].Change < 0))
                  { filtered.push(data[i]); }
            }

            return filtered;
        };
      }

      function upOrDown2($filter) {
          return function (data, sign) {
              if (typeof data === 'undefined' || typeof data[0].Change === 'undefined') return data;
              sign = sign || "+";

              return $filter("filter")(data,
                function(item) {
                  if ((sign == "+" && item.Change > 0) || (sign == "-" && item.Change < 0)) return true;
                  return false;
                }
              );
          };
        }
})();
