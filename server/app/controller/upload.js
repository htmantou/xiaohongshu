'use strict';
const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;

class UploadController extends Controller {

    async index() {
        const { ctx } = this;
        let file = ctx.request.files[0];
        let dest = path.dirname(__dirname) + '/public/uploads/' + path.basename(file.filepath);
        fs.copyFileSync(file.filepath, dest);
        let cc = this.app.config.cluster.listen;
        let imgurl = `http://${cc.hostname}:${cc.port}/public/uploads/${path.basename(file.filepath)}`;
        ctx.body = { imgurl };
    }
    async indexs() {
        const { ctx } = this;
        let data = {
            "errno": 0,
            "data": []
        }
        ctx.request.files.forEach(function (file) {
            let dest = path.dirname(__dirname) + '/public/uploads/' + path.basename(file.filepath);
            fs.copyFileSync(file.filepath, dest);
            let cc = this.app.config.cluster.listen;
            let imgurl = `http://${cc.domain}:${cc.port}/public/uploads/${path.basename(file.filepath)}`;
            data.data.push(imgurl)
        })
        ctx.body = data;

    }
}

module.exports = UploadController;
