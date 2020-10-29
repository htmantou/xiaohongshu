// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUpload = require('../../../app/controller/upload');
import ExportUserlogin = require('../../../app/controller/userlogin');

declare module 'egg' {
  interface IController {
    upload: ExportUpload;
    userlogin: ExportUserlogin;
  }
}
