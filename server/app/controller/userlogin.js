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
  
  // async reg() {
  //   const { ctx } = this;
  
  // 	ctx.body=await this.ctx.service.user.reg(ctx.request.body);
  
  	
  // }
  
  
  

}

module.exports = UserController;
