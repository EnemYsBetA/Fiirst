$(document).ready(function(){

function ImageSwitcher(choices, i) {
	i = -1;
	
	this.Next = function() {
		hide_current_image();
		show_next_image();
	}
	
	var hide_current_image = function() {
		console.log(i);
		if(choices){
			if(i>=0) choices[i].style.visibility = "hidden";
			i++;
		}
	}
	var show_next_image = function() {
		console.log(i);
		if(choices){
			if(i >= (choices.length)) {
				i = -1;
			} 
			if(i>=0) choices[i].style.visibility = "visible";
		}
	}
}
  
    var pants = $(".pant");
	var shirts = $(".shirt");
	var pars = $(".par");
	var bums = $(".bum");
	var buns = $(".bun");
	var fars = $(".far");
	var fons = $(".fon");
	var hats = $(".hat");
	var backgrounds = $(".bg");

	var shirt_picker = new ImageSwitcher(shirts);
	document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };
	
	var pants_picker = new ImageSwitcher(pants);
	document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };
	
	var pars_picker = new ImageSwitcher(pars);
	document.getElementById("par_button").onclick = function() {pars_picker.Next(); };
	
	var bums_picker = new ImageSwitcher(bums);
	document.getElementById("bum_button").onclick = function() {bums_picker.Next(); };
	
	var buns_picker = new ImageSwitcher(buns);
	document.getElementById("bun_button").onclick = function() {buns_picker.Next(); };
	
	var fars_picker = new ImageSwitcher(fars);
	document.getElementById("far_button").onclick = function() {fars_picker.Next(); };	
	
	var fons_picker = new ImageSwitcher(fons);
	document.getElementById("fon_button").onclick = function() {fons_picker.Next(); };	
	
	var hats_picker = new ImageSwitcher(hats);
	document.getElementById("hat_button").onclick = function() {hats_picker.Next(); };
	
	
	var bg_picker = new ImageSwitcher(backgrounds);
	document.getElementById("bg_button").onclick = function() {bg_picker.Next(); };

});

  $("#shirt_button").click(function(){
  $("#shirt-menu").css("visibility", "visible"); });