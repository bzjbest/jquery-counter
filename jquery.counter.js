// 创建一个闭包
(function ($) {
	// 插件的定义
	$.fn.counter = function (options) {
		var e,
		numbers = this.children(".number"),
		i = 36,
		count = options.value,
		init = function () {
			numbers.each(number);
			e = null;
			animate_to_number();
			setInterval(update_number, 600);
		},
		number = function () {
			if (!e) {
				e = ["", '<div class="number_viewport">', ' <ul class="number_inner">', " <li>0</li>", " <li>1</li>", " <li>2</li>", " <li>3</li>", " <li>4</li>", " <li>5</li>", " <li>6</li>", " <li>7</li>", " <li>8</li>", " <li>9</li>", " <li>0</li>", " </ul>", "</div>", ""].join("");
			}
			$(this).html(e);
		},

		animate_to_number = function () {
			numbers.each(function (n) {
				if (!numbers["cached_num_" + n]) {
					numbers["cached_num_" + n] = $(this).find(".number_inner");
				}
				var m = count.toString();
				while (m.length < 11) {
					m = "0" + m;
				}
				var o = -i * m.charAt(n);
				if (o === 0 && parseInt(numbers["cached_num_" + n].css("top")) != 0) {
					numbers["cached_num_" + n].animate({
						top : -i * 10
					}, {
						queue : false,
						complete : function () {
							numbers["cached_num_" + n].css("top", 0);
						}
					})
				} else {
					numbers["cached_num_" + n].animate({
						top : o
					}, {
						queue : true,
						duration : 550
					})
				}
				m = null;
				o = null;
			})
		},
		update_number = function () {
			count = count + 1;
			animate_to_number();
		},
		scroll = function() {
			var wrapper = $("#counter_wrapper"),
			inner = wrapper.find("#counter_inner"),
			d = 0,
			interval = 5000,
			height = wrapper.height(),
			start = function () {
				setInterval(e, interval);
			},
			e = function () {
				if (d <= -height * 1) {
					inner.css({
						top : d = 0
					})
				}
				d -= height;
				inner.animate({
					top : d
				}, {
					duration : 500,
					queue : false
				})
			};
			start();
		};
		init();
		scroll();
	};

	// 插件的defaults
	$.fn.counter.defaults = {
		value : 0,
		i : 36
	};
	// 闭包结束
})(jQuery);

$("#step_counter.counter_banner .counter").counter({
	value : dreye.community_total_step_count
});

$("#step_counter1.counter_banner .counter").counter({
	value : dreye.community_total_step_count
});
