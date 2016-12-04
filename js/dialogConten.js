	/*****************兑换体力弹做家务***************************/
	/*dialogConfirm({
		className:"dialog_duihuanCon",
		content:'<input class="duihuanInp" placeholder="输入充值手机号" type="text" />\
			<p class="fz12 waring mt10 mb20 col-e09e00">\
				您确定用15000体力值兑换50元话费？\
			</p>',
		autohiden:false,
		callback:function(){
			console.log(111)
		}
	})*/
	/*****************兑换成功***************************/
	/*dialogConfirm({
		className:"dialog_duihuanchenggong",
		content:'<div class="dialog_duihuanchenggong_img">\
						<img src="/images/dialog_duihuanchenggong.png" alt="">\
				</div>\
				<p class="col-e09e00 fz16 mt20">兑换成功</p>\
				<p class="fz12 col-c3c3c3 mt5">我们将在24小时内为您完成兑换！</p>\
				<div class="close" onclick="$('+'\'.dialog_confirm\''+').remove()'+'">\
					<img style="width:13px;height:13px;vertical-align: middle;" src="/images/close.png" alt="">\
				</div>',
		autohiden:false,
		showIcon:false,
		showButton:false,
		callback:function(){
			console.log(111)
		}
	})*/
	/*****************确定移除好友***************************/
	/*dialogConfirm({
		className:"dialog_duihuanchenggong",
		content:'<p class="col-e09e00 mb20 mt20">确定要移除好友？</p>',
		
		callback:function(){
			console.log(111)
		}
	})*/
	/*****************发表***************************/
	/*dialogConfirm({
		className:"dialog_fabiao",
		verticalAlign:"bottom",
		content:'<div class="dialog_fabiao_list clearfix">\
					<a class="fl block" href="javascript:;">\
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
				<button class="back-e09e00 col-fff fz14" style="width:100%;height:41px;">取消</button>',
		autohiden:false,
		showIcon:false,
		showButton:false,
		callback:function(){
			console.log(111)
		}
	})*/
	/*****************回复提问弹窗***************************/
	/*dialogConfirm({
		className:"dialog_fabiao",
		verticalAlign:"bottom",
		content:'<div class="dialog_fabiao_list clearfix">\
					<a class="block" href="javascript:;">\
						<img style="width: 32px;height: 32px;" src="/images/dialog_fabiao_tuwen.png" alt="">\
						<p class="mt5">图文</p>\
					</a>\
					<a class="block" href="javascript:;">\
						<img style="width: 22px;height: 31px;" src="/images/dialog_fabiao_yuyin.png" alt="">\
						<p class="mt5">语音回复</p>\
					</a>\
				</div>\
				<button class="back-e09e00 col-fff fz14" style="width:100%;height:41px;">取消</button>',
		autohiden:false,
		showIcon:false,
		showButton:false,
		callback:function(){
			console.log(111)
		}
	})*/
	/**************************语音发送后**********************************/
	/*dialogConfirm({
		verticalAlign:"bottom",
		content:'<button class="back-e09e00 col-fff fz14" style="width:100%;height:41px;">返回最近</button>\
		<button class="back-e09e00 col-fff fz14 mt2" style="width:100%;height:41px;">返回圈子</button>',
		autohiden:false,
		showIcon:false,
		showButton:false,
		callback:function(){
			console.log(111)
		}
	})*/
	/**************************支付方式**********************************/
	/*dialogConfirm({
		className:"dialog_pay",
		content:'\
		<form action="">\
			<p class="col-e09e00 fz14 mt20 mb20">支付金额</p>\
		     <label class="block">\
		     	<img class="verticalMiddle" style="width:93px;" src="/images/pay_alipay.jpg" alt="">\
		     	<input class="none" value="alipay" type="radio" name="payType">\
		     	<img class="verticalMiddle radio_img" style="width:14px;" src="/images/radio_check.png" alt="">\
		     </label>\
		     <label class="block mb20 borT1">\
		     	<img class="verticalMiddle" style="width:93px;" src="/images/pay_weixin.jpg" alt="">\
		     	<input class="none" value="weixin" type="radio" name="payType">\
		     	<img class="verticalMiddle radio_img" style="width:14px;" src="/images/radio.png" alt="">\
		     </label>\
		</form>',
		autohiden:false,
		showIcon:false,
		onShow:function(){
			$(".dialog_pay label").on("click",function(){
				$(".dialog_pay label .radio_img").attr("src","/images/radio.png")
				$(this).find(".radio_img").attr("src","/images/radio_check.png")
			})
		},
		callback:function(){
			var checked = $("input[name='payType']:checked")
			$(".dialog_confirm").remove();
		}
	})*/