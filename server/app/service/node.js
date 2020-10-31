const Service = require('egg').Service;

class NodeService extends Service {
  //获取我的笔记
  async getallnode(u_id) {
    // let uid = ctx.session.u_id;
    console.log();
    const results = await this.app.mysql.select('node', { // 搜索 post 表
      where: { u_id: u_id,status:'1'}, // WHERE 条件
      columns: ['n_id','nodetitle', 'imgs'], // 要查询的表字段
      orders: [['n_id','desc']], // 排序方式
    });
    return results;
  }
  //删除我的笔记
  async delnode(id){
    const row = {
      status: 0,
      modifiedAt: this.app.mysql.literals.now, // `now()` on db server
    };
    console.log(id);
    const options = {
      where: {
        n_id: id
      }
    };
    const results = await this.app.mysql.update('node',row,options);
    let result = ''
    if(results.affectedRows){
      result={
          code:1,
          msg:"删除成功"
      }
    }else{
      result={
        code:0,
        msg:"删除失败"
      }
    }
    return result;
  }

  //获取用户信息
  async gethead(u_id){

    const results = await this.app.mysql.select('user', { // 搜索 post 表
      where: { u_id:u_id}, // WHERE 条件
      columns: ['u_id','username', 'sexs','heads'], // 要查询的表字段
      orders: [['u_id','desc']], // 排序方式
    });
    return results;
  }

  //修改用户信息
  async updatauser(formdata){

    const row = {
      username:formdata.username,
      sexs:formdata.sexs,
      heads:formdata.heads,
      birthday:formdata.birthday,
      // modifiedAt: this.app.mysql.literals.now, // `now()` on db server
    };
    console.log(formdata.username);
    const options = {
      where: {
        u_id: formdata.uid
      }
    };
    const results = await this.app.mysql.update('user',row,options);
    let result = ''
    if(results.affectedRows){
      result={
          code:1,
          msg:"修改成功"
      }
    }else{
      result={
        code:0,
        msg:"修改失败"
      }
    }
    return result;
  }
  
}




module.exports = NodeService;