const Service = require('egg').Service;

class UserService extends Service {
	//登录
	async login(data) {
		console.log(data)
		let result = await this.app.mysql.query(`select *  from user where username='${data.name}'`);
		console.log(result)
		if (result.length < 1) {
			return {
				code: 0,
				msg: "用户不存在"
			}
		} else {
			if (data.password == result[0].passwd) {
				return {
					code: 1,
					msg: "恭喜您，登陆成功"
				}
			} else {
				return {
					code: 0,
					msg: "密码错误"
				}
			}
		}
	}
	//注册
	async reg(data) {
		let result1 = await this.app.mysql.query(`select *  from user where username='${data.name}'`);
		console.log(result1)
		if (result1.length > 0) {
			return {
				code: 0,
				msg: "注册失败,用户名已存在"
			}
		} else {
			let result = await this.app.mysql.insert('user', {
				username: data.name,
				tel: data.tellphone,
				sexs: data.gender,
				passwd: data.password
			})
			console.log(result)
			if(result){
				return {
					code: 1,
					msg: "注册成功"
				}
			}

			
		}


		// const result = await this.app.mysql.insert('user', data);
	}
}






module.exports = UserService;
