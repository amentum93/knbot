const kb = require('./keyboard-buttons')

module.exports = {
  home: [
    [kb.home.films],
    [kb.home.cinemas]
   /* [kb.home.favourite]*/
  ],

  cinemas: [
    [
      {
        text: 'Расстояние до ближайшего кинотеатра',
        request_location: true
      }
    ],
    [kb.back]
  ],

  /* nights: [
      [kb.nights.films],
     /* [kb.nights.ticketsmsk, kb.nights.ticketsspb],  
     [kb.back]
  ], */

  films: [
    [kb.film.random]
    ]
}
