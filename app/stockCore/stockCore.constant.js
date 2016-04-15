(function() {
  'use strict';

  angular
    .module('app.stockCore')

    // YQL Console - https://developer.yahoo.com/yql/console
    // select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")
    .constant("stockQuotes", {
       "query": {
        "count": 4,
        "created": "2016-04-13T22:22:08Z",
        "lang": "en-US",
        "diagnostics": {
         "url": [
          {
           "execution-start-time": "0",
           "execution-stop-time": "4",
           "execution-time": "4",
           "content": "http://www.datatables.org/yahoo/finance/quote/yahoo.finance.quote.xml"
          },
          {
           "execution-start-time": "9",
           "execution-stop-time": "26",
           "execution-time": "17",
           "content": "http://download.finance.yahoo.com/d/quotes.csv?f=aa2bb2b3b4cc1c3c4c6c8dd1d2ee1e7e8e9ghjkg1g3g4g5g6ii5j1j3j4j5j6k1k2k4k5ll1l2l3mm2m3m4m5m6m7m8nn4opp1p2p5p6qrr1r2r5r6r7ss1s7t1t7t8vv1v7ww1w4xy&s=YHOO,AAPL,GOOG,MSFT"
          }
         ],
         "publiclyCallable": "true",
         "query": {
          "execution-start-time": "7",
          "execution-stop-time": "27",
          "execution-time": "20",
          "params": "{url=[http://download.finance.yahoo.com/d/quotes.csv?f=aa2bb2b3b4cc1c3c4c6c8dd1d2ee1e7e8e9ghjkg1g3g4g5g6ii5j1j3j4j5j6k1k2k4k5ll1l2l3mm2m3m4m5m6m7m8nn4opp1p2p5p6qrr1r2r5r6r7ss1s7t1t7t8vv1v7ww1w4xy&s=YHOO,AAPL,GOOG,MSFT]}",
          "content": "select * from csv where url=@url and columns='Ask,AverageDailyVolume,Bid,AskRealtime,BidRealtime,BookValue,Change&PercentChange,Change,Commission,Currency,ChangeRealtime,AfterHoursChangeRealtime,DividendShare,LastTradeDate,TradeDate,EarningsShare,ErrorIndicationreturnedforsymbolchangedinvalid,EPSEstimateCurrentYear,EPSEstimateNextYear,EPSEstimateNextQuarter,DaysLow,DaysHigh,YearLow,YearHigh,HoldingsGainPercent,AnnualizedGain,HoldingsGain,HoldingsGainPercentRealtime,HoldingsGainRealtime,MoreInfo,OrderBookRealtime,MarketCapitalization,MarketCapRealtime,EBITDA,ChangeFromYearLow,PercentChangeFromYearLow,LastTradeRealtimeWithTime,ChangePercentRealtime,ChangeFromYearHigh,PercebtChangeFromYearHigh,LastTradeWithTime,LastTradePriceOnly,HighLimit,LowLimit,DaysRange,DaysRangeRealtime,FiftydayMovingAverage,TwoHundreddayMovingAverage,ChangeFromTwoHundreddayMovingAverage,PercentChangeFromTwoHundreddayMovingAverage,ChangeFromFiftydayMovingAverage,PercentChangeFromFiftydayMovingAverage,Name,Notes,Open,PreviousClose,PricePaid,ChangeinPercent,PriceSales,PriceBook,ExDividendDate,PERatio,DividendPayDate,PERatioRealtime,PEGRatio,PriceEPSEstimateCurrentYear,PriceEPSEstimateNextYear,Symbol,SharesOwned,ShortRatio,LastTradeTime,TickerTrend,OneyrTargetPrice,Volume,HoldingsValue,HoldingsValueRealtime,YearRange,DaysValueChange,DaysValueChangeRealtime,StockExchange,DividendYield'"
         },
         "javascript": {
          "execution-start-time": "7",
          "execution-stop-time": "55",
          "execution-time": "48",
          "instructions-used": "193468",
          "table-name": "yahoo.finance.quote"
         },
         "user-time": "56",
         "service-time": "21",
         "build-version": "0.2.998"
        },
        "results": {
         "quote": [
          {
           "symbol": "YHOO",
           "AverageDailyVolume": "17563500",
           "Change": "+0.65",
           "DaysLow": "36.90",
           "DaysHigh": "37.35",
           "YearLow": "26.15",
           "YearHigh": "46.13",
           "MarketCapitalization": "35.20B",
           "LastTradePriceOnly": "37.31",
           "DaysRange": "36.90 - 37.35",
           "Name": "Yahoo! Inc.",
           "Symbol": "YHOO",
           "Volume": "17163522",
           "StockExchange": "NMS"
          },
          {
           "symbol": "AAPL",
           "AverageDailyVolume": "42159500",
           "Change": "+1.60",
           "DaysLow": "110.80",
           "DaysHigh": "112.34",
           "YearLow": "92.00",
           "YearHigh": "134.54",
           "MarketCapitalization": "621.22B",
           "LastTradePriceOnly": "112.04",
           "DaysRange": "110.80 - 112.34",
           "Name": "Apple Inc.",
           "Symbol": "AAPL",
           "Volume": "33240263",
           "StockExchange": "NMS"
          },
          {
           "symbol": "GOOG",
           "AverageDailyVolume": "2357510",
           "Change": "+8.63",
           "DaysLow": "744.26",
           "DaysHigh": "754.38",
           "YearLow": "515.18",
           "YearHigh": "789.87",
           "MarketCapitalization": "517.42B",
           "LastTradePriceOnly": "751.72",
           "DaysRange": "744.26 - 754.38",
           "Name": "Alphabet Inc.",
           "Symbol": "GOOG",
           "Volume": "1707507",
           "StockExchange": "NMS"
          },
          {
           "symbol": "MSFT",
           "AverageDailyVolume": "36277900",
           "Change": "+0.70",
           "DaysLow": "54.89",
           "DaysHigh": "55.44",
           "YearLow": "39.72",
           "YearHigh": "56.85",
           "MarketCapitalization": "437.78B",
           "LastTradePriceOnly": "55.35",
           "DaysRange": "54.89 - 55.44",
           "Name": "Microsoft Corporation",
           "Symbol": "MSFT",
           "Volume": "20813821",
           "StockExchange": "NMS"
          }
         ]
        }
       }
      });
})();
