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
    console.log(j++,'NAME       :',countries[i].name.common);
    console.log("    REGION     :",countries[i].region);
    console.log("    SUBREGION  :",countries[i].subregion);
    console.log("    POPULATION :",countries[i].population);
}

};

