function makeBigger(){
    alert("Hello, world!");

    document.getElementById("textarea").style.fontSize = "24pt";

    //prevents the form submission to go back to default settings so the textarea stays bigger
    event.preventDefault(); 
}

function setFancy() {
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("textarea").style.textDecoration = "underline"
     
}

function setBoring() {
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.color = "black";
    document.getElementById("textarea").style.textDecoration = "none";

}

function handleRadioChange() {
    if (document.getElementById("fancy").checked) {
        alert("Fancy Shmancy!")
        setFancy();
    } else if (document.getElementById("boring").checked) {
        alert("Boring Betty.")
        setBoring();
    }
}

function toUpperCase(){
    var textArea = document.getElementById("textarea");
    var text = textArea.value.toUpperCase();
    
    // Split the text into an array of sentences
    var sentences = text.split(". ");
    
    // Loop through each sentence and add the "-Moo" suffix to the last word
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        var lastWord = words[words.length - 1];
        words[words.length - 1] = lastWord + "-Moo";
        sentences[i] = words.join(" ");
    }
    
    // Join the sentences back into a single string
    text = sentences.join(". ");

    // Update the text area value
    textArea.value = text;

    // Prevents the form submission to go back to default settings so the textarea stays bigger
    event.preventDefault(); 
}

document.getElementById("fancy").addEventListener("change", handleRadioChange);
document.getElementById("boring").addEventListener("change", handleRadioChange);
