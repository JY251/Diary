function handleClick() {
  var xhr = new XMLHttpRequest();
  // console.log(xhr); // DEBUG

  xhr.open("GET", "index2.html", true);
  // console.log(xhr); // DEBUG

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Received!");
      console.log(xhr.responseText);
      displayContent(xhr.responseText);
    }
    console.log("failed");
  };

  xhr.send();
}

function displayContent(content) {
  document.getElementById("content").innerHTML = content;
}

document.getElementById("transbtn").addEventListener("click", handleClick);