Date.prototype.formatDate = function (fmt/*: string*/)/*: string*/ {
	let o/*: any */= {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
		"H+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"f": this.getMilliseconds() //毫秒
	};
	let week /*: any*/ = {
		"0": "\u65e5",
		"1": "\u4e00",
		"2": "\u4e8c",
		"3": "\u4e09",
		"4": "\u56db",
		"5": "\u4e94",
		"6": "\u516d"
	};
	let matched;
	if (matched = /(y+)/.exec(fmt)) {
		fmt = fmt.replace(matched[1], (this.getFullYear() + "").substring(4 - matched[1].length));
	}
	if (matched = /(E+)/.exec(fmt)) {
		fmt = fmt.replace(matched[1], ((matched[1].length > 1) ? (matched[1].length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[this.getDay() + ""]);
	}
	for (let k in o) {
		if (matched = new RegExp("(" + k + ")").exec(fmt)) {
			fmt = fmt.replace(matched[1], (matched[1].length == 1) ? (o[k]) : (("00" + o[k]).substring(("" + o[k]).length)));
		}
	}
	return fmt;
}

console.log(new Date().formatDate('yyyy年MM月dd日 HH时mm分ss秒f毫秒'))