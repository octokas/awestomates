---
title: "FAQs Before Surgery"
date: 2024-01-07T19:24:30-05:00
description: ""
lead: ""
summary: ""
date: 2024-01-07T19:24:30-05:00
lastmod: 2024-01-07T19:24:30-05:00
draft: false
images: []
tags: ["faqs", "before", "before surgery", "assessment"]
contributor: ["Kaska Miskolczi"]
ShowReadingTime: true
---

<span class="faqs-prompt">Please select your procedure to be matched with appropriate resources.</span>

<table id="faqs-before">
  <tr>
    <td align="center">
      <figure>
        <img id="urostimage" class="faq-reps" src="https://placekitten.com/300/300" alt="urostomy representation" />
        <figcaption><button class="urostomy"> Urostomy </button></figcaption>
      </figure>
    </td>
    <td align="center">
      <figure>
        <img id="illeostimage" class="faq-reps" src="https://placekitten.com/300/300" alt="illeostomy representation" />
        <figcaption><button class="illeostomy"> Illeostomy </button></figcaption>
      </figure>
    </td>
    <td align="center">
      <figure>
        <img id="colostimage" class="faq-reps" src="https://placekitten.com/300/300" alt="colostomy representation" />
        <figcaption><button class="colostomy"> Colostomy </button></figcaption>
      </figure>
    </td>
  </tr>
</table>

<em>Please remember, we can only offer the most basic typical to what can be commonly expected in these surgical procedures and the start of most peoples' ostomy journey. We cannot realistically, nor do we claim, to provide detailed medical advice for every unique situation. 

Because the most authoritative source of information for any specific situation is your doctor/surgeons office; Should you require additional support, we strongly recommend you do everything possible to have your unique questions answered by your medical provider(s) or care team.</em>


<!-- All links open in new window script -->
<script type="application/javascript">
  (function() {
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    if (/^(https?:)?\/\//.test(links[i].getAttribute('href'))) {
      links[i].target = '_blank';
    }
  }
})();
</script>

<!-- On Mouseover of button add some flare to the figure image -->
<script type="application/javascript">
  const urostomy = document.querySelector('button.urostomy');
  const urostimage = document.querySelector('#urostimage');

  const illeostomy = document.querySelector('button.illeostomy');
  const illeostimage = document.querySelector('#illeostimage');

  const colostomy = document.querySelector('button.colostomy');
  const colostimage = document.querySelector('#colostimage');

  urostomy.onmouseover = function(){
      urostimage.className -= ' faq-reps';
      urostimage.className += ' urostimage';
    }
  urostomy.onmouseout = function(){
      urostimage.className -= ' urostimage';
      urostimage.className += ' faq-reps';
    }

  illeostomy.onmouseover = function(){
      illeostimage.className -= ' faq-reps';
      illeostimage.className += ' illeostimage';
    }
  illeostomy.onmouseout = function(){
      illeostimage.className -= ' illeostimage';
      illeostimage.className += ' faq-reps';
    }

  colostomy.onmouseover = function(){
      colostimage.className -= ' faq-reps';
      colostimage.className += ' colostimage';
    }
  colostomy.onmouseout = function(){
      colostimage.className -= ' colostimage';
      colostimage.className += ' faq-reps';
    }
</script>
