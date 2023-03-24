function start_classify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/K6cm7fV4A/model.json", model_ready)
}

function model_ready(){
    console.log("Model is Ready");
    classifier.classify(got_results);
}

function got_results(error, results){
    if (error){console.error(error)}
    else {
        console.log(results)

        label = results[0].label;
        confidence = (results[0].confidence * 100).toFixed(2);


        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        r_color = "rgb(" + r + "," + g + "," + b + ")";


        document.getElementById("hear").style.color = r_color;
        document.getElementById("accuracy").style.color = r_color;

        document.getElementById("hear").innerHTML = "I can hear - " + label;
        document.getElementById("accuracy").innerHTML = "Accuracy - " + confidence + "%";


        Cat = document.getElementById("cat");
        Dog = document.getElementById("dog");
        Elephant = document.getElementById("elephant");
        Cow = document.getElementById("cow");


        if (label == "Cat") {

            Cat.style.borderColor = 'red';
            Dog.style.borderColor = 'black';
            Elephant.style.borderColor = 'black';
            Cow.style.borderColor = 'black';
        } else if (label == "Dog") {
            Cat.style.borderColor = 'black';
            Dog.style.borderColor = 'red';
            Elephant.style.borderColor = 'black';
            Cow.style.borderColor = 'black';
        } else if (label == "Elephant"){ 
            Cat.style.borderColor = 'black';
            Dog.style.borderColor = 'black';
            Elephant.style.borderColor = 'red';
            Cow.style.borderColor = 'black';   
        } else if (label == "Cow") {
            Cat.style.borderColor = 'black';
            Dog.style.borderColor = 'black';
            Elephant.style.borderColor = 'black';
            Cow.style.borderColor = 'red';
        }


    }
}

