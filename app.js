'use strict';

var randomNumber;
var minCustomers;
var maxCustomers;
var avgCookies;
var totalCookies
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
  minCustomers = 23;
  maxCustomers = 65;
  avgCookies = 6.3;
}

seaTac = {
  minCustomers: 3;
  maxCustomers: 24;
  avgCookies: 1.2;
}

seaCenter = {
  minCustomers: 11;
  maxCustomers: 38;
  avgCookies: 3.7;
}

capHill = {
  minCustomers: 20
  maxCustomers: 38
  avgCookies: 2.3;
}

alki = {
  minCustomers: 2;
  maxCustomers: 16;
  avgCookies:2.6;
}
