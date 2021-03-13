const Service = require('egg').Service;

class UsersService extends Service {
  async authortion() {
    const { ctx } = this;
  }
  async register() {
    const { ctx } = this;
  }
}

module.exports = UsersService;
