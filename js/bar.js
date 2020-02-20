$(document).ready(function() {
	let bar = document.getElementById("progressBar");
	let startWidth = 0;
	let plusOne = 1;
	let plusThree = 3;
	let plusSeven = 7;

	function plusOnePercent(){

		console.log(bar.style.width = startWidth + plusOne + "%");

		startWidth += plusOne;

		$('#progressBar').attr("width", bar)

	};
	function plusThreePercent(){

		console.log(bar.style.width = startWidth + plusThree + "%");

		startWidth += plusThree;

		$('#progressBar').attr("width", bar)

	};
	function plusSevenPercent(){

		console.log(bar.style.width = startWidth + plusSeven + "%");

		startWidth += plusSeven;

		$('#progressBar').attr("width", bar)

	};
 	console.log(bar.style.width);

	$('#btn1').click(plusOnePercent);
	$('#btn2').click(plusThreePercent);
	$('#btn3').click(plusSevenPercent);
});


	


