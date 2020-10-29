'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
	//登录
  async login() {
    const { ctx } = this;
	let data = ctx.request.body
	console.log(data)
	ctx.body = await ctx.service.user.login(data);

	
  }
  
  
  
  

}

module.exports = UserController;
