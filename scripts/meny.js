$(document).ready(generateMenu);

function generateMenu() {
    var primaryContent = document.getElementById("primarycontent");
    var recipieHeaders = primarycontent.getElementsByTagName("h4");
    var recepieMenu = document.getElementById("receptmeny");
    var recipieListCont = recepieMenu.getElementsByClassName("contentarea")[0];
    var recipieList = document.createElement("ul");
    //These initial variables are instanced to find each individual relevant part of the page

    for (i=0; i < recipieHeaders.length; i++){
        recipieHeaders[i].id = recipieHeaders[i].textContent.trim(); /*This line assigns an id to each recipie header, so that it can serve as an anchor.
        The trim function is used cause without it there was a ton of empty space that made the code nonfunctional*/
        var recipieEntry = document.createElement("li");
        var recipieLink = document.createElement("a");
        var recipieLinkText = document.createTextNode(recipieHeaders[i].textContent); 
        recipieLink.appendChild(recipieLinkText); /*This and the three previous lines adds the recipies entries by creating the html elements, 
        and then appending it to the list, using the current header in the loop as a source for the text that is shown*/
        recipieLinkRef = "#" + recipieHeaders[i].textContent;  /*this makes the url that will then be added to the links. As it's on the same page 
        reffering to index.html is not needed*/
        recipieLink.href = recipieLinkRef.trim(); //this adds the previously written url to the link, and trims it to sync with the header id
        recipieEntry.appendChild(recipieLink);
        recipieList.appendChild(recipieEntry); //This just appends the completed entry, with link, to the list   
    }
    recipieListCont.appendChild(recipieList); //and once all entires have been generated and added to the list, the list itself is added to the page
}