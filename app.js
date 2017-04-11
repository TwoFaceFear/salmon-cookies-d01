'use strict';

var randomNumber;
var minCustomers;
var maxCustomers;
var avgCookies;
var totalCookies;
var cookiesPerHour;
var firstPike;
var seaTac;
var seaCenter;
var capHill;
var alki;

function randomNumber(minCustomers, maxCustomers) {
  minCustomers = Math.ceil(minCustomers);
  maxCustomers = Math.floor(maxCustomers);
  return Math.floor(Math.random() * (maxCustomers - minCustomers) + minCustomers);
}



firstPike = {
  minCustomers: 23;
  maxCustomers: 65;
  avgCookies: 6.3;
  cookiesPerHour: function() {
    return randomNumber(this.minCustomers, this.maxCustomers);
  }
}

seaTac = {
  minCustomers: 3;
  maxCustomers: 24;
  avgCookies: 1.2;
  cookiesPerHour: function() {
    return randomNumber(this.minCustomers, this.maxCustomers);
  }
}

seaCenter = {
  minCustomers: 11;
  maxCustomers: 38;
  avgCookies: 3.7;
  cookiesPerHour: function() {
    return randomNumber(this.minCustomers, this.maxCustomers);
  }
}

capHill = {
  minCustomers: 20
  maxCustomers: 38
  avgCookies: 2.3;
  cookiesPerHour: function() {
    return randomNumber(this.minCustomers, this.maxCustomers);
  }
}

alki = {
  minCustomers: 2;
  maxCustomers: 16;
  avgCookies:2.6;
  cookiesPerHour: function() {
    return randomNumber(this.minCustomers, this.maxCustomers);
  }
}
