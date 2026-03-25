console.log("connected");

function analyzeText() {

    let text = document.getElementById("textInput").value;

    if (text === "") {
        alert("Please enter some text");
        return;
    }

    let charCount = text.length;

    let words = text.split(" ");
    let wordCount = words.length;

    let reversed = text.split("").reverse().join("");

    document.getElementById("charCount").innerHTML = charCount;
    document.getElementById("wordCount").innerHTML = wordCount;
    document.getElementById("reversedText").innerHTML = reversed;

    document.getElementById("resultBox").style.display = "block";

    console.log("Characters:", charCount);
    console.log("Words:", wordCount);
}