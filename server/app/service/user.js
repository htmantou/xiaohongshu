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
}



module.exports = UserService;
