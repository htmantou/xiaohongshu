'use strict';
const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;

class NodeController extends Controller {

    async index() {
        const { ctx } = this;
        let result = await ctx.service.node.getalltag()
        ctx.body=result;
      
    }
    async addnode() {
        const { ctx } = this;
        console.log(ctx.request.body)
        let result=await ctx.service.node.addnode(ctx.request.body)
        // let result = await ctx.service.node.getalltag()
        console.log('123',result.insertId)
        await ctx.service.node.addtnode(ctx.request.body.taglist,result.insertId)
        ctx.body=result;
    }
}

module.exports = NodeController;
