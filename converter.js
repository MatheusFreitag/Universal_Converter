function convert_temperature(){
	var from_index = document.getElementById("from_index_temperature").selectedIndex;
	var to_index = document.getElementById("to_index_temperature").selectedIndex;
  var conversion_result = document.getElementById("user_input_temperature").value;

  if (from_index == 0){
    switch(to_index) {
    case 0:
        document.getElementById("result_temperature").innerHTML = conversion_result;
        break;
    case 1:
        conversion_result = (conversion_result * 1.8) + 32
        document.getElementById("result_temperature").innerHTML = conversion_result;
        break;
  }
    }
  else if (from_index == 1){
    switch(to_index) {
    case 0:
        conversion_result = (conversion_result -32) / 1.8
        document.getElementById("result_temperature").innerHTML = conversion_result;
        break;
    case 1:
        document.getElementById("result_temperature").innerHTML = conversion_result;
        break;

    }
  }
}

function convert_speed(){
	var from_index = document.getElementById("from_index_speed").selectedIndex;
	var to_index = document.getElementById("to_index_speed").selectedIndex;
  var conversion_result = document.getElementById("user_input_speed").value;

  if (from_index == 0){
    switch(to_index) {
      case 0:
          document.getElementById("result_speed").innerHTML = conversion_result;
          break;
      case 1:
          conversion_result = conversion_result * 0.62
          document.getElementById("result_speed").innerHTML = conversion_result;
          break;
    }
  }
  else if (from_index == 1){
    switch(to_index) {
      case 0:
          conversion_result = conversion_result * 1.6
          document.getElementById("result_speed").innerHTML = conversion_result;
          break;
      case 1:
          document.getElementById("result_speed").innerHTML = conversion_result;
          break;
    }
  }
  speed_details(to_index, conversion_result);
}

function convert_weight(){
	var from_index = document.getElementById("from_index_weight").selectedIndex;
	var to_index = document.getElementById("to_index_weight").selectedIndex;
  var conversion_result = document.getElementById("user_input_weight").value;

  if (from_index == 0){
    switch(to_index) {
    case 0:
        document.getElementById("result_weight").innerHTML = conversion_result;
        break;
    case 1:
        conversion_result = conversion_result / 2.2046;
        document.getElementById("result_weight").innerHTML = conversion_result;
        break;
  }
    }
  else if (from_index == 1){
    switch(to_index) {
    case 0:
        conversion_result = conversion_result * 2.2046;
        document.getElementById("result_weight").innerHTML = conversion_result;
        break;
    case 1:
        document.getElementById("result_Weight").innerHTML = conversion_result;
        break;

    }
  }
  weight_details(to_index, conversion_result);
}


function convert_length(){
  var factors1 = new Array(1, 0.01, 0.00001, 0.00000621, 0.3937, 0.0328, 0.01094);
  var factors2 = new Array(100, 1, 0.001, 0.000621, 39.37, 3.28,  1.094);
  var factors3 = new Array(100000, 1000, 1, 0.621, 39370, 3280, 1094);
  var factors4 = new Array(160934, 1609.34, 1.60934, 1, 63360, 5280,1760);
  var factors5 = new Array(2.54, 0.0254, 0.0000254, 0.0000158, 1, 0.08333, 0.02778);
  var factors6 = new Array(30.48, 0.3048, 0.0003048, 0.0001896, 12, 1, 0.3333);
  var factors7 = new Array(91.44, 0.9144, 0.0009144, 0.0005688, 36, 3, 1);
  var factors = new Array(factors1,factors2,factors3,factors4,factors5,factors6,factors7);

	var from_index = document.getElementById("from_index_length").selectedIndex;
	var to_index = document.getElementById("to_index_length").selectedIndex;
	var factor = factors[from_index][to_index];
  var conversion_result = factor * document.getElementById("user_input_length").value;
	if(isNaN(document.getElementById("user_input_length").value)){
      document.getElementById("result_length").innerHTML = "Not a valid number.";
  }
	else{
    document.getElementById("result_length").innerHTML = conversion_result;
  }

  length_details(to_index, conversion_result);
}


function speed_details(to_index, conversion_result){
  var x = document.getElementById("details_of_speed");
  x.style.display = "block";
  var hours = 0;
  if (to_index == 0){
    hours = 1225 / conversion_result;
  }
  else{
    hours = 761 / conversion_result;
  }
  document.getElementById("speed_text").innerHTML = "In this speed it would take " + Math.round(hours) + " hours to travel from Charleston to New York City";
}

function length_details(to_index, conversion_result){
  var x = document.getElementById("details_of_length");
  x.style.display = "block";
  var people = 0;
  switch(to_index){
    case 0:
        people = conversion_result / 60;
      break;

    case 1:
        people = conversion_result / 0.6;
      break;

    case 2:
        people = people = conversion_result / 0.06;
      break;

    case 3:
        people = people = conversion_result / 0.0003726;
      break;

    case 4:
        people = people = conversion_result / 23.622;
      break;

    case 5:
        people = people = conversion_result / 1.968;
      break;
    case 6:
        people = people = conversion_result / 0.6564;
      break;
  }
  document.getElementById("length_text").innerHTML = "This is the approximate length of " + Math.round(people) + " people inline";
}

function weight_details(to_index, conversion_result){
  var x = document.getElementById("details_of_weight");
  x.style.display = "block";
  var cat = 0;
  switch(to_index){
    case 0:
        cat = conversion_result / 22.046;
      break;

    case 1:
        cat = conversion_result / 10;
      break;
  }
  document.getElementById("weight_text").innerHTML = "This is the approximate weight of " + Math.round(cat) + " cats combined";
}

function hide_all_details(){
  var x = document.getElementById("details_of_speed");
  x.style.display = "none";
  x = document.getElementById("details_of_length");
  x.style.display = "none";
  x = document.getElementById("details_of_weight");
  x.style.display = "none";
}
