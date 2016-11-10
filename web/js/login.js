//$('div#top').on('click','#bt-loginn',function(){
//	$('.modal').fadeIn(500);
//});
$('#bt-login').click(function(e){
	//读取用户的输入——表单序列化
	e.preventDefault();
	var inputData = $('#login-form').serialize();
	//异步提交请求，进行验证
	$.ajax({
		type: 'POST',
		url: 'php/login.php',
		data: inputData,
		success: function(txt, msg, xhr){
			console.log(123);
			if(txt=='ok'){  //登录成功
				$('.modal').fadeOut(300);
				var loginName = $('[name="uname"]').val();
				console.log(loginName);
				sessionStorage['loginName']=loginName;
				$('.welcome').html('欢迎回来：'); //修改页头上的欢迎消息
				$('#bt-loginn>a').html(sessionStorage['loginName']);
				$('#bt-loginn>a').css('color','#CBCBCB').css('margin-left','-20px');
				$('.register').css('display','none');

			}else { //登录失败
				$('.modal .alert').html('用户名不存在或密码错误，请重新登录！');
				$('.modal .alert').css('text-align','center');

			}
		}
	});
});