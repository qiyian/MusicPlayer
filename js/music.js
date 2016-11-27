$(function(){
	/*切歌start*/
	var isPlay=true;
	var arrMusic=["music/丑八怪 - 薛之谦.mp3","music/绅士 - 薛之谦.mp3","music/一半 - 薛之谦.mp3","music/认真的雪 - 薛之谦.mp3"];

	/*列表切歌*/
	$(".list").on("click",function(){
		var currTitle = $(this).children().eq(0).html();
		var currZJ = $(this).children().eq(2).html();
		$("#h2").html(currTitle);
		$("#zj").html(currZJ);
		$("#audio").attr("src","music/"+currTitle+ " - 薛之谦.mp3");
	})

	/*暂停、播放*/
	$("#bt-pause").on("click",function(){
		if(isPlay){
		$("#audio").get(0).pause();
		isPlay = false;
		$("#music-pic").css({"animation-play-state":"paused"});
		$("#line").css({"transform":"rotate(-10deg)"});
		$("#bt-pause").css({"background":"url(img/pause.png) no-repeat center"});
		}else{
			$("#audio").get(0).play();
			$("#music-pic").css({"animation-play-state":"running"});
			$("#line").css({"transform":"rotate(10deg)"});
			$("#bt-pause").css({"background":"url(img/run.png) no-repeat center"});
			isPlay = true;
		}
	})

	/*上一首*/
	var current=1;
	$("#bt-pre").on("click",function(){
		current--;
		if(current==0){
			current=5;
		}
		$("#audio").children("#source").src=arrMusic[current-1];
		$("#list"+current).click();
	})
	/*下一首*/
	$("#bt-next").on("click",function(){
		current++;
		if(current==6){
			current=1;
		}
		$("#audio").children("#source").scr=arrMusic[current-1];
		$("#list"+current).click();
	})
	/*切歌end*/


	/*音量start*/
	$("#bt-add").click(function(){
		var vol = $("#audio")[0].volume;
		if(vol==1){
			$("#audio")[0].volume=vol.toFixed(1);
			$("#bt-volumn").css({"background":"url(img/v3.png) no-repeat center"});
		}else{
			vol = vol+0.1;
			$("#audio")[0].volume=vol.toFixed(1);
			if(vol==0.1){
				$("#bt-volumn").css({"background":"url(img/v1.png) no-repeat center"});
			}
			if(vol==0.5){
				$("#bt-volumn").css({"background":"url(img/v2.png) no-repeat center"});
			}
		}
	})

	$("#bt-sub").click(function(){
		var vol = $("#audio")[0].volume;
		if(vol==0){
			$("#bt-volumn").css({"background":"url(img/v0.png) no-repeat center"});
			$("#audio")[0].volume=vol.toFixed(1);
		}else{
		vol = vol-0.1;
		$("#audio")[0].volume=vol.toFixed(1);
		if(vol==0.1){
			$("#bt-volumn").css({"background":"url(img/v1.png) no-repeat center"});
		}
		 if(vol==0.5){
			$("#bt-volumn").css({"background":"url(img/v2.png) no-repeat center"});
		 }
		}
	})
	/*音量end*/

	/*歌曲时间*/
	var timer;
	timer=setInterval(function(){
		var times =parseInt($("#audio")[0].currentTime);
		var min =parseInt(times/60);
		var sec =parseInt(times%60);
		if(sec<10){
			$("#curr-time").html("0"+min+":0"+sec);
		}else{
				$("#curr-time").html("0"+min+":"+sec);
		}
		var alltimes = parseInt(($("#audio")[0].duration));
		var mins =parseInt(alltimes/60);
		var secs =parseInt(alltimes%60);
		if(secs<10){
			$("#total-time").html("0"+mins+":0"+secs);
		}else{
			$("#total-time").html("0"+mins+":"+secs);
		}
		var per =parseFloat((parseFloat((times/alltimes))*100)).toFixed(2);
		$("#total-jindu").val(per);
		console.log(per);
		$("#curr-jindu").css({width:+per*2+"px"})
	},1000);
	//刷新
	$("#bt-refresh").click(function(){
		$("#audio")[0].currentTime=0;
	})
	/*时间end*/
})
