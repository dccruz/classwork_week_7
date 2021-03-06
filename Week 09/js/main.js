// #9.3 Change that element's background-color.
document.getElementsByClassName("class1")[0].style.backgroundColor = "red";

// #9.4 Create an h1 and then use innerText to add some text to it
var newH1 = document.createElement("h1");
newH1.innerText = "test content, added to an h1";

// #9.5 Add that h1 to the div in your HTML
document.getElementById("divId1").appendChild(newH1);


// #9.7 Create an h1 element, create a text node. Add the text node to your h1, then add your h1 to your div.
var anotherNewH1 = document.createElement("h1");
var newTextNode = document.createTextNode("Here's some more test content for another h1");

anotherNewH1.appendChild(newTextNode);
document.getElementById("divId2").appendChild(anotherNewH1);


// #9.9 Create a function that changes the image source and alt attributes when you click on that button
function changeImageSrc() {
  var image1 = document.getElementById("image1");

  image1.src = "img/cat2.jpg"
  image1.alt = "I'm no scary cat"
};
