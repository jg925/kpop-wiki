//jquery source: ~cs/public_html/js/jquery-2.1.4.min.js

/* This will be the js file for the final website
 * Figure out how to remove the border if mouse is not on the button.
 */
var document;
var location;
function buttonHover(agencyName)
{
    "use strict";
    document.getElementById(agencyName).style.border = "3px solid #0066CC";
}
function buttonOut(agencyName)
{
    "use strict";
    document.getElementById(agencyName).style.border = "3px solid #3399FF";
}
function buttonClick(link)
{
    "use strict";
    location.href = 'KPopWiki/' + link + '.html';
}