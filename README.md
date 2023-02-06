[Xcoin]: https://crypto-tracker-4922.onrender.com/

# Xcoin

Xcoin is a crypto tracker website influenced by Coinmarketcap in order to show you real time cryptocurrency prices using Coingecko's API

**Link to project:** https://crypto-tracker-4922.onrender.com/

<img src="https://i.ibb.co/mNg83qw/ezgif-4-8ece80c788.gif" height="80%" />

## Usage

Click on any coin on the front page in order to see cryptocurrency data. You can also interact with the Area series graph. The Area series graph shows
the entire historical data for the coin.

## How It's Made:

**Tech used:** React, Javascript, Node.Js, Express

I first created a basic crypto tracker in React that also allows you to see real-time prices as well as a description of the coin with basic data like 24 hour low, Marketcap, Circulating supply etc. Then I added a Lightweight Tradingview
chart in a form of an Area Series in order to display data. I then added color conditionals into the prices if
the prices were a win or a loss for the time period they're display at. I then added a carousel in order to display
top 10 trending coins as well as the top 10 ten exchanges to use. 

## Optimizations

My original intention was to have the Tradingview graph display OHLC data and technical analysis.
Coinmarketcap and Coingecko are great websites but the inherent flaw is that there is too much noise which can cause
analysis paralysis. My  ideal app aimed to simplify it better by only displaying the type of data you really need in addition to OHLC
data so you could see TA data in real time and know if it's the right time to buy. 

...but unfortunately, CoinGecko API OHLC data is severly limited by a couple of dozen or so candle bars. In order for
Tulind.js (NPM package used to calculate indicators) to make accurate Technical Analysis of the markets, I need 
more candlebar data. Might probably be possible in the near future but for now, an Area Series will do.

## Lessons Learned:

Creating this app made me realize what a blessing React is really is as a language. Despite the stereotypes of it being a headache,
I found a lot more potential creating this app on React that I did with just vanilla Javascript. Although it did make some aspects
easier, like displaying real-time data, it also came with it's own set of problems. One of those was figuring out how to make
the Tradingview chart responsive but I managed to overcome it.
