let readMore = false;
let text =
  "Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.Among Web professionals, Web development usually refers to the main non-design aspects of building Web sites: writing markup and coding.[2] Web development may use content management systems (CMS) to make content changes easier and available with basic technical skills.";

document.getElementById("text").innerText = text.substring(0, 208);

document.getElementById("btn-read").addEventListener("click", function () {
  if (readMore == false) {
    readMore = !readMore;
    document.getElementById("text").innerText = text; //load the full text
    document.getElementById("btn-read").innerText = "Show Less"; //change the button label
  }
  else {
    readMore = !readMore;
    document.getElementById("text").innerText = text.substring(0, 208);
    document.getElementById("btn-read").innerText = "Read More..."; //change the button label


}
});
