import { trigger, state, style, transition, animate, query, stagger } from "@angular/animations";

export let fade = trigger('fade', [

      state('void', style({opacity: 0})),

      transition('void => *', [
        animate(200)
      ]),
])

export let staggerFade = trigger('stagger', [
    transition('* <=> *', [
        query(
            'enter:',[
                style({opacity: 0, transform: 'translateY(-15px)'}),
                stagger(
                    '50ms',
                    animate(
                        '550ms ease-out',
                        style({opacity: 1, transform: 'translateY(0px'})
                    )
                )
            ],
            {optional: true}
        ),
        query('leave', animate('50ms', style({opacity: 0})), {
            optional: true
        })
    ])
])
  