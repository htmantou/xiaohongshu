'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 单文件上传
  router.post('/upload', controller.upload.index)
  // 多文件上传
  router.post('/uploads', controller.upload.indexs)
  //登录
  
  router.post('/userlogin',controller.userlogin.login)
  // 注册
  router.post('/userreg',controller.userreg.reg)
  


};
