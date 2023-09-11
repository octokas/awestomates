/**
*	Luique - Personal Portfolio HTML Template
*	Version: 1.0
*	Author: bslthemes
*	Author URL: http://themeforest.net/user/bslthemes
*	Copyright © Luique by bslthemes. All Rights Reserved.
**/


/**********************************
	Sheppard for Construction
***********************************/

const tour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      },
      classes: 'class-1 class-2',
      scrollTo: { behavior: 'smooth', block: 'center' }
    }
  });
  
  tour.addStep({
    title: '🐝 <strong>Website still under construction!</strong> 🐝',
    text: `Please pardon our dust as we continue building out this awesome ostomy resource.<br>We hope to have everything launched, and in working order by February of 2023.<br>Feel free to poke around in the meantime. 🐝<br><br>Should you need anything sooner, don't hesitate to email via awestomates@gmail! 🤓`,
    attachTo: {
      element: '.hero-example',
      on: 'bottom'
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'shepherd-button-secondary bts',
        text: 'Back'
      },
      {
        action() {
          return this.next();
        },
        text: 'Next'
      }
    ],
    id: 'construction'
  });
  
  tour.start();
  