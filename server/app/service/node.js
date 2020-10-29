const Service = require('egg').Service;

class NodeService extends Service {
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
}




module.exports = NodeService;