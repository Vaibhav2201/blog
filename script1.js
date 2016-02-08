var myFirebaseRef = new Firebase("https://sears.firebaseio.com/");



myFirebaseRef.child("news4").on("value", function(snapshot) {
  document.getElementById("box").innerHTML=snapshot.val();
//document.getElementById("box12").innerHTML=snapshot.name();  // Alerts "San Francisco"
});

myFirebaseRef.child("news1").on("value", function(snapshot) {
  document.getElementById("box1").innerHTML=snapshot.val();
//document.getElementById("box11").innerHTML=snapshot.name();  // Alerts "San Francisco"
});

myFirebaseRef.child("news2").on("value", function(snapshot) {
  document.getElementById("box2").innerHTML=snapshot.val();
//document.getElementById("box10").innerHTML=snapshot.name();  // Alerts "San Francisco"
});

myFirebaseRef.child("news3").on("value", function(snapshot) {
  document.getElementById("box3").innerHTML=snapshot.val();
//document.getElementById("box13").innerHTML=snapshot.name();  // Alerts "San Francisco"
});