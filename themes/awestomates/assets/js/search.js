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
  
  printData(jsonData.filter((data)=>{
    var regex = new RegExp(key, "i");
    return data.name.match(regex)|| data.code.match(regex);
  }));
}

window.onload = function() {
  codesEl = document.getElementById("codes");
  printData(jsonData);
}
