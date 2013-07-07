
 $("body").append("<audio src='data/return_new.mp3' autoplay style='display:none' id='soundTW'></audio>");
var sound = document.getElementById("soundTW");
		$('input').on('focus', function(){
			sound.src = chrome.runtime.getURL("data/return-new.mp3");
		});
		$('textarea').on('focus', function(){
			sound.src = chrome.runtime.getURL("data/return-new.mp3");
		});
		$('input').on('keydown', function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			switch(code) 
			{ 
			case 13: // enter
				sound.src = chrome.runtime.getURL("data/return.mp3");
				
			break; 
			case 32:  // space
				sound.src = chrome.runtime.getURL('data/space.mp3');
				break; 
			case 8:  // space
			case 9: //tab
				sound.src = chrome.runtime.getURL('data/backspace.mp3');
				break; 

			default: // all other key
				var key = Math.floor((Math.random()*4)+1);
				sound.src = chrome.runtime.getURL('data/key-0'+key+'.mp3');
			break; 
			}
				if(code == 9) {//tab
				this.value += '\t';
				 return false;
			}
			else return true;
			
		});

		$('textarea').on('keydown', function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			switch(code) 
			{ 
			case 13: // enter
				sound.src = chrome.runtime.getURL("data/return.mp3");
				
			break; 
			case 32:  // space
				sound.src = chrome.runtime.getURL('data/space.mp3');
				break; 
			case 8:  // space
			case 9: //tab
				sound.src = chrome.runtime.getURL('data/backspace.mp3');
				break; 

			default: // all other key
				var key = Math.floor((Math.random()*4)+1);
				sound.src = chrome.runtime.getURL('data/key-0'+key+'.mp3');
			break; 
			}
				if(code == 9) {//tab
				this.value += '\t';
				 return false;
			}
			else return true;
			
		});