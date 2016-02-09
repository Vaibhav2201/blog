var news=window.location.hash.substring(1);	
var myFirebaseRef = new Firebase("https://sears.firebaseio.com/");		
			if(news == "news5"){		
				
				myFirebaseRef.child("news4").on("value", function(snapshot) {				 
				document.getElementById("newsdiv").innerHTML=snapshot.val();
				
				});
			}
			else if(news == "news1"){			
				
				myFirebaseRef.child("news1").on("value", function(snapshot) {				
				document.getElementById("newsdiv").innerHTML=snapshot.val();
				
			});
			}
			else if(news == "news2"){			
				myFirebaseRef.child("news2").on("value", function(snapshot) {				
				document.getElementById('newsdiv').innerHTML=snapshot.val();
				
			});
			}
				else if(news == "news3"){				
				myFirebaseRef.child("news3").on("value", function(snapshot) {				
				document.getElementById('newsdiv').innerHTML=snapshot.val();
				
			});
			}