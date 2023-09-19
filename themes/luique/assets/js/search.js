
//import jsonContent from "./search/faqs.json" assert { type: "json" };
//var jsonContent = fetchJSONFile("../plugins/search/faqs.json");
//console.log(jsonContent);

// ==========================================
// fetch some json without jquery
//
function fetchJSONFile(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
          if (callback) callback(data);
      }
    }
  };
  httpRequest.open('GET', path);
  httpRequest.send();
}

fetchJSONFile('/plugins/search/content.json', function(data){console.log(data)});
var codesEl;
var jsonData = [
  {
    "name": "FAQ Question #1",
    "code": "More information coming soon...",
    "tag": "faq-tag",
    "more": ""
  },
  {
    "name": "FAQ Question #2",
    "code": "We're working on a really thorough answer to this FAQ question.",
    "tag": "faq-tag",
    "more": "Read more >>"
  },
  {
    "name": "flipkart",
    "code": "kjqwherklq",
    "tag": "faq-tag",
    "more": ""
  },
  {
    "name": "flipkart",
    "code": "qmbewnqbwe",
    "tag": "faq-tag",
    "more": ""
  },
  {
    "name": "flipkart",
    "code": "zzvzxcvvnmz",
    "tag": "faq-tag",
    "more": ""
  },
  {
    "name": "ebay",
    "code": "tyjutynf",
    "tag": "faq-tag",
    "more": ""
  },
  {
    "name": "ebay",
    "code": "asgcmngjhjser",
    "tag": "faq-tag",
    "more": ""
  }
];

function printData(Arr) {
  for(var i=0; i<Arr.length; i++) {
    if (`${Arr[i].more}` !== "") {
      console.log(`read more for ${Arr[i].name} is not empty`);
    }
    codesEl.innerHTML += `<div class="faqR"><h5 class="faqQ">${Arr[i].name}</h5><p class="faqA">${Arr[i].code}</p><a target="_blank" href="/tags/#${Arr[i].tag}"><span class="faqT">${Arr[i].tag}</span></a></div>`;
  }
}

// it is a case insensitive search
function search(ev) {
  var key = ev.target.value;
  codesEl.innerText = null;
  
  printData(data.filter((data)=>{
    var regex = new RegExp(key, "i");
    return data.name.match(regex)|| data.code.match(regex);
  }));
}

(function(){
  codesEl = document.getElementById("codes");
  printData(fetchJSONFile('/plugins/search/content.json', function(data){console.log(data)}));
 })();

// window.onload = function() {
//   codesEl = document.getElementById("codes");
//   printData(deets);
// }
