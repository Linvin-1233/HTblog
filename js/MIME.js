const express = require('express');
const app = express();
// 将 public 文件夹下的所有静态资源（包括 .css）公开
app.use(express.static('public'));
