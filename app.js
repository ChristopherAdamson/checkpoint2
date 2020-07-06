
let inventory = {
  cheese: 0,
  pickaxe: 0,
  miner: 0,
  drill: 0,
  spaceShip: 0,
}

let stats = {
  clicks: 0,
  cheesePerClick: 1,
  cheesePerSecond: 0,
}

let clickUpgrades = {
  pickaxe: {
    // TODO change price back to 100
    price: 50,
    multiplier: 1,
    title: "Pickaxe",
  },
  drill: {
    price: 7500,
    multiplier: 75,
    title: "Drill",
  }
}
let idleUpgrades = {
  miner: {
    price: 250,
    multiplier: 5,
    title: "Miner",
  },
  spaceShip: {
    price: 5000,
    multiplier: 20,
    title: "SpaceShip"
  }
}

function interval() {
  let seconds = 3
  let inter = setInterval(idle, 1000 * seconds)
}
function idle() {
  inventory.cheese += stats.cheesePerSecond
  drawInventory()
  drawClickUpgrades()
  drawIdleUpgrades()
  drawStats()
}
function buyMiner() {
  if (inventory.cheese >= idleUpgrades.miner.price) {
    inventory.cheese -= idleUpgrades.miner.price
    stats.cheesePerSecond += idleUpgrades.miner.multiplier
    idleUpgrades.miner.price += Math.floor((idleUpgrades.miner.price *= 0.3))
    inventory.miner++
    drawInventory()
    drawStats()
    drawClickUpgrades()
    drawIdleUpgrades()
  } else {
    alert("you need more cheddar")
  }
}

function buySpaceShip() {
  if (inventory.cheese >= idleUpgrades.spaceShip.price) {
    inventory.cheese -= idleUpgrades.spaceShip.price
    stats.cheesePerSecond += idleUpgrades.spaceShip.multiplier
    idleUpgrades.spaceShip.price += Math.floor((idleUpgrades.spaceShip.price *= 0.5))
    inventory.spaceShip++
    drawInventory()
    drawStats()
    drawClickUpgrades()
    drawIdleUpgrades()
  } else {
    alert("you need more cheddar")
  }
}

function buyDrill() {
  if (inventory.cheese >= clickUpgrades.drill.price) {
    inventory.cheese -= clickUpgrades.drill.price
    stats.cheesePerClick += clickUpgrades.drill.multiplier
    clickUpgrades.drill.price += Math.floor((clickUpgrades.drill.price *= 0.4))
    inventory.drill++
    drawInventory()
    drawStats()
    drawClickUpgrades()
    drawIdleUpgrades()
  } else {
    alert("you need more cheddar")
  }
}
// when pressed i want it to check if there is enough cheese to buy it
// if there is I want to deduct the cheese by price, add the modifier and increase price
function buyPickaxe() {
  if (inventory.cheese >= clickUpgrades.pickaxe.price) {
    inventory.cheese -= clickUpgrades.pickaxe.price
    stats.cheesePerClick += clickUpgrades.pickaxe.multiplier
    clickUpgrades.pickaxe.price += Math.floor((clickUpgrades.pickaxe.price *= 0.2))
    inventory.pickaxe++
    drawInventory()
    drawStats()
    drawClickUpgrades()
    drawIdleUpgrades()
  } else {
    alert("you need more cheddar")
  }
}
// TODO need buy functions for drill miner and spaceship
function mine() {
  stats.clicks++
  inventory.cheese += stats.cheesePerClick
  drawStats()
  drawInventory()
  drawClickUpgrades()
  drawIdleUpgrades()
}
// each time mine is called draw inventory should update with cheese count
// each time an upgrade is purchased increment that in inventory
function drawInventory() {
  let template = ""
  template += `
  <h1><u>Inventory</u></h1>
  <h2>Cheese: ${inventory.cheese} </h2>
  <h5>Pickaxe's: ${inventory.pickaxe}</h5>
  <h5>Drill's: ${inventory.drill}</h5>
  <h5>Miner's: ${inventory.miner}</h5>
  <h5>Spaceship's: ${inventory.spaceShip}</h5>
  `
  document.getElementById("inventory").innerHTML = template
}


// each time an upgrade is purchased update the counter
function drawStats() {
  let template = ""
  template += `
    <h1><u>Stats</u></h1>
    <h5>X's Clicked: ${stats.clicks} </h5>
    <h5>Cheese per Click: ${stats.cheesePerClick}</h5>
    <h5>Cheese per 3 seconds: ${stats.cheesePerSecond}</h5>
  `
  document.getElementById("stats").innerHTML = template
}
// each time an upgrade is purchased, reflect price increase (probably write a new function and call it here)
function drawClickUpgrades() {
  let template = ""
  for (let prop in clickUpgrades) {
    let upgrade = clickUpgrades[prop]
    if (upgrade.price > inventory.cheese) {
      template += `
      <div class="col-6  ">
            <button type= "button" title="Buy a ${upgrade.title} for ${upgrade.price} cheese. Gain ${upgrade.multiplier} cheese per click" onclick="buy${upgrade.title}()" class="big-font" disabled ><img class="img" src="assets/${upgrade.title}.png" alt=""></img></button> -  ${upgrade.price}
          </div>
      `
    } else {
      template += `
  <div class="col-6">
    <button title="Buy a ${upgrade.title} for ${upgrade.price} cheese. Gain ${upgrade.multiplier} cheese per click" onclick="buy${upgrade.title}()" class="big-font  "><img class="img" src="assets/${upgrade.title}.png" alt=""></img></button> - ${upgrade.price}
      </div>
  `
    }
  }
  document.getElementById("click-upgrades").innerHTML = template
}

function drawIdleUpgrades() {
  let template = ""
  for (let prop in idleUpgrades) {
    let upgrade = idleUpgrades[prop]
    if (upgrade.price > inventory.cheese) {
      template += `
      <div class="col-6  ">
            <button type= "button" title="Buy a ${upgrade.title} for ${upgrade.price} cheese.  Gain ${upgrade.multiplier} cheese per 3 seconds " onclick="buy${upgrade.title}()" class="big-font" disabled ><img class="img" src="assets/${upgrade.title}.png" alt=""></img></button> -  ${upgrade.price}
          </div>
      `
    } else {
      template += `
    <div class="col-6  ">
          <button title="Buy a ${upgrade.title} for ${upgrade.price} cheese. Gain ${upgrade.multiplier} cheese per 3 seconds" onclick="buy${upgrade.title}()" class="big-font"><img class="img" src="assets/${upgrade.title}.png" alt=""></img></button> -  ${upgrade.price}
        </div>
    `
    }
  }
  document.getElementById("idle-upgrade").innerHTML = template
}



drawInventory()
drawStats()
drawClickUpgrades()
drawIdleUpgrades()
interval()