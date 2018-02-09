'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Pictures', [
        {
          path: 'http://i1-news.softpedia-static.com/images/news2/Picture-of-the-Day-Real-Life-Simba-and-Mufasa-Caught-on-Camera-in-Tanzania-392687-2.jpg',
          event_id: 1
        },
        {
          path: 'https://twistedsifter.files.wordpress.com/2016/07/dulmen_bornste_waldweg.jpg',
          event_id: 1
        },
        {
          path: 'http://i.telegraph.co.uk/multimedia/archive/03597/POTD_chick_3597497k.jpg',
          event_id: 2
        },
        {
          path: 'https://twistedsifter.files.wordpress.com/2017/03/point-reyes-shipwreck.jpg',
          event_id: 2
        },
        {
          path: 'http://www.qygjxz.com/data/out/179/5059473-picture.jpg',
          event_id: 2
        },
        {
          path: 'http://webneel.com/daily/sites/default/files/images/daily/05-2014/12-sunrise-picture.jpg',
          event_id: 3
        },
        {
          path: 'http://www.theamazingpics.com/wp-content/uploads/2014/05/Amazing-Picture-of-A-Japanese-Garden-in-Portland-USA.jpg',
          event_id: 3
        }
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pictures', null, {});
  }
};
