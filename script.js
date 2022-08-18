//Function to clean URL fields, to make sure https:// is included, and that the url included the correct social media site info e.g. FacebookURL includes 'facebook' within the submission


let generateButton = document.getElementById("generateButton");
let copyFooterButton = document.getElementById("copyFooterButton");
let copyHeaderButton = document.getElementById("copyHeaderButton");

//Generate button functionality
generateButton.addEventListener("click", function(){
    createHeaderAndFooter();
});

//Copy button functionality. Add listeners that then take the content in the output textareas and copy it to the clipboard
copyHeaderButton.addEventListener("click", function(){
    navigator.clipboard.writeText(headerHTMLBox.innerHTML);
  });
copyFooterButton.addEventListener("click", function(){
    navigator.clipboard.writeText(footerHTMLBox.innerHTML);
  });

//Generate Header and Footer HTML
function createHeaderAndFooter(){
    //Create variables
    let headerHTML;
    let footerHTML;
    let localParty = document.getElementsByName("localParty")[0].value;
    let imprintText = document.getElementsByName("imprintText")[0].value;
    
    //Clean URLs to include https:// if not already
    let websiteURL;
    if (document.getElementsByName("websiteURL")[0].value.includes("https://")){}
    else {
        websiteURL = 'https://'+document.getElementsByName("websiteURL")[0].value;
    }

    let facebookURL;
    if (document.getElementsByName("facebookURL")[0].value.includes("https://")){}
    else {
        facebookURL = 'https://'+document.getElementsByName("facebookURL")[0].value;
    }

    let twitterURL;
    if (document.getElementsByName("twitterURL")[0].value.includes("https://")){}
    else {
        twitterURL = 'https://'+document.getElementsByName("twitterURL")[0].value;
    }

    let instagramURL;
    if (document.getElementsByName("instagramURL")[0].value.includes("https://")){}
    else {
        instagramURL = 'https://'+document.getElementsByName("instagramURL")[0].value;
    }

    let youtubeURL;
    if (document.getElementsByName("youtubeURL")[0].value.includes("https://")){}
    else {
        youtubeURL = 'https://'+document.getElementsByName("youtubeURL")[0].value;
    }

    let whatsappURL;
    if (document.getElementsByName("whatsappURL")[0].value.includes("https://")){}
    else {
        whatsappURL = 'https://'+document.getElementsByName("whatsappURL")[0].value;
    }
// ===================================================================


//Remake outputs as variables to make it easier to manipulate/post them in multiple places

 //HEADER HTML OUTPUT (includes Local Party name)
    //use '' instead of "" to prevent problems with code-to-copy being read by js
    headerHTML = 
    '<style>body{color: #333333;font-family: Helvetica, sans-serif;font-size: 14px;line-height: 150%;text-align: left;padding: 20px 20px 0px; max-width:800px;margin:0 auto;} h1 {background-color: #f04e98;color:white;padding:10px;text-align:center;line-height:1.6;}     h2 {background-color: #6ab023;color:white;padding:5px;text-align:center;}  a {color: #6AB023;}strong {color: #6AB023;} hr {border: 1px solid #cccccc;}tr{border-bottom:1px,solid,#ddd}</style> <table border="0" cellpadding="0" cellspacing="0" style="margin:0px;"><tr style="background-color:#6AB023;"> <td valign="middle" style="margin:auto auto"><div style="width:100%;text-align:center"> <center> <table border="0" cellpadding="0" cellspacing="0" style="margin:0px;"> <tr> <td valign="middle"> <div style="color:#FFFFFF;font-size: 30px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;margin-left:20px;">'
    + localParty 
    + '</div> </td> <td valign="middle" style="font-size: 0"> <img alt="" src="https://actionnetwork.org/user_files/user_files/000/075/051/original/GPEW-nostrap-wt_(1)_logoonly.png" style="width:80px; margin:5px" /> </td> <td valign="middle"> <div style="color:#FFFFFF;font-size: 30px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;margin-right:20px;"> Green Party </div> </td></tr> </table> </center> </div> </td> </tr> <tr style="background-color: #FFFFFF;"> <td valign="top" style="padding:0px 0px 40px;"> <!--[if mso]> <center> <table> <tr> <td width="600"> <![endif]--> <div style="color: #333333;font-family: Helvetica, sans-serif; font-size: 14px;line-height: 150%;text-align: left;padding: 20px 20px 0px; max-width:600px;margin:0 auto;">'
    ;

//FOOTER HTML OUTPUT (includes Local Party name, URL links (with if statements to check if blank) and imprint information)
footerHTML =
    '</div> <!--[if mso]> </td> </tr> </table> </center> <![endif]--></td></tr><tr style="background: #6ab023"> <td valign="middle"><div style="width:100%;text-align:center"><center><table border="0" cellpadding="0" cellspacing="0" style="margin:0px;padding:10px 0"><tr><td valign="middle"><div style="color:#FFFFFF;font-size: 16px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;margin-left:20px;">'

    + localParty

    + '</div></td><td valign="middle" style="font-size: 0"><img alt="" src="https://actionnetwork.org/user_files/user_files/000/075/051/original/GPEW-nostrap-wt_(1)_logoonly.png" style="width:40px; margin:5px" /></td><td valign="middle"><div style="color:#FFFFFF;font-size: 16px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;">Green Party</div></td></tr></table><div style="background-color:#6ab023;margin-top:-10px;"><div>';

//If any of the social media fields are empty, don't include the additional HTML, otherwise include an image of the relevant social media, with a link
if (facebookURL != "") {footerHTML +='<a href="'
+facebookURL+
'"><img alt="" src="https://actionnetwork.org/user_files/user_files/000/046/426/original/facebook.png" width="5%" style="width:5%; padding:10px" /></a>'
};

if (twitterURL != "") {footerHTML +='<a href="'+twitterURL+'"><img alt="" src="https://actionnetwork.org/user_files/user_files/000/046/428/original/twitter.png" width="5%" style="width:5%; padding:10px" /></a>'};

if (instagramURL != "") {footerHTML +='<a href="'+instagramURL+'"><img alt="" src="https://actionnetwork.org/user_files/user_files/000/047/891/original/insta.png" width="5%" style="width:5%; padding:10px" /></a>'};

if (youtubeURL != "") {footerHTML +='<a href="'+youtubeURL+'"><img alt="" src="https://actionnetwork.org/user_files/user_files/000/047/893/original/youtube.png" width="5%" style="width:5%; padding:10px" /></a>'};

if (whatsappURL != "") {footerHTML +='<a href="'+whatsappURL+'"><img alt="" src="https://actionnetwork.org/user_files/user_files/000/047/892/original/whatsapp.png" width="5%" style="width:5%; padding:10px" /></a>'};
//Closing Div of social icons section
footerHTML += '</div>';

//Add general footer content, inserting the website URL and local party name for 'Learn more about X local party here' link to website
footerHTML +=
    '<div style="color:#FFFFFF;font-size: 16px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;"><a style="color:#FFFFFF" href="'+websiteURL+
    '">Find out more about '
    +localParty+
    ' Green Party here</a><br><br>Not a member? <a style="color:#FFFFFF" href="https://join.greenparty.org.uk/">You can join today!</a><br><br></div></div><div style="background: #FFFFFF;color: #333333;font-family: Arial,sans-serif;font-size: 10px;line-height: 125%;text-align: left;padding:5px"> You received this email because you signed up to our mailing list on our website, took a campaign action, gave us your address at an event or because you#re a member of the Green Party. ';
    
//If imprintText is blank, use default imprint (starting with Published and promoted by), else use the inputted text
if (imprintText != "") {footerHTML += imprintText;
} else {
    footerHTML += 'Published and promoted by Chris Rose on behalf of the Green Party, both at The Biscuit Factory, Unit 215 J Block, 100 Clements Road, London, SE16 4DG.';
}

//Add closing tag as escaped HTML
footerHTML += '</div>';


//make header add to innerhtml
document.getElementById("headerHTMLBox").innerHTML = headerHTML;
document.getElementById("footerHTMLBox").innerHTML = footerHTML;
//close function 
};