'use strict';

var branchHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function BranchInfo(title, minCustomers, maxCustomers, avgCookies) {
  this.title = title;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hours = branchHours.length;
  this.hourlyResults = [];
  this.addCookie = 0;
}
BranchInfo.prototype.randomHours = function(){
  return Math.floor(Math.random()* (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

BranchInfo.prototype.cookie = function(){
  for (var i = 0; i < 14; i++) {
    var cookiesPerHour = Math.floor(this.avgCookies * this.randomHours());
    this.locationResults.push(branchHours[i] + ' = ' + cookiesPerHour);
    this.addCookie = cookiesPerHour + this.addCookie;
  }
};

BranchInfo.prototype.totalInfo = function(itemName){
  var storeItems = [];
  var item;
  for (var i = 0; i < itemNames.length; i++){
    item = new randomHours(itemNames[i]);
    randomHours.push(item);
  }
  this.randomHours = this.randomHours.concat(storeItems)
}
BranchInfo.prototype.getTable = function(){
  var table = document.createElement('table');
  var titleRow = document.createElement('tr');
  titleRow.textContent = this.title;
  table.appendChild(titleRow);
  var itemRow, itemName, itemPrice;

  for(var i = 0; i < this.hourlyResults.length; i++){
    itemRow = document.createElement('tr');
    itemName = document.createElement('td');
    itemName.textContent = this.hourlyResults[i].name;
    itemPrice = document.createElement('td');
    itemPrice.textContent = this.hourlyResults[i].price;
    itemRow.appendChild(itemName);
    itemRow.appendChild(itemPrice);
    table.appendChild(itemRow);
  }
  return table;
};

var app = document.getElementById('app');

var firstPike = new BranchInfo('First and Pike', 23, 65, 6.3);
var fPTable = firstPike.getTable();
app.appendChild(fPTable);
console.log('firstPike', firstPike);

var seaTac = new BranchInfo('SeaTac', 3, 24, 1.2);
var sTTable = seaTac.getTable();
app.appendChild(sTTable);
console.log('seaTac', seaTac);

var seaCenter = new BranchInfo('Seattle Center', 11, 38, 3.7);
var sCTable = seaCenter.getTable();
app.appendChild(sCTable);
console.log('seaCenter', seaCenter);

var capHill = new BranchInfo('Capital Hill', 20, 38, 2.3);
var cHTable = capHill.getTable();
app.appendChild(cHTable);
console.log('capHill', capHill);

var alki = new BranchInfo('Alki', 2, 16, 4.6);
var aKTable = alki.getTable();
app.appendChild(aKTable);
console.log('alki', alki);
