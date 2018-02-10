'use strict';

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Events', [
        {
          name: '1 подiя',
          description: 'Цю подію не забути ніколи ... Наш університет творить чудеса!',
          date: (new Date(2048, 10, 8)).toMysqlFormat(),
          picture: "http://www.immigrationnews.ca/wp-content/uploads/2017/07/students-retention-atlantic-canada.jpg"
        },
        {
          name: '2 подiя',
          description: 'Цю подію не забути ніколи ... Наш університет творить чудеса!',
          date: (new Date(2048, 10, 8)).toMysqlFormat(),
          picture: "http://www.ivg.it/photogallery_new/images/2018/01/patetta-euro-students-award-443473.660x368.jpg"
        },
        {
          name: '3 подiя',
          description: 'Супер подія у супер місці. Наш університет творить чудеса!',
          date: (new Date(2048, 10, 8)).toMysqlFormat(),
          picture: "https://si.wsj.net/public/resources/images/WE-AB093_EARNIN_P_20160323143657.jpg"
        },
        {
          name: '4 подiя',
          description: 'Магістерська програма навчання розпочата. Відбулося урочисте відкриття',
          date: (new Date(2048, 10, 8)).toMysqlFormat(),
          picture: "http://i.huffpost.com/gen/785659/thumbs/o-COLLEGE-TOURS-facebook.jpg"
        },
        {
          name: '5 подiя',
          description: 'Студенти відвідали ботанічний сад ... Наш університет творить чудеса!',
          date: (new Date(2011, 10, 7)).toMysqlFormat(),
          picture: "https://www.gapyear.com/images/advertiser_files/13976378039_305a9b9967_o.jpg"
        },
        {
          name: '6 подiя',
          description: 'Цю подію не забути ніколи ... Наш університет творить чудеса!',
          date: (new Date(2023, 8, 7)).toMysqlFormat(),
          picture: "https://www.qualquarter.co.za/wp-content/uploads/2015/06/3_student-group.jpg"
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
