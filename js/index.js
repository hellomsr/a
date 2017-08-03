//吸顶效果
$(function(){
	$(window).scroll(function(){
//	$(window).on('scroll',function(){//两种书写方式 1,直接写.scroll  2.用on来表示
		//获取当前滚动条 scrollTop() 滚动的距离
			$(window).scrollTop();
		if( $(window).scrollTop() > 90 ){
			//滚 过头了，现在要把.search 固定定位。 加一个类 .fixed
			$(".search").addClass("fixed");
		}
		else{
			//滚 回来了，现在要把.search 固定定位 取消。 去掉类 .fixed
			$(".search").removeClass("fixed");
		}
		console.info(Date.now()+'--'+$(window).scrollTop())
	})
})
				//logo搜索区域选项卡切换
$(function(){
	
	$(".tabitem").click(function(){
		//如果现在处于固定导航的状态，则把当前项放在最前面去
		if($(".search").hasClass("fixed") ){
			$(".tab").prepend( this );
		}
//		$(".tab").append( this );
	})
	
	
	$(".baobei").click(function(){
		//给自己加 on这个类，把兄弟的on去掉
		$(this).addClass("on").siblings().removeClass("on");
		
		//更改form的背景色
		$(".form").css("background-color","#f40")
		//对应的keywords中的内容显示
		$(".hotwords p").hide().eq(0).show();
	});
	$(".tianmao").click(function(){
		//给自己加 on这个类，把兄弟的on去掉
		$(this).addClass("on").siblings().removeClass("on");
		
		$(".form").css("background-color","#c60000")
		$(".hotwords p").hide().eq(1).show();
	})
	
	$(".dianpu").click(function(){
		//给自己加 on这个类，把兄弟的on去掉
		$(this).addClass("on").siblings().removeClass("on");
		
		$(".form").css("background-color","#f40")
		$(".hotwords p").hide().eq(2).show();
		//$(this).addClass("on");
	})
})

///、、、、、、、、、、、、大轮播图、、、、、、、/////
$(function(){
	var currentIndex=1;  //当前显示的是第几张
	var timer;        //定时器
	
	goto(currentIndex);  //给轮播图做一个初始化
	autoPlay();    //启动定时播放
	//去得到第yourIndex张图
	function goto(yourIndex){
		//跟新slider-body的left值  这个过程一般用animate来实现
		$('.slider1 .slider-body').stop(true).animate({'left':yourIndex*-1*520},2000,function (){

			if(yourIndex==0){
				//alert('准备开始瞬间移动')
				//瞬间移动，把ul的位置移动到安全的状态
				$('.slider1 .slider-body').css('left',5*-1*520);
				currentIndex=5;  //真实序列中有效图片的张数
				console.info('移动结束');
			}
			else if(yourIndex==6){//6是真实有效图片的张数+1
				console.info('到最后了，准备瞬移');
				//瞬间移动，把ul的位置移动到安全的状态
				$('.slider1 .slider-body').css('left',1*-1*520);
				$('.slider1 .idx').eq(0).addClass('on').siblings().removeClass('on');
				currentIndex=1;
			}
			console.info('动画结束'+yourIndex);
		});
		//更改指示条的状态
		$('.slider1 .idx').eq(yourIndex-1).addClass('on').siblings().removeClass('on');
	}
	$('.slider1 ,btnleft').click(function(){
		if($('.slider1 .slider-body').is(':animated') ){
			console.info('还没完');
			return;
		}
		//上一张
		currentIndex=currentIndex-1;
		goto(currentIndex);
	});
	$('.slider1 .btnright').click(function(){
		if($('.slider1 .slider-body').is(':animated') ){
			console.info('还没完');
			return;
		}
//		/下一张
		currentIndex=currentIndex+1;
		goto(currentIndex);
	})
	$('.slider1 .idx').click(function(){
		var i=$(this).index();//档期内是第几个指示灯 被点亮
		goto(i+1);
		console.info(i);
	})

//////////、、、、、、、、、、、、//////////自动播放
//封装的
	function autoPlay(){
		timer=setInterval(function(){
			//模拟向右的箭头被点击
			
			$('.slider1 .btnright').trigger('click')
		},900);
	}
	$('.slider1').on('mouseenter',function(){
		console.info('鼠标进入，停止播放');
		clearInterval(timer);
	})
	$('.slider1').on('mouseenter',function(){
		console.info('鼠标离开，继续自动播放');
		autoPlay();
	})
})

//大轮播下边的小轮播
$(function(){
		var currentIndex=1;   //当前显示的是第几张
		var timer;   //定时器
		
		goto(currentIndex);  //给轮播图做一个初始化
		autoPlay();  //启动定时播放
		//去得到第yourIndex张图
	function goto(yourIndex){
		//跟新slider-body的left值  这个过程一般用animate来实现
		$('.slider2 .slider-body').stop(true).animate({'left':yourIndex*-1*520},2000,function (){

			if(yourIndex==0){
				//alert('准备开始瞬间移动')
				//瞬间移动，把ul的位置移动到安全的状态
				$('.slider2 .slider-body').css('left',6*-1*520);
				currentIndex=6;  //真实序列中有效图片的张数
				console.info('移动结束');
			}
			else if(yourIndex==7){//6是真实有效图片的张数+1
				console.info('到最后了，准备瞬移');
				//瞬间移动，把ul的位置移动到安全的状态
				yourIndex=1;
				$('.slider2 .slider-body').css('left',1*-1*520);
				$('.slider2 .idx').eq(0).addClass('on').siblings().removeClass('on');
				currentIndex=1;
			}
			console.info('动画结束'+yourIndex);
			
			//跟新数值
			$('#currentIndex').html(yourIndex);
		});
		//更改指示条的状态
		$('.slider2 .idx').eq(yourIndex-1).addClass('on').siblings().removeClass('on');
	}
	$('.slider2 ,btnleft').click(function(){
		if($('.slider2 .slider-body').is(':animated') ){
			console.info('还没完');
			return;
		}
		//上一张
		currentIndex=currentIndex-1;
		goto(currentIndex);
	});
	$('.slider2 .btnright').click(function(){
		if($('.slider2 .slider-body').is(':animated') ){
			console.info('还没完');
			return;
		}
//		/下一张
		currentIndex=currentIndex+1;
		goto(currentIndex);
	})
	$('.slider2 .idx').click(function(){
		var i=$(this).index();//档期内是第几个指示灯 被点亮
		goto(i+1);
		console.info(i);
		})
		
		//自动播放 
	
	function autoPlay(){
		timer = setInterval(function(){
			//模拟向右的箭头被点击。
			
			$(".slider2 .btnright").trigger( "click"  )
			
		}, 800);
	}
	
	
	$(".slider2").on("mouseenter",function(){
		console.info("鼠标进入，停止自动播放");
		clearInterval(timer);
	});
	
	$(".slider2").on("mouseleave",function(){
		console.info("鼠标离开，继续自动播放");
		autoPlay();
	})	
})
	

	

