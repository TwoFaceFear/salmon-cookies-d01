'use strict';

var open = 6;
var close = 20;

function genTable(){
  var table = document.createElement('table');
  table.setAttribute('id', 'table-create');
  document.body.appendChild(table);

  var tr = document.createElement('tr');
  table.appendChild(tr);

  var th = document.createElement('th');
  th.textContent = 'Store';
  tr.appendChild(th);

  var hourDisplay;
  for(var i = open; i < close; i++) {
    hourDisplay = document.createElement('th');

    if(i === 12){
      hourDisplay.textContent = '12pm';
    } else if (i === 0 || i === 24){
      hourDisplay.textContent = i + 'am';
    } else if (i < 12){
      hourDisplay.textContent = i + 'am';
    } else {
      hourDisplay.textContent = (i % 12) + 'pm';
    }

    tr.appendChild(hourDisplay);
  }

  var heading = document.createElement('th');
  heading.textContent = 'Total';
  tr.appendChild(hourDisplay);

  return table;
}

function Branch(branchTitle, minCust, maxCust, avgCookies){
  this.branchTitle = branchTitle;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.cookiesSold = 0;
  this.hourlyCookies = [];
  this.open = open;
  this.close = close;
  this.info();
}


Branch.prototype.genRow = function(){
  var row = document.createElement('tr');
  var data = document.createElement('td');
  data.textContent = this.branchTitle;
  row.appendChild(data);

  var cookies;
  for(var i = 0; i < this.hourlyCookies.length; i++){
    cookies = document.createElement('td');
    cookies.textContent = this.hourlyCookies[i];
    row.appendChild(cookies);
  }

  var total = document.createElement('td');
  total.textContent = this.cookiesSold;
  row.appendChild(total);

  return row;
};

Branch.prototype.info = function(){
  var custDifference = this.maxCust - this.minCust;
  var customers, cookiesSoldMod;
  for(var i = this.open; i < this.close; i++){
    customers = (Math.random() * custDifference) + this.minCust;
    cookiesSoldMod = Math.floor(customers * this.avgCookies);

    this.cookiesSold += cookiesSoldMod;

    this.hourlyCookies.push(cookiesSoldMod);
  }
};

function main(){
  var displayTable = genTable();
  displayTable.appendChild(new Branch('1st and Pike', 23, 65, 6.3).genRow());
  displayTable.appendChild(new Branch('SeaTac Airport', 3, 24, 1.2).genRow());
  displayTable.appendChild(new Branch('Seattle Center', 11, 38, 3.7).genRow());
  displayTable.appendChild(new Branch('Capitol Hill', 20, 38, 2.3).genRow());
  displayTable.appendChild(new Branch('Alki', 2, 16, 4.6).genRow());
}

function storeSubmit(event){
  event.preventDefault();

  var form = event.target;

  var branchTitle = form.branchTitle.value;
  var minCust = parseInt(form.minCust.value);
  var maxCust = parseInt(form.maxCust.value);
  var avgCookies = parseInt(form.avgCookies.value);
  console.log(branchTitle);
  console.log(minCust);
  console.log(maxCust);
  console.log(avgCookies);

  var branch = new Branch(branchTitle, minCust, maxCust, avgCookies);
  document.getElementById('table-create').appendChild(branch.genRow());

  form.reset();
}

document.getElementById('store-create').addEventListener('submit', storeSubmit);

main();
