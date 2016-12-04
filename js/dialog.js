/*<div class="dialog_confirm">
		<div class="mask"></div>
		<div class="dialogCon dialog_duihuanCon text-cen">
			<img class="dialog_waring" src="/images/dialog_waring.png" alt="">
			<input class="duihuanInp" placeholder="输入充值手机号" type="text" />
			<p class="fz12 waring mt10 mb20 col-e09e00">
				您确定用15000体力值兑换50元话费？
			</p>
			<div class="dialog_button inline-block">
				<button class="determine">确定</button>
				<button class="cancel">取消</button>
			</div>
		</div>
	</div>*/
/*

			
			
 */
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






