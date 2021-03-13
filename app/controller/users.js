const Controller = require('egg').Controller;

const Result = require('../util/result');

class UsersController extends Controller {
  async authortion() {
    const { ctx } = this;
  }
  async register() {
    const { ctx } = this;
  }
}

module.exports = UsersController;
