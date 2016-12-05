function dialogConfirm(o){
	var $mask = $('<div class="dialog_confirm">\
		<div class="mask"></div>\
		<div class="_dialogCon center text-cen">\
			<img class="dialog_waring" src="/images/dialog_waring.png" alt="">\
			<div class="dialogCon">\
			</div>\
			<div class="dialog_button inline-block">\
				<button class="determine">确定</button>\
				<button class="cancel">取消</button>\
			</div>\
		</div>\
	</div>')
	if(o.showButton === false){
		$mask.find(".dialog_button").hide();
	}
	if(o.showIcon === false){
		$mask.find(".dialog_waring").hide();
	}
	if(o.verticalAlign === "bottom"){
		$mask.find("._dialogCon").removeClass("center").addClass("bottom")
	}
	if(o.backtransparent===false){
		$mask.find("._dialogCon").css("background-color","#fff");
	}
	$mask.find(".dialogCon").addClass(o.className).append(o.content)

	

	$mask.find(".dialog_button .determine").on("click",function(){
		o.autohiden!=false&&$(".dialog_confirm").remove();
		o.callback&&o.callback();
	})
	$mask.find(".dialog_button .cancel").on("click",function(){
		$(".dialog_confirm").remove();
	})

	$(".content").append($mask)
	o.onShow&&o.onShow();
}




;

dialogConfirm_fabiao=function(){
dialogConfirm({
	className:"dialog_fabiao",
	verticalAlign:"bottom",
	content:'<div class="dialog_fabiao_list clearfix">\
				<a class="fl block" href="/tiwen/index.shtml">\
					<img style="width: 32px;height: 32px;" src="/images/dialog_fabiao_tiwen.png" alt="">\
					<p class="mt5">提问</p>\
				</a>\
				<a class="fl block" href="javascript:;">\
					<img style="width: 32px;height: 32px;" src="/images/dialog_fabiao_tuwen.png" alt="">\
					<p class="mt5">图文</p>\
				</a>\
				<a class="fl block" href="javascript:;">\
					<img style="width: 22px;height: 31px;" src="/images/dialog_fabiao_yuyin.png" alt="">\
					<p class="mt5">私密语音</p>\
				</a>\
				<a class="fl block" href="javascript:;">\
					<img style="width: 32px;height: 32px;" src="/images/dialog_fabiao_video.png" alt="">\
					<p class="mt5">小视频</p>\
				</a>\
			</div>\
			<button class="back-e09e00 col-fff fz14" style="width:100%;height:41px;" onclick="$('+'\'.dialog_confirm\''+').remove()'+'">取消</button>',
	autohiden:false,
	showIcon:false,
	backtransparent:false,
	showButton:false
})	
}