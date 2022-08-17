const xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();

xhr.responseType = "json"; //data format

xhr.onload = function displayResult()
{
    const countries = xhr.response;

console.log(countries);
console.log("No.ofcountries:",countries.length);
console.log("No.ofcountries:",countries[0].name.common);
var j = 1;

for(var i=0; i<countries.length; i++)
{
  console.log("    FLAGS      :",countries[i].flags.png);
}

};

