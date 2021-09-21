Prediction_1=""
Prediction_2=""
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() 
{
    Webcam.snap(function(data_uri){document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';});
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6K-b7VfYK/model.json',modelLoaded);
function modelLoaded()
{
    console.log('Model Loaded !');
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="The First gesture Prediction Is -"+Prediction_1;
    speak_data_2="And The Second gesture Prediction Is -"+Prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results)
{
    if(error){
        console.error(error);
    }else{
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        Prediction_1=results[0].label;
        Prediction_2=results[1].label;
        speak();
        if(result[0].label == "victory")
        {
            document.getElementById("update_emoj i").innerHTML="&#128522;";
        }
         if(result[0].label == "amazing")
        {
            document.getElementById("update_emoj i").innerHTML="&#128532;";
        }
         if(result[0].label == "best")
        {
            document.getElementById("update_emoj i").innerHTML="&#128548;";
        }

        if(result[1].label == "victory")
        {
            document.getElementById("update_emoj i2").innerHTML="&#128522;";
        }
         if(result[1].label == "amazing")
        {
            document.getElementById("update_emoj i2").innerHTML="&#128532;";
        }
        if(result[0].label == "best")
        {
            document.getElementById("update_emoj i").innerHTML="&#128548;";
        }
    }
}