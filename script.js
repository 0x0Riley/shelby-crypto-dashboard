async function getPrices(){

let response = await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd"
)

let data = await response.json()

document.getElementById("btc").innerText =
"$" + data.bitcoin.usd

document.getElementById("eth").innerText =
"$" + data.ethereum.usd

document.getElementById("sol").innerText =
"$" + data.solana.usd

}

setInterval(getPrices,3000)

getPrices()



function addTransaction(){

let list = document.getElementById("transactions")

let amount = Math.floor(Math.random()*1000)

let li = document.createElement("li")

li.innerText =
"Whale moved "+amount+" BTC"

list.prepend(li)

}

setInterval(addTransaction,5000)