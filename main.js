
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("camera");
function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("snapshot").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });

}
console.log("ml5.version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-tSW9GGpb/model.json', modelLoaded);


function modelLoaded() {

    console.log("Model Loaded!");

}

function identifyimage() {
    got = document.getElementById("captured_image");
    classifier.classify(got, gotResult);
}

function gotResult(error, results) {

    if (error) {

        console.log(error);
    } else {

        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }

}
