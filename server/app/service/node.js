const Service = require('egg').Service;

class NodeService extends Service {
<<<<<<< HEAD
  //获取我的笔记
  async getallnode() {
    // let uid = ctx.session.u_id;
    const results = await this.app.mysql.select('node', { // 搜索 post 表
      where: { u_id: '1',status:'1'}, // WHERE 条件
      columns: ['n_id','nodetitle', 'imgs'], // 要查询的表字段
      orders: [['n_id','desc']], // 排序方式
    });
    return results;
  }
  //删除我的笔记
  async delnode(id){
    const row = {
      status: 0,
      // modifiedAt: this.app.mysql.literals.now, // `now()` on db server
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
  async gethead(){
    // let uid = ctx.session.u_id;
    const results = await this.app.mysql.select('user', { // 搜索 post 表
      where: { u_id: '1'}, // WHERE 条件
      columns: ['u_id','username', 'sexs','heads'], // 要查询的表字段
      orders: [['u_id','desc']], // 排序方式
    });
    return results;
  }
  
=======
  async getalltag() {
    const results = await this.app.mysql.select('tag', { // 搜索 post 表
      columns: ['t_id', 'tagname'], // 要查询的表字段
    });
    return results;
  }
  async addnode(formdata) {
    const result = await this.app.mysql.insert('node', {
      nodetitle: formdata.nodetitel,
      imgs: formdata.imgs,
      content: formdata.content,
      video: formdata.video
    }); // 在 post 表中，插入 title 为 Hello World 的记录
    console.log(result)
    return result
  }
  async addtnode(taglist, nid) {
    console.log(nid)
    taglist.forEach((item, index) => {
      this.app.mysql.insert('tnode', {
        t_id: item,
        n_id: nid,
      }); // 在 post 表中，插入 title 为 Hello World 的记录
    })
  }
>>>>>>> d12080ef47ecc419ccd6f9e8699966c347c41a58
}




module.exports = NodeService;