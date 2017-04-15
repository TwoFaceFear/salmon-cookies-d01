'use strict';

var branchHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Branch(branchTitle, minCust, maxCust, avgCookies) {
  this.branchTitle = branchTitle;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyResults = [];
  this.addCookie = 0;
  this.rng();
}

//random number generator
//uses random number to calculate cookies sold per hour
//adds cookie array together to find total cookis sold per day
Branch.prototype.rng = function(){
  var customerDifference = this.maxCust - this.minCust;
  var customers, cookies;
  for (var i = 0; i < branchHours.length; i++){
    customers = Math.random() * customerDifference + this.minCust;
    cookies = Math.floor(customers * this.avgCookies);
    this.hourlyResults.push(cookies);
    this.addCookie += cookies;
  }
};

// i need to create a table on the page using the hours of operation, the specific branch and the totals created above

Branch.prototype.addInfo = function(){
  var timeRow = document.createElement('tr');
  table.appendChild(timeRow);

  var cell = document.createElement('td');
  cell.textContent = this.branchTitle;
  timeRow.appendChild(cell);

  var totalCell = document.createElement('td');
  totalCell.textContent = this.addCookie;


  for(var i = 0; i < this.hourlyResults.length; i++){
    var itemName = document.createElement('td');
    itemName.textContent = this.hourlyResults[i];
    timeRow.appendChild(itemName);
  }
  timeRow.appendChild(totalCell);
};

function getTable() {
  var titleRow = document.createElement('tr');
  table.appendChild(titleRow);

  var cell = document.createElement('td');
  titleRow.appendChild(cell);

  for(var i = 0; i < branchHours.length; i++){
    var itemName = document.createElement('td');
    itemName.textContent = branchHours[i];
    titleRow.appendChild(itemName);
  }
  var cellTitle = document.createElement('td');
  cellTitle.textContent = 'Total';
  titleRow.appendChild(cellTitle);
}

var table = document.getElementById('table');

function main() {
  getTable();
  var pike = new Branch('1st and Pike', 23, 65,6.3);
  pike.rng;
  pike.addInfo();
  console.log('pike',pike);

  var seaTac = new Branch('SeaTac', 3, 24, 1.2);
  seaTac.rng;
  seaTac.addInfo();
  console.log('seaTac',seaTac);

  var seaCenter = new Branch('Seattle Center', 11, 38, 3.7);
  seaCenter.rng;
  seaCenter.addInfo();
  console.log('seaCenter',seaCenter);

  var capHill = new Branch('Capital Hill', 20, 38, 2.3);
  capHill.rng;
  capHill.addInfo();
  console.log('capHill',capHill);

  var alki = new Branch('Alki', 2, 16, 4.6);
  alki.rng;
  alki.addInfo();
  console.log('alki',alki);
}

function storeCreate(event) {
  event.preventDefault();

  var form = event.target;

  var branchTitle = form.branchTitle.value;
  var minCust = parseInt(form.minCust.value);
  var maxCust = parseInt(form.maxCust.value);
  var avgCookies = parseInt(form.avgCookies.value);

  var branch = new Branch(branchTitle, minCust, maxCust, avgCookies);
  document.getElementById('table').appendChild(branch.addInfo());

  form.reset();
}
document.getElementById('store-create').addEventListner('submit', storeCreate);

main();
