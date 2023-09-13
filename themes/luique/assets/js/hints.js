

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
    title: '<h5 class="construction-label">This project is a work-in-progress!</h5>',
    text: `We're working hard to create an AWESOME resource for ALL ostomates. But awesomeness takes time, so it'll be a little while before we're ready to launch.<br><br> You can expect to fully engage with us by the 23rd of February, 2024!`,
    attachTo: {
      element: '.titles',
      on: 'right'
    },
    buttons: [
      {
        action() {
          return this.back();
        },
        classes: 'btn btn-tour-bck',
        text: 'Back'
      },
      {
        action() {
          return this.next();
        },
        classes: 'btn btn-tour-fwd',
        text: 'Next'
      }
    ],
    id: 'construction'
  });
  
  tour.start();
