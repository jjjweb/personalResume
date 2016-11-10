set names utf8;
drop database if exists web;
create database web charset=utf8;
use web;
#表一：
create table nav_left(
	id int primary key auto_increment,
	title varchar(64)
);
  insert into nav_left values(null,'HTML/CSS');
  insert into nav_left values(null,'JavaScript');
  insert into nav_left values(null,'Node.js');
  insert into nav_left values(null,'手机移动');
  insert into nav_left values(null,'前端安全');
  insert into nav_left values(null,'性能优化');
  insert into nav_left values(null,'类库框架');
  insert into nav_left values(null,'开发调试');
  insert into nav_left values(null,'浏览器');
  insert into nav_left values(null,'面试经验');
#表二：
create table nav_left1(
    id int primary key auto_increment,
	title varchar(64)
);
insert into nav_left1 values(null,'web前端');
insert into nav_left1 values(null,'web前端开发');
#表三：
create table new_notes_1(
  num int primary key auto_increment,
  content varchar(64)
);
insert into new_notes_1 values(null,'图片翻转动画');
insert into new_notes_1 values(null,'初始JavaScript的对象属性类型');
insert into new_notes_1 values(null,'坑码记录 _ _ 不断更新');
insert into new_notes_1 values(null,'一个小需求引起的无缝轮播组件');
insert into new_notes_1 values(null,'每天一点javascript系列__数据类型');
insert into new_notes_1 values(null,'初始JavaScript的对象属性类型');
insert into new_notes_1 values(null,'仿C3折角效果（二）');
insert into new_notes_1 values(null,'坑码记录 _ _ 不断更新');
insert into new_notes_1 values(null,'js事件大总结');
insert into new_notes_1 values(null,'极棒的jquery动画切换引擎插件');
insert into new_notes_1 values(null,'OOCSS(面向对象的CSS)');
insert into new_notes_1 values(null,'canvas——钟摆');
insert into new_notes_1 values(null,'在Ubuntu16.04上面配置node环境');
insert into new_notes_1 values(null,'简单的基于canvas的钟摆');
insert into new_notes_1 values(null,'简单的tab浏览模式');
insert into new_notes_1 values(null,'数据结构：图');
insert into new_notes_1 values(null,'JS原生基础轮播图');
insert into new_notes_1 values(null,'坑码记录 _ _ 不断更新');
insert into new_notes_1 values(null,'用vue做的cnodeJs社区和小程序版');
insert into new_notes_1 values(null,'canvas  放大镜');

#表四：
create table new_notes_2(
  num int primary key auto_increment,
  content varchar(64)
);
insert into new_notes_2 values(null,'Canvas模拟地球，月球公转');
insert into new_notes_2 values(null,'画板的实现拖动鼠标画画啦');
insert into new_notes_2 values(null,'函数函数函数函数');
insert into new_notes_2 values(null,'函数表达式的学习代码');
insert into new_notes_2 values(null,'JQ 3D 菜单');
insert into new_notes_2 values(null,'写一个gulp的理解');
insert into new_notes_2 values(null,'仿知乎点击显示更多内容');
insert into new_notes_2 values(null,'《$.each串联起来的知识点');
insert into new_notes_2 values(null,'先定一个小目标，做他一个天猫官网');
insert into new_notes_2 values(null,'纯js 逻辑飞机大战 改良版');
insert into new_notes_2 values(null,'坑码记录 _ _ 不断更新');
insert into new_notes_2 values(null,'一年前端职业生涯总结');
insert into new_notes_2 values(null,'每天一点javascript系列__数据类型');
insert into new_notes_2 values(null,'坑码记录 _ _ 不断更新');
insert into new_notes_2 values(null,'小需求引起的无缝轮播组件');
insert into new_notes_2 values(null,'每天一点javascript系列__数据类型');
insert into new_notes_2 values(null,'css做的立方体');
insert into new_notes_2 values(null,'坑码记录 _ _ 不断更新');
insert into new_notes_2 values(null,'万能的界面切换');
insert into new_notes_2 values(null,'tabSwiper 切换效果');

#表五：
create table recommend_notes(
  id int primary key auto_increment,
  img varchar(128),
  name varchar(32),
  title varchar(32),
  browse varchar(32),
  replay varchar(32),
  sorter varchar(32),
  content varchar(128)
);
insert into recommend_notes values(null,'images/person.gif','感迟','三年前端被撸是怎样的体验（三）','浏览：464','回复:4','分类：面试经验','接上一篇三年前端被撸是怎样的体验（二）文字有点长，请准备好西瓜，瓜子，耐心看。。。。接下来几天，就是无休止的找工作了。首先让同事帮忙自己推荐，看看有没有熟人的单位招人。还有，就是拉 ...');
insert into recommend_notes values(null,'images/a.jpg','非你不爱','JQ C3立体旋转木马 点击图片切换轮播图','浏览：464','回复:4','分类：JavaScript','大神们都有哪些前端框架及它们的优缺点？？？？？？ 大神们都有哪些前端框架及它们的优缺点？？？？？？ 大神们都有哪些前端框架及它们的优缺点？？？？？？');
insert into recommend_notes values(null,'images/b.jpg','花家小柒','大家都在企鹅妹妹，我就来个胖企鹅弟弟吧','浏览：464','回复:4','分类：HTML/CSS','做移动端网站，网页中元素的尺寸怎么设置。 我们平时做PC网站的时候，元素的尺寸都可以严格按照UI给我们的尺寸来做，因为PC网页不需要考虑适配额问题，但在移动端上采用air开发桌面或者移动程序还靠谱吗？现在还有使用air做开发的吗？');
insert into recommend_notes values(null,'images/c.jpg','Js_canves','JQ图片手风琴','浏览：464','回复:4','分类：JavaScript','有人说前端是门槛低，入门易，深造难，还真是，感觉要学的东西太多，每样都学一下，却每样都学不精，很纠结啊，到底前端该怎么学，大家给给意见啊，从事前端的你们有同样的感觉吗？我们也知道所有的对象都有原型，对象对应的原型以及父级原型里都会封装了很多API， 当我们不知道该对象有什么API的可以使用的时候');
insert into recommend_notes values(null,'images/d.jpg','tianxiaofeng747','JS原生一个小点名器，比较简单的那片','浏览：464','回复:4','分类：Javascript','Ajax-AsynchronousJavaScriptandXml 是实现客户端与服务器端异步交互的主要手段，主要使用在B/S架构上。 在浏览器中一般分为同步交互和异步交互两种交互模式');
insert into recommend_notes values(null,'images/e.jpg','44544','地形标签云','浏览：464','回复:4','分类：HTML/CSS','在别人的博客上面看到球形标签云，感觉特别炫酷，之后自己查资料学了一下，但由于网上的源码都没有解释，自己学了很久还是有几个地方不懂，现分享一下，共同理解html代码效果预览<!DOCTYPEhtml><htmllan ...');
insert into recommend_notes values(null,'images/f.jpg','TaylorPzreal','一年前端职业生涯总结','浏览：464','回复:4','分类：面试经验','步入前端已经一年了，是时候写个总结了。一个自不量力的承诺，我步入了前端。去年的10月份来到北京寻找工作，在面试中，总经理问我，能否仿照某网站做出一个官.刚开始学习js时并不知道什么事NaN,只是知道这个一个number类型到底是啥意思也不懂。 其实   NaN:notanumber不是一个数字 Infinity正无穷 -Infinity负无穷 ECMAScript  可以理解为javascript');
insert into recommend_notes values(null,'images/g.jpg','cylweb','万能的界面切换 -模板教程','浏览：464','回复:4','分类：JavaScript','或者可查看我写的最新版的利用JQ来写的界面切换---笔记名为"封装切换页面的框架",可查看这个,最新的这个可当做框架使用html代码效果.转眼间就是做了快半年的前端了，进步是有的，但是各种局限也是有的。 买了的书放在家里一层灰，电脑里的学习视频也看不完，这个十月份公司几乎没有事做。 这样下去，再过一年，怎么去闯。');

#表六：
create table joins(
    id int primary key auto_increment,
    img varchar(128),
    title varchar(32),
    content varchar(128)
);
insert into joins values(null,'images/s.jpg','#给1年后的自己立个目标！#','已有10717人参与');
insert into joins values(null,'images/ss.jpg','#闲聊奥运，我也说说奥运！#','已有6058人参与');
insert into joins values(null,'images/p-1_38.jpg','#你是怎么跟老板讨价还价的！#','已有4592人参与');
insert into joins values(null,'images/p-1_41.jpg','#毕业生如何选择自己的方向！#','已有3580人参与');
insert into joins values(null,'images/p-1_43.jpg','#你所见过的最坑或更坑代码！#','已有3580人参与');

#表七：
create table perfect_course(
    id int primary key auto_increment,
    img varchar(128),
    title varchar(32),
    content varchar(128)
);
insert into perfect_course values(null,'images/p-1_48.jpg','S课程两周成为JS大师','例实战为主，案例均出自老师编码经验以及在名企开发 经验，跟着老师总结分析安全，逐步引导并拓展思路，绝不纸上谈兵！');
insert into perfect_course values(null,'images/p-1_51.jpg','前端面试秘籍》，秒杀面试！','课程中95%是名企面试真题剖析，直攻面试题目软肋，剩下5%主要解决非技术性问题，如：简历如何写，学历不够怎么办等！');
insert into perfect_course values(null,'images/p-1_53.jpg','人人都能成为jQuery大师','全球排名前10万的站点，超过70%的站点都在使用jQuery，如果再不学习jQuery，你真的要落后啦！');
#注册表
create table web_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  umail VARCHAR(128)
);
insert into web_user values
(null,'jijingjing','123456','1804005485@qq.com');

select * from nav_left;
select * from nav_left1;
select * from new_notes_1;
select * from new_notes_2;
select * from recommend_notes;
select * from joins;
select * from perfect_course;
select * from web_user;