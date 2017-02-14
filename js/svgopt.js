
$(function(){
	var raph = {
		cl:0,
	};
	$("input").on('click change', function(e) {
			var count = this.value;
			raph.cl = +count;
				var arreg = [
			/\d{2}(?:\s|\,|$)/g,
			/\d{3}(?:\s|\,|$)/g,
			/\d{4}(?:\s|\,|$)/g,
			/\d{5}(?:\s|\,|$)/g,
			/\s\-/g,
			/(\sL\s|L\s|\sL)/g,
			/(\sC\s|C\s|\sC)/g,
			/\.\s/g,
			/\.\-/g,
			/(\-|\s)\d+(\,|\s)/g// выбор всех цифр без точки
			];
			var val = $(".input").val();
				var neWrex = val.replace(arreg[raph.cl]," "),
				clearMin = neWrex.replace(arreg[4],"-"),
				clearPoint = clearMin.replace(arreg[7]," "),
				clearPointMin = clearPoint.replace(arreg[8],"-"),
				clearL = clearPointMin.replace(arreg[5],"L"),
				clearEnd = clearL.replace(arreg[6],"C");
				var beg = val.length;
				var pr = beg-clearEnd.length;
				var pre = Math.round(pr*100/beg);
				$(".output").text(clearEnd);
				$(".out").text("after (стало) : "+clearEnd.length);
				$(".pros").text("     "+pre+"%");
				$(".inp").text("before (было) : "+beg);
		});
});
