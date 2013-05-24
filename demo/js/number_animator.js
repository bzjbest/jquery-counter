	// JavaScript Document
	/* -- number_animator.js --*/
	(function () {
		function b(h, d) {
			var k = {},
			e,
			f = h.children(".number"),
			i = 36,
			g = d,
			l = function () {
				f.each(c.number);
				e = null;
				j.animate_to_number();
				setInterval(j.update_number, 600)
			},
			c = {
				number : function () {
					if (!e) {
						e = ["", '<div class="number_viewport">', ' <ul class="number_inner">', " <li>0</li>", " <li>1</li>", " <li>2</li>", " <li>3</li>", " <li>4</li>", " <li>5</li>", " <li>6</li>", " <li>7</li>", " <li>8</li>", " <li>9</li>", " <li>0</li>", " </ul>", "</div>", ""].join("")
					}
					$(this).html(e)
				}
			},
			j = {
				animate_to_number : function () {
					f.each(function (n) {
						if (!f["cached_num_" + n]) {
							f["cached_num_" + n] = $(this).find(".number_inner")
						}
						var m = g.toString();
						while (m.length < 11) {
							m = "0" + m
						}
						var o = -i * m.charAt(n);
						if (o === 0 && parseInt(f["cached_num_" + n].css("top")) != 0) {
							f["cached_num_" + n].animate({
								top : -i * 10
							}, {
								queue : false,
								complete : function () {
									f["cached_num_" + n].css("top", 0)
								}
							})
						} else {
							f["cached_num_" + n].animate({
								top : o
							}, {
								queue : false,
								duration : 550
							})
						}
						m = null;
						o = null
					})
				},
				update_number : function () {
					g++;
					j.animate_to_number()
				}
			};
			l();
			return k
		}
		function a() {
			var f = $("#counter_wrapper"),
			i = f.find("#counter_inner"),
			d = 0,
			g = 5000,
			c = f.height(),
			h = function () {
				setInterval(e, g)
			},
			e = function () {
				if (d <= -c * 1) {
					i.css({
						top : d = 0
					})
				}
				d -= c;
				i.animate({
					top : d
				}, {
					duration : 500,
					queue : false
				})
			};
			h()
		}
		/*
		$("#fuel_counter.counter_banner .counter").each(function () {
			b($(this), np.community_total_fuel)
		});
		$("#calorie_counter.counter_banner .counter").each(function () {
			b($(this), np.community_total_calories)
		});
		$("#step_counter.counter_banner .counter").each(function () {
			b($(this), np.community_total_step_count)
		});
		$("#fuel_counter_clone.counter_banner .counter").each(function () {
			b($(this), np.community_total_fuel)
		});
		*/
		b($("#step_counter.counter_banner .counter"), dreye.community_total_step_count);
		b($("#step_counter1.counter_banner .counter"), dreye.community_total_step_count);
		a()
	})();