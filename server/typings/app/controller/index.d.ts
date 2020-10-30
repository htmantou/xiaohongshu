// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportNode = require('../../../app/controller/node');
import ExportUpload = require('../../../app/controller/upload');
import ExportUserlogin = require('../../../app/controller/userlogin');
import ExportUserreg = require('../../../app/controller/userreg');

declare module 'egg' {
  interface IController {
    node: ExportNode;
    upload: ExportUpload;
    userlogin: ExportUserlogin;
    userreg: ExportUserreg;
  }
}
