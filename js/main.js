var oBody=document.body;
oBody.style.overflowY='hidden';
window.onload=function(){
oBody.style.overflowY='auto';
	
//加载完成
var oLoad=document.querySelector('#loading');
oLoad.style.display='none';

//导航
(function(){
	var oNav=document.querySelector('#main_nav');
	var aLi=oNav.querySelectorAll('li');
	var oContentWrap=document.querySelector('.content_wrap');
	var aList=oContentWrap.querySelectorAll('.list');
	var iNow=0;
	var len=aLi.length;
	aList[iNow].style.opacity=1;
	for(var i=0;i<len;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var i=0;i<len;i++){
				aLi[i].className='';
				aList[i].style.opacity=0;
			}
			var deg=this.index*90;

			oContentWrap.style.WebkitTransform='rotateX('+deg+'deg)';
			oContentWrap.style.MozTransform='rotateX('+deg+'deg)';
			oContentWrap.style.msTransform='rotateX('+deg+'deg)';
			oContentWrap.style.OTransform='rotateX('+deg+'deg)';
			oContentWrap.style.transform='rotateX('+deg+'deg)';

			iNow=this.index;
			aLi[iNow==0?len-1:iNow-1].className='t1';
			aLi[iNow].className='cur';
			aLi[iNow==len-1?0:iNow+1].className='b1';

			aList[iNow].style.opacity=1;
		};
	}
})();

//home
(function(){
	var oMsg=document.getElementById('message');
	var timer_bomb = null;
	var aSpan=oMsg.children;
	var arr=['姓名:王义全','电子科技大学(211、985)','信息显示专业  本科','大学英语6级，托业国际交流英语考试(TOEIC)715分','E-Mail:ityiquan@sina.com','Tel:18513610112',' GitHub:ityiquan.github.com'];
	var iNow=0;
	function play(n){
		var i=0;
		aSpan[n].timer=setInterval(function(){
			aSpan[n].innerHTML+=arr[n].charAt(i);
			i++;
			if(i==arr[n].length){
				clearInterval(aSpan[n].timer);
				n++;
				if(n==arr.length)return;
				play(n);
			}
		},100);
	}
	play(iNow);
	//home_pic
	function rnd(n,m){
		return Math.floor(n+Math.random()*(m-n));
	}
	function picBomb()
	{	
		clearInterval(timer_bomb);
		var oPic = document.querySelector('ul.home li .home_pic');
		var R = 5;
		var C = 5;
		var iNow = 0;
		for(var i=0;i<R;i++)
		{
			for(var j=0;j<C;j++)
			{
				var oS = document.createElement('span');
				oS.style.width = Math.round(oPic.offsetWidth/C)+'px';
				oS.style.height = Math.round(oPic.offsetHeight/R)+'px';
				oPic.appendChild(oS);
				oS.style.left = j*oS.offsetWidth+'px';
				oS.style.top = i*oS.offsetHeight+'px';
				oS.style.backgroundPosition = '-'+j*oS.offsetWidth+'px -'+i*oS.offsetHeight+'px';
			}
		}
		var aSpan = oPic.children;
		function picChange()
		{
			iNow++;
			for(var i=0;i<aSpan.length;i++)
			{
				aSpan[i].style.WebkitTransition = '2s all ease';
				var x = (aSpan[i].offsetLeft+aSpan[i].offsetWidth/2)-oPic.offsetWidth/2;
				var y = (aSpan[i].offsetTop+aSpan[i].offsetHeight/2)-oPic.offsetHeight/2;
				
				aSpan[i].style.WebkitTransform = 'translate('+x+'px,'+y+'px) rotateY('+rnd(-360,360)+'deg) rotateX('+rnd(-360,360)+'deg)';
				aSpan[i].style.opacity = 0;
			}
			function fnEnd()
			{
				aSpan[aSpan.length-1].removeEventListener('transitionend',fnEnd,false)
				oPic.style.backgroundImage = 'url(img/pic/'+((iNow+1)%6+1)+'.png)';
				for(var i=0;i<aSpan.length;i++)
				{
					aSpan[i].style.WebkitTransition = 'none';
					aSpan[i].style.backgroundImage='url(img/pic/'+(iNow%6+1)+'.png)';
					aSpan[i].style.opacity = 1;
					aSpan[i].style.WebkitTransform = '';
				}
			}
			aSpan[aSpan.length-1].addEventListener('transitionend',fnEnd,false);
		};			
		picChange();
		timer_bomb = setInterval(picChange,4000);
	}
	picBomb();
	
	
	
	
})();

//web
(function(){
	var oWeb=document.querySelector('#content_web');
	var aLi=oWeb.querySelectorAll('li');
	var oPre=oWeb.querySelector('.pre');
	var oNext=oWeb.querySelector('.next');
	var arr=[];
	var onOff=false;
	for(var i=0;i<aLi.length;i++){
		arr.push(aLi[i].className);
	}
	oPre.onclick=function(){
		if(onOff)return;
		onOff=true;
		arr.unshift(arr.pop());
		for(var i=0;i<aLi.length;i++){
			aLi[i].className=arr[i];
		}
	};
	oNext.onclick=function(){
		if(onOff)return;
		onOff=true;
		arr.push(arr.shift());
		for(var i=0;i<aLi.length;i++){
			aLi[i].className=arr[i];
		}
	};
	for(var i=0;i<aLi.length;i++){
		aLi[i].addEventListener('transitionend',function(){
			onOff=false;
		},false);
	}
})();
//js
(function(){
	var oJs=document.querySelector('#js');
	var aLi=oJs.querySelectorAll('li');
	var aPos=[{left:30,top:20},{left:320,top:20},{left:600,top:20},{left:30,top:240},{left:320,top:240},{left:600,top:240}];
	var aA=oJs.querySelectorAll('.choice');
	var aPos2=[{left:320,top:460},{left:400,top:460},{left:480,top:460}];
	var iNow=0;
	for(var i=0;i<aLi.length;i++){
		if(i<6){
			aLi[i].style.opacity=1;
			aLi[i].style.left=aPos[i].left+'px';
			aLi[i].style.top=aPos[i].top+'px';
			aLi[i].style.width='200px';
			aLi[i].style.height='200px';
		}else{
			aLi[i].style.left=aPos2[Math.floor(i/6)].left+'px';
			aLi[i].style.top=aPos2[Math.floor(i/6)].top+'px';
		}	
		aLi[i].onmouseenter=function(){
            move(this.children[0].children[1],{bottom:0,opacity:.8},{duration:250});
        };
        aLi[i].onmouseleave=function(){
            move(this.children[0].children[1],{bottom:-80,opacity:0},{duration:250});
        };
	}
	for(var i=0;i<aA.length;i++){
		aA[i].style.left=aPos2[i].left+'px';
		aA[i].style.top=aPos2[i].top+'px';
		aA[i].index=i;
		aA[i].onclick=function(){
			var _this=this;
			for(var i=iNow*6;i<(iNow+1)*6;i++){
				(function(index){
					setTimeout(function(){
						move(aLi[index],{opacity:0,left:aPos2[iNow].left,top:aPos2[iNow].top,width:0,height:0},{complete:function(){
							for(var i=0;i<aA.length;i++){
								aA[i].className='choice';
							}
							iNow=_this.index;
							aA[iNow].className='choice active';
							for(var i=iNow*6;i<(iNow+1)*6;i++){
								(function(index){
									setTimeout(function(){
										move(aLi[index],{opacity:1,left:aPos[index%6].left,top:aPos[index%6].top,width:200,height:200});
									},((iNow+1)*6-index)*200);
								})(i);
							}
						}});
					},((iNow+1)*6-index)*200);
				})(i);
			}
		};
	}
})();
//html5
(function(){
	var oBox=document.querySelector('#html5');
	var aS=oBox.querySelectorAll('span');
	var N=aS.length-1;
	for(var i=0;i<=N;i++){
		if(i<N){
			aS[i].style.backgroundImage= 'url(html5-html/h'+i+'/h'+i+'.png)';
		}
	}
	//打开时机
	aS[N].onclick=function(){
		oBox.removeChild(this);
		for(var i=0;i<N;i++){
			aS[i].style.WebkitTransition = '1s all ease '+(N-i)*300+'ms';
			aS[i].style.MozTransition = '1s all ease '+(N-i)*300+'ms';
			aS[i].style.msTransition = '1s all ease '+(N-i)*300+'ms';
			aS[i].style.OTransition = '1s all ease '+(N-i)*300+'ms';
			aS[i].style.transition = '1s all ease '+(N-i)*300+'ms';
			 (function(index){
			 	setTimeout(function(){
					aS[index].style.WebkitTransform='rotateY('+index*360/N+'deg) translateZ(300px)';
					aS[index].style.MozTransform='rotateY('+index*360/N+'deg) translateZ(300px)';
					aS[index].style.msTransform='rotateY('+index*360/N+'deg) translateZ(300px)';
					aS[index].style.OTransform='rotateY('+index*360/N+'deg) translateZ(300px)';
					aS[index].style.transform='rotateY('+index*360/N+'deg) translateZ(300px)';
				});
			 })(i);
		}
		//拖拽
		var x=0;
		var y=0;
		var speedX=0;
		var speedY=0;
		var lastX=0;
		var lastY=0;
		var timer=null;
		oBox.onmousedown=function(ev){
			clearInterval(timer);
			var disX = ev.pageX-y;
			var disY = ev.pageY-x;
			document.onmousemove=function(ev){
				x = ev.pageY-disY;
				y = ev.pageX-disX;
				oBox.style.WebkitTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
				speedX = ev.pageX-lastX;
				speedY = ev.pageY-lastY;
				lastX = ev.pageX;
				lastY = ev.pageY;
			};
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
				timer = setInterval(function(){
					speedX*=0.95;
					speedY*=0.95;
					y+=speedX;
					x+=speedY;
					oBox.style.WebkitTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
					oBox.style.MozTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
					oBox.style.msTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
					oBox.style.OTransform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
					oBox.style.transform = 'perspective(800px) rotateX('+-x/5+'deg) rotateY('+y/5+'deg)';
					if(Math.abs(speedX)<1)speedX=0;
					if(Math.abs(speedY)<1)speedY=0;
					if(speedX==0&&speedY==0){
						clearInterval(timer);
					}
				},30);
			};
			return false;
		};
	};
})();
};