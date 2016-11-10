/*功能点：广告图片数组*/
var imgs=[
	{"i":0,"img":"images/p-0.jpg"},
    {"i":1,"img":"images/p-1.png"},
    {"i":2,"img":"images/p-3.jpg"},
    {"i":3,"img":"images/p-4.jpg"},
];

var slider={
		LIWIDTH:0,//保存每个li的宽度，其实就是#slider的宽度
		DURATION:1000,//动画的总时间
		WAIT:2000,//自动轮播之间的等待时间
		timer:null,//保存一次性定时器序号
		init:function(){
			this.LIWIDTH=parseFloat( //只要带数字单位，都要用paseFloat去单位
				$("#nav .slider .img").css("width")
		);
		this.updateView();
		//为id为indexs的ul添加鼠标进入事件代理，只有不是hover的li才能响应事件
		$("#nav ul.dotarea").on("mouseover","li:not(.hover)",function(e){
			//获得目标元素$target
			var $target=$(e.target);
			//调用move方法，传入要移动的个数s
			this.move($target.html()
					-$target.siblings(".hover").html());
		}.bind(this));
		//当鼠标进入#slider时，将canAuto改为false
		//当鼠标移出#slider时，将cnaAuto改为true
		$("#nav .img").hover(
			function(){this.canAuto=false;}.bind(this),	
			function(){this.canAuto=true;}.bind(this)
		);
		this.autoMove();
	},
	//启动自动轮播
	autoMove:function(){
		//启动一次性定时器
		this.timer=
			setTimeout(function(){
				if(this.canAuto)
					this.move(1);//移动一个
				else
					this.autoMove();//继续等待
			}.bind(this),
			this.WAIT
		);
	},
	move:function(n){
		//停止一次性定时器
		clearTimeout(this.timer);
		this.timer=null;
		//停止动画，防止叠加
		$("ul.imgs").stop(true);
		//获得#imgs当前的left，转为浮点数
		var left=parseFloat($("ul.imgs").css("left"));
		//如果n<0,右移，先改数组，再移动
		if(n<0)	
		{	//将n转为正数 
			n*=-1;
			//先删除结尾的n个元素，拼接到开头
			imgs=
				imgs.splice(imgs.length-n,n).concat(imgs);
			//更新界面
			this.updateView();
			//修改#imgs的left为left-n*LIWIDTH
			$("ul.imgs").css("left",left-n*this.LIWIDTH);
			//启动动画，在DURATION时间内，left移到到0
			$("ul.imgs").animate(
				{left:"0"},
				this.DURATION,
				this.autoMove.bind(this)
			);
		}
		//否则，左移，先移动，再改数组 
		else	
		{	//让#imgs的ul在DURATION事件内，left变为-n*LIWIDTH
			$("ul.imgs").animate(
				{left:-n*this.LIWIDTH+"px"},
				this.DURATION,
				//在动画结束后调用endMove,替换this,传入参数n
				this.endMove.bind(this,n)
			);
		}
	},
	endMove:function(n){
		//删除imgs数组开头的n个元素,再拼到结尾
		imgs=imgs.concat(imgs.splice(0,n));
		//更新页面
		this.updateView();
		//设置#imgs的left为0
		$("ul.imgs").css("left",0);
		//启动自动轮播
		this.autoMove();
	},
	//将数组中的元素更新到页面
	updateView:function(){
		//遍历imgs数组中每个图片对象,同时声明空字符串html
		for(var i=0,html="",idxs="";i<imgs.length;i++)
		{	html+="<li><img src='"+imgs[i].img+"'></li>";
			idxs+="<li>"+""+"</li>";
		}
		//设置id为imgs的内容为html,再设置其宽为LIWIDTH*imgs的元素的个数 
		$("ul.imgs").html(html)
				  .css("width",this.LIWIDTH*imgs.length);
		//设置id为indexs的内容为idxs
		$("#nav .slider .dotarea").html(idxs);
		//获得#indexs下的和imgs中第一个元素的i属性对应的li，设置其class为hover,选择兄弟中的class为hover的li，清除其class
		$("#nav .slider .dotarea>li:eq("+imgs[0].i+")").addClass("hover")
										 .siblings(".hover")
										 .removeClass("hover");
	}
}
slider.init();

