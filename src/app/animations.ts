import { trigger, transition, state, style, animate } from '@angular/animations';

export let fade = trigger('fade', [

  state('void', style({ opacity: 0 })),

  transition(':enter', [
    // style({ backgroundColor: 'yellow', opacity: 0 }),
    // style({ opacity: 0 }),
    // animate(2000, style({ backgroundColor: 'white', opacity: 1 }))
    animate(4000)
  ])
]);