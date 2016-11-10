/**
 * Created by J on 2016/10/29.
 */
//功能一：
$(function(){
  $('#top').load('php/header.php');
  $('#footer').load('php/footer.php');
});
//功能二：
/*1.对用户名进行验证*/
uname.onblur = function(){
  if(this.validity.valueMissing){
    this.nextElementSibling.innerHTML = '用户名不能为空!';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('用户名不能为空');
  }else if(this.validity.tooShort){
    this.nextElementSibling.innerHTML = '用户名不能少于6位!';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('用户名不能少于6位');
  }else {
    this.nextElementSibling.innerHTML=' ';
    this.nextElementSibling.className = 'msg-success';
  }
}
uname.onfocus = function(){
  this.nextElementSibling.innerHTML = '用户名长度在6到9位之间!';
  this.nextElementSibling.className = 'msg-default';
}

/*2.对密码格式进行验证*/
upwd.onblur = function(){
  if(this.validity.valueMissing){
    this.nextElementSibling.innerHTML = '密码不能为空';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('密码不能为空');
  }else if(this.validity.tooShort){
    this.nextElementSibling.innerHTML = '密码不能少于8位';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('密码不能少于8位');
  }else {
    this.nextElementSibling.innerHTML=' ';
    this.nextElementSibling.className = 'msg-success';
  }
}
upwd.onfocus = function(){
  this.nextElementSibling.innerHTML = '密码长度在8到12位之间';
  this.nextElementSibling.className = 'msg-default';
}

/*3.对邮箱地址进行验证*/
umail.onblur = function(){
  if(this.validity.valueMissing){
    this.nextElementSibling.innerHTML = '邮箱不能为空';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('邮箱不能为空');
  }else if(this.validity.typeMismatch){
    this.nextElementSibling.innerHTML = '邮箱格式不正确';
    this.nextElementSibling.className = 'msg-error';
    this.setCustomValidity('邮箱格式不正确');
  }else {
    this.nextElementSibling.innerHTML=' ';
    this.nextElementSibling.className = 'msg-success';
  }
}
umail.onfocus = function(){
  this.nextElementSibling.innerHTML = '请输入合法的邮箱地址';
  this.nextElementSibling.className = 'msg-default';
}
//功能三：点击注册按钮，异步验证登录信息
$('#bt-register').click(function(e){
  e.preventDefault();
  //表单序列化——获取所有的用户输入
  var inputData = $('#register-form').serialize();
  console.log(inputData);
  //异步提交请求，进行验证
  $.ajax({
    type: 'POST',
    url: 'php/register.php',
    data: inputData,
    success: function(result){
      console.log('开始处理服务器端返回的注册结果');
      //console.log(result);
      if(result.msg==='succ'){
        alert('注册成功！');
        location.href='web.html';
      }else {
        alert('注册失败！')
      }
    }
  });
})