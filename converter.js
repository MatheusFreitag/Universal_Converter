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


function convert_length()
{
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
	if(isNaN(document.getElementById("user_input_length").value))
		document.getElementById("result_length").innerHTML = "Not a valid number.";
	else
		document.getElementById("result_length").innerHTML = conversion_result;
}
