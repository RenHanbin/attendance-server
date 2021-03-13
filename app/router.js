'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 小程序路由
  router.post('/register', controller.users.register); // 用户注册
  router.get('/authortion', controller.users.authortion); // 用户登录
};
