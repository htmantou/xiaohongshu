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
  
  //我的笔记获取接口
  router.get('/getallnode',controller.user.index)

  //我的笔记删除接口
  router.post('/delnode',controller.user.indexs)

  //获取用户头像及信息
  router.get('/getheader',controller.user.getheader)
  
  //登录
  
  router.get('/getalltag',controller.node.index)
  router.post('/publishnode',controller.node.addnode)

  router.post('/userlogin',controller.userlogin.login)
  // 注册
  router.post('/userreg',controller.userreg.reg)
  


};
