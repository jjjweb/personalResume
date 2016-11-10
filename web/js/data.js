/*功能点：异步请求当前登录用户的购物车内容*/
$(function(){
	$.ajax
	({	url:'php/nav_left.php',
		success:function(List){
			//遍历购物车详情列表，拼接HTML片段
			var html='';
			$.each(List,function(i,d){
				html +=`
						<li>${d.title}</li>`;
			});
			$('#nav div.list ul.details').html(html);
		}
	});

	$.ajax
	({	url:'php/nav_left1.php',
		success:function(List){
			//遍历购物车详情列表，拼接HTML片段
			var html='';
			$.each(List,function(i,d){
				html +=`
				<li>${d.title}</li>
						`;
			});
			$('#nav div.list ul.details-1').html(html);
		}
	});

	$.ajax
	({	url:'php/new-notes-1.php',
		success:function(List){
			//遍历购物车详情列表，拼接HTML片段
			var html='';
			$.each(List,function(i,d){
				html +=`
				<li><a>${d.num}</a>${d.content}</li>
						`;
			});
			$('#main .main-left .new-notes-1').html(html);
		}
	});

	$.ajax
	({	url:'php/new-notes-2.php',
		success:function(List){
			//遍历购物车详情列表，拼接HTML片段
			var html='';
			$.each(List,function(i,d){
				html +=`
				<li><a>${d.num}</a>${d.content}</li>
						`;
			});
			$('#main .main-left .new-notes-2').html(html);
		}
	});

	$.ajax
	({	url:'php/recommend_notes.php',
		success:function(List){
			//遍历购物车详情列表，拼接HTML片段
			var html='';
			$.each(List,function(i,d){
				html +=`
				<div class="second">
				<img src="${d.img}" alt="">
				<div class="first1">
				<a href="#" class="first1-name">${d.name}</a>
				<a href="#" class="first1-detail">${d.title}</a>
					<ul>
						<li>${d.browse}</li>
						<li>${d.replay}</li>
						<li class="fenlei">${d.sorter}</li>
					</ul>
					</div>
					<div class="first2">
						<p>${d.content}</p>
					</div>
					</div>
						`;
			});
			$('.main-middle .recommend-notes').html(html);
		}
	});

	$.ajax
	({	url:'php/joins.php',
		success:function(List){
			//遍历购物车详情列表，拼接HTML片段
			var html='';
			$.each(List,function(i,d){
				html +=`
				<div class="first">
						<img src="${d.img}" alt="">
						<p>${d.title}</p>
						<button>${d.content}</button>
				</div>
						`;
			});
			$('.main-right .join').html(html);
		}
	});

	$.ajax
	({	url:'php/perfect-course.php',
		success:function(List){
			//遍历购物车详情列表，拼接HTML片段
			var html='';
			$.each(List,function(i,d){
				html +=`
				<div class="excellent-course">
			<img src="${d.img}" alt="">
			<a href="#">${d.title}</a>
			<p>${d.content}</p>
		</div>
						`;
			});
			$('.main-right .perfect_course').html(html);
		}
	});
});



