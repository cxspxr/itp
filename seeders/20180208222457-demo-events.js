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
          name: 'Event',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt veritatis sunt aliquam pariatur similique sint sit saepe. Quia dicta commodi nobis inventore numquam atque accusamus itaque facere, debitis architecto provident.',
          date: (new Date(2011, 10, 7)).toMysqlFormat(),

        },
        {
          name: 'Another event',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis, nobis similique. Dolorum assumenda facere inventore, voluptates iste veritatis aut quae nisi voluptatibus, aspernatur a magni quasi, illum eveniet, nam?',
          date: (new Date(2048, 10, 8)).toMysqlFormat()
        },
        {
          name: 'Third Event',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque assumenda sapiente est obcaecati distinctio facere dolorem pariatur suscipit, quas libero ipsum. Eius saepe autem, voluptatibus veritatis quae explicabo nisi soluta.',
          date: (new Date(2023, 8, 7)).toMysqlFormat()
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
