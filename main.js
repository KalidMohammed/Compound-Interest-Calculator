



const mapping = {
					"A" : ".-", "B" : "-...","C" : "-.-.", "D" : "-..",
					"E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
					"I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
					"M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
					"Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
					"U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
					"Y" : "-.--", "Z" : "--..",
					
					
					"0" : "-----",
					"1" : ".----", "2" : "..---", "3" : "...--",
					"4" : "....-", "5" : ".....", "6" : "-....",
					"7" : "--...", "8" : "---..", "9" : "----."
				}				
				

function TextToMorseCode()			
{
	
	let input = document.getElementById("input").value;
	
	input = input.toUpperCase();
	
	let arr1 = input.split("");
	
	let arr2 = arr1.map(x => {
		if(mapping[x])
		{
			return mapping[x];
		}
		else{						
			return x;
		}
	});
	
	let code = arr2.join(" ");
	
	document.getElementById("output").value = code;
	
	
}

function MorseCodeToText()			
{
	
	let input = document.getElementById("input").value;
	
	input = input.toUpperCase();
	
	let arr2 = input.split(" ");
	
	let arr1 = arr2.map(x => {
		if(mapping[x])
		{
			return mapping[x];
		}
		else{						
			return x;
		}
	});
	
	let code = arr1.join(" ");
	
	document.getElementById("output").value = code;
	
	
}


function setFocus() 
{

	document.getEleementById("Input").focus();
  }

function Clear() {
	document.getElementById("Output").value = "";
	document.getElementById("Input").value = "";
	setFocus();
}
