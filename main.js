Camera = document.getElementById("Webcam1");
Webcam.set({
width:350,
height:250,
image_format:"jpeg",
jpeg_quality:100
});
Webcam.attach('#Webcam1');

function snap() {

    Webcam.snap(function(data_uri){
        document.getElementById("CapturedImage").innerHTML = "<img id='img1' src='"+data_uri+"'>";
    });
}

console.log(ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BaPSf7N1j/model.json",modelLoaded())

function modelLoaded() {
    console.log("modelloadedsuccesfully");
}