Webcam.set({
    width:310,
    height:300,
    image_format: "png",
    png_quality: 90,
});

camera= document.getElementById("camera");

Webcam.attach("#camera");

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='" + data_uri + "'>";
    });
};

console.log("ml5 version", ml5.version);

classifier=ml5.imageClassifier('Mobilenet', modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}
 function identify(){
    img= document.getElementById("captured_image");
    classifier.classify(img, gotResults);
 }
 function gotResults(error, results){
     if(error){
         console.log(error);
     }
     else{
         console.log(results);
         document.getElementById("object_name").innerHTML= results[0].label;
     }
 }