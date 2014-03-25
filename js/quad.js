var xcenter, ycenter, radius;

var dx;
var dy;

var xticks;
var yticks;

var h2, h, w2, w;

var ctx2;
var canvas2;

var y, z, x;
var a, b, c;
var hco, kco;

var xvertex, yvertex;
var acoef, bcoef, ccoef;

var ycoordR = [];
var xcoordR = [];

var ycoordL = [];
var xcoordL = [];

var xshift;
var yshift;

Dx = 40;
Dy = 40;

dx = 40;
dy = 40;

var xshift;
var yshift;

var L1;

var bsqr;
var fac;
var ta;
var bsqrmfac;
var sqrtbsqrfac;
var hasrealroots;
var quadformulasln1;
var quadformulasln2;
var quadformulapartial;


$(document).ready(function() {
	//keep checking values if answer is correct. if so, remove submit button and change input to label
	
	
	
	
	
	
	
	
	
	$("#method").change(function() {
		$("#quadformula").hide();
		$("#factoring").hide();
		$("#squares").hide();
		if ($(this).val() == "quadformula") {
			$("#quadformula").show();
			$('#quadformula1container').show();
		}
		if ($(this).val() == "squares") {
			if (isSquare(c) && isSquare(a) && b == 0) {
				$("#squares").show();
			} else {
				$("#method").val("quadformula").selectmenu('refresh');
				alert("Not a difference of 2 squares!");
				$("#quadformula").show();
			}
		}
		if ($(this).val() == "factoring") {
			var hasfactors = false;
			$.each(getFactors, function(){
				//find out if can be factored
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			});
			if (bsqrmfac > 0) {
				
				$("#factoring").show();
			} else {
				$("#method").val("quadformula").selectmenu('refresh');
				alert("Not real roots");
				$("#quadformula").show();
			}
		}
	});

	$('input[name=start-radio]').on('change', function() {

		if (this.value == "random") {
			$('#customquadfunction').hide();
		} else if (this.value == "custom") {
			$('#customquadfunction').show();

		}
	});
});

function getFactors(integer){
  var factors = [],
  quotient = 0;

  for(var i = 1; i <= integer; i++){
    quotient = integer/i;

    if(quotient === Math.floor(quotient)){
      factors.push(i); 
    }
  }
  return factors;
}

function plotoption() {

		if ($('input:radio[name=start-radio]:checked').val() == "random") {
			plot();
		} else if ($('input:radio[name=start-radio]:checked').val() == "custom") {
			plotcustom() ;

		}
}
	
function plot() {
	$('#equation').show();
	a = Math.floor((Math.random() * 10) - 4);
	if (a == 0) {
		a = 1;
	}
	hco = Math.floor((Math.random() * 10) - 4);
	kco = Math.floor((Math.random() * 10) - 4);

	$('#newDialog').dialog("close");
	initialization();
	draw();
	resetQuadFormula();
}


function plotcustom() {

	$('#equation').show();
	a = $("#acoeff").val();
	if (a == 0) {
		a = 1;
	}
	hco = $("#bcoeff").val() / (-2 * a);
	kco = $("#ccoeff").val() - (a * hco * hco);

	$('#newDialog').dialog("close");
	initialization();
	draw();
	resetQuadFormula();
	
}

function resetQuadFormula() {
	$('#quadformula1container').show();
	$('#canvascontain').hide();
	$('#acoeffans').val("");
	$('#bcoeffans').val("");
	$('#ccoeffans').val("");
	$('#bsqr').val("");
	$('#ta').val("");
	$('#fac').val("");
	$('#mb').val("");
	$('#bsqrmfac').val("");
	$('#ans1').val("");
	$('#ans2').val("");
	
	document.getElementById('quadFormulaAns').innerHTML = "";
}

function showGraph() {

	$("#canvascontain").toggle();
	if ($("#canvascontain").is(":visible")) {
		$('#showgraph').text('Hide Graph').button("refresh");
	} else {
		$('#showgraph').text('Show Graph').button("refresh");
	}

}

function checkformula1() {
	
	if($('#acoeffans').val()==a && $('#bcoeffans').val()==b && $('#ccoeffans').val()==c){
		solvequadformula1();
	}
	else{
		alert("wrong");
	}
}

function solvequadformula1() {

	$('#acoeffans').val(a);
	$('#bcoeffans').val(b);
	$('#ccoeffans').val(c);
	$('#quadformula2container').show();
	$('#quadformula1container').hide();
	
	quadformulapartial = '$a='+ a+',\\; b='+b+',\\; c='+ c+'$';
	document.getElementById('quadFormulaAns').innerHTML = quadformulapartial;
	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function checkformula2() {
	if($('#bsqr').val()==bsqr && $('#ta').val()==ta && $('#fac').val()==fac && $('#mb').val()==-b){
		solvequadformula2();
	}
	else{
		alert("wrong");
	}
}

function solvequadformula2() {

	$('#bsqr').val(bsqr);
	$('#ta').val(ta);
	$('#fac').val(fac);
	$('#mb').val(-b);
	$('#quadformula3container').show();
	$('#quadformula2container').hide();
	//quadformulapartial = '$\\implies  \\frac{'+ -b+' \\pm \\sqrt{'+b+'^2 -(4)('+ a+')('+ c+')}}{(2)('+ a+')} = $';
	quadformulapartial += '<br\> $\\implies  -b='+ -b+',\\; b^2='+bsqr+'$ <br\>  $4ac='+ fac+',\\; 2a='+ ta+'$';
	document.getElementById('quadFormulaAns').innerHTML = quadformulapartial;
	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function checkformula3() {
	if($('#bsqrmfac').val()==bsqrmfac){
		solvequadformula3();
	}
	else{
		alert("wrong");
	}
}

function solvequadformula3() {

	$('#bsqrmfac').val(bsqrmfac);
	$('#quadformula4container').show();
	$('#quadformula3container').hide();
	quadformulapartial += '<br\> $\\implies b^2 - 4ac='+bsqrmfac+'$';
	document.getElementById('quadFormulaAns').innerHTML = quadformulapartial;
	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function checkformula4() {
	if($('#sqrtbsqrfac').val()==sqrtbsqrfac){
		solvequadformula4();
	}
	else{
		alert("wrong");
	}
}

function solvequadformula4() {
	if(bsqrmfac>=0){
		$('#sqrtbsqrfac').val(sqrtbsqrfac);
		$('#quadformula5container').show();
		$('#quadformula4container').hide();
		quadformulapartial += '<br\> $\\implies \\sqrt{b^2 - 4ac}='+sqrtbsqrfac+'$';
		document.getElementById('quadFormulaAns').innerHTML = quadformulapartial;
		MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
	}
	else{
		alert('no real roots');
	}
}

function checkformula5() {
	if($('#ans1').val()==quadformulasln1 && $('#ans2').val()==quadformulasln2){
		solvequadformula5();
	}
	else{
		alert("wrong");
	}
}

function solvequadformula5() {

	$('#ans1').val(quadformulasln1);
	$('#ans2').val(quadformulasln2);
	$('#canvascontain').show();
	$('#quadformula5container').hide();
	quadformulapartial += '<br\> $\\implies  \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a} =$'+quadformulasln1 +' or '+quadformulasln2;
	document.getElementById('quadFormulaAns').innerHTML = quadformulapartial;
	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}


function isSquare(n) {
	return isInt(Math.sqrt(n));
}

function isInt(n) {
	return n % 1 === 0;
}

function updateSlidera(x) {
	a = x;

	document.mainform.acoef.value = a.toString();

	readData();

}

function updateSliderb(x) {

	b = x;
	document.mainform.bcoef.value = b.toString();
	readData();
}

function updateSliderc(x) {

	c = x;
	document.mainform.ccoef.value = c.toString();
	readData();
}

function readData() {

	var astring = document.mainform.acoef.value;
	var bstring = document.mainform.bcoef.value;
	var cstring = document.mainform.ccoef.value;

	a = parseFloat(astring);
	hco = parseFloat(bstring);
	kco = parseFloat(cstring);

	if (isNaN(a)) {
		alert("Enter a number for coefficient a");
	}
	if (isNaN(hco)) {
		alert("Enter a number for coefficient h");
	}
	if (isNaN(kco)) {
		alert("Enter a number for coefficient k");
	}

	if (a == 0) {
		alert("Coefficient a cannot be zero");
	}

	initialization();
	draw();
}

function initialization() {

	canvas2 = document.getElementById('canvas2');
	ctx2 = canvas2.getContext('2d');
	w2 = canvas2.width;
	h2 = canvas2.height;

	ctx2.save();
	ctx2.clearRect(0, 0, w2, h2);

	xshift = w2 / 2;
	yshift = h2 / 2;

	// draw axes

	ctx2.lineWidth = 2;
	ctx2.strokeStyle = "black";
	ctx2.beginPath();

	ctx2.moveTo(xshift, 0);
	ctx2.lineTo(xshift, h2);

	ctx2.moveTo(0, h2 - yshift);
	ctx2.lineTo(w2, h2 - yshift);

	ctx2.stroke();

	Kx = w2 / Dx + 1;

	Ky = h2 / Dy + 1;

	// ticks and labels on x axis

	ctx2.lineWidth = 0.2;

	for ( j = 0; j <= Kx; j++) {

		ctx2.strokeStyle = "grey";

		ctx2.beginPath();
		ctx2.moveTo(j * Dx + xshift, 0);
		ctx2.lineTo(j * Dx + xshift, h2);
		ctx2.stroke()

		ctx2.strokeStyle = "blue";
		ctx2.beginPath();
		ctx2.moveTo(j * Dx + xshift, h2 - yshift);
		ctx2.lineTo(j * Dx + xshift, h2 - 10 - yshift);
		ctx2.stroke()

		// labels
		ctx2.fillStyle = "blue";
		ctx2.fillText((j * dx / Dx).toString(), j * Dx + xshift, h2 + 20 - yshift);

	}

	for ( j = 0; j <= Kx; j++) {

		ctx2.strokeStyle = "grey";

		ctx2.beginPath();
		ctx2.moveTo(-j * Dx + xshift, 0);
		ctx2.lineTo(-j * Dx + xshift, h2);
		ctx2.stroke();

		ctx2.strokeStyle = "blue";
		ctx2.beginPath();
		ctx2.moveTo(-j * Dx + xshift, h2 - yshift);
		ctx2.lineTo(-j * Dx + xshift, h2 - 10 - yshift);
		ctx2.stroke();

		// labels
		ctx2.fillStyle = "blue";
		//    ctx2.moveTo(j*dx+xshift, 0);
		ctx2.fillText((-j * dx / Dx).toString(), -j * Dx + xshift, h2 + 20 - yshift);

	}

	// Ticks on y - axis

	for ( k = 0; k <= Ky; k++) {
		ctx2.strokeStyle = "black";
		ctx2.beginPath();
		ctx2.moveTo(0 + xshift, h2 - k * Dy - yshift);
		ctx2.lineTo(10 + xshift, h2 - k * Dy - yshift);

		ctx2.strokeStyle = "grey";

		ctx2.beginPath();
		ctx2.moveTo(0, h2 - k * Dy - yshift);
		ctx2.lineTo(w2, h2 - k * Dy - yshift);

		ctx2.stroke();

		// labels
		ctx2.fillStyle = "blue";
		ctx2.fillText((k * dy / Dy).toString(), xshift - 20, yshift - k * Dy);

	}

	for ( k = 0; k <= Ky; k++) {
		ctx2.strokeStyle = "blue";
		ctx2.beginPath();
		ctx2.moveTo(0 + xshift, h2 + k * Dy - yshift);
		ctx2.lineTo(10 + xshift, h2 + k * Dy - yshift);

		ctx2.strokeStyle = "grey";

		ctx2.beginPath();
		ctx2.moveTo(0, h2 + k * Dy - yshift);
		ctx2.lineTo(w2, h2 + k * Dy - yshift);

		ctx2.stroke();

		// labels
		ctx2.fillStyle = "blue";
		ctx2.fillText((-k * dy / Dy).toString(), xshift - 20, yshift + k * Dy);

	}

	// ------------- drawing arrows on x axis-------------

	ctx2.fillStyle = "black";
	ctx2.beginPath();
	ctx2.moveTo(w2, yshift);
	ctx2.lineTo(w2 - 15, yshift - 10);
	ctx2.lineTo(w2 - 10, yshift);
	ctx2.lineTo(w2 - 15, yshift + 10);
	ctx2.lineTo(w2, yshift);

	ctx2.closePath();
	ctx2.fill();

	// ---------------- drawing arrows on y axis---------------

	ctx2.fillStyle = "black";
	ctx2.beginPath();

	ctx2.moveTo(xshift, 0);
	ctx2.lineTo(xshift - 10, 15);

	ctx2.lineTo(xshift, 10);
	ctx2.lineTo(xshift + 10, 15);
	ctx2.moveTo(xshift, 0);

	ctx2.closePath();
	ctx2.fill();

	// --------------------------------------

	var k1 = Dx / dx;
	var k2 = Dy / dy;

	L1 = 2 * w2;

	b = -2 * a * hco;
	c = a * hco * hco + kco;

	bsqr = b * b;
	fac = 4 * a * c;
	ta = 2 * a;
	bsqrmfac = bsqr - fac;
	sqrtbsqrfac = 0;
	if (bsqrmfac >= 0) {
		hasrealroots = true;
		quadformulasln1 = ((-1 * b) + Math.sqrt(bsqrmfac)) / ta;
		quadformulasln2 = ((-1 * b) - Math.sqrt(bsqrmfac)) / ta;
		sqrtbsqrfac = Math.sqrt(bsqrmfac);
	} else if (bsqrmfac < 0) {
		hasrealroots = false;
	}

	xvertex = -b / (2 * a);
	yvertex = a * (xvertex) * (xvertex) + b * (xvertex) + c;

	delta = b * b - 4 * a * c;

	if (delta >= 0) {
		x1 = (-b + Math.sqrt(delta)) / (2 * a);
		x2 = (-b - Math.sqrt(delta)) / (2 * a);
	}

	yint = c;

	for ( i = 0; i <= L1; i++) {

		xcoordR[i] = xshift + Dx * k1 * (xvertex) + i;

		x = xvertex + i / (k1 * Dx);

		ycoordR[i] = yshift - (Dy * k2) * (a * x * x + b * x + c);

	}

	for ( i = 0; i <= L1; i++) {
		xcoordL[i] = xshift + Dx * k1 * (xvertex) - i;

		x = xvertex - i / (k1 * Dx);
		ycoordL[i] = yshift - (Dy * k2) * (a * x * x + b * x + c);

	}

}

// ------------------- Draw graph  -------------------------------

function draw(x) {

	ctx2.strokeStyle = "#000000";
	ctx2.beginPath();
	ctx2.lineWidth = 2;
	ctx2.moveTo(xcoordR[0], ycoordR[0]);

	// draw right side

	for ( i = 0; i <= L1; i++) {

		ctx2.bezierCurveTo(xcoordR[i], ycoordR[i], xcoordR[i + 1], ycoordR[i + 1], xcoordR[i + 2], ycoordR[i + 2]);

		i = i + 2;

	}
	ctx2.stroke();

	// draw left side

	ctx2.moveTo(xcoordL[0], ycoordL[0]);

	for ( i = 0; i <= L1; i++) {

		ctx2.bezierCurveTo(xcoordL[i], ycoordL[i], xcoordL[i + 1], ycoordL[i + 1], xcoordL[i + 2], ycoordL[i + 2]);

		i = i + 2;

	}
	ctx2.stroke();

	// ---------- draw vertex ------------------------------------

	ctx2.fillStyle = "blue";
	ctx2.beginPath();
	ctx2.arc(xcoordL[0], ycoordL[0], 4, 0, 2 * Math.PI);
	ctx2.fill();

	// ------------- display vertex, x and y intercepts ----------

	ctx2.fillStyle = "blue";
	ctx2.font = "12px Arial";

	textOut();

}

function textOut() {

	var stringOut = "";

	var sta = a.toString();
	if (a == 1) {
		sta = ""
	}
	if (a == -1) {
		sta = "-"
	}

	var stb = "";
	stb = b.toString() + "x";
	if (b > 0) {
		stb = "+" + b.toString() + "x"
	}
	if (b == 0) {
		stb = ""
	}
	if (b == 1) {
		stb = "+" + "x"
	}
	if (b == -1) {
		stb = "-" + "x"
	}

	var stc = "";
	stc = c.toString();
	if (c > 0) {
		stc = "+" + c.toString()
	}
	if (c == 0) {
		stc = ""
	}

	//stringOut='$'+'f(x)='+sta+'x^2'+stb+stc+'$';
	stringOut = '$' + sta + 'x^2' + stb + stc + '=0$';
	document.getElementById('myDiva').innerHTML = stringOut;

	MathJax.Hub.Queue(["Typeset", MathJax.Hub]);

}

onload = function() {
	initialization();
}
