//Function to clean URL fields, to make sure https:// is included, and that the url included the correct social media site info e.g. FacebookURL includes 'facebook' within the submission

//Make button trigger multiple functions in order
buttonPress.addEventListener("click", function(){
    createHeaderAndFooter();
    //createPreview();
});

async function copyFooter(){
let copyText = document.querySelector("#outputFooter").innerHTML;
navigator.clipboard.writeText(copyText.innerHTML);
}



function createHeaderAndFooter(){
    //Store form responses and clean URLs to include https:// if not already
    let heederHTML;
    let footerHTML;
    let localParty = document.getElementsByName("localParty")[0].value;
    let imprintText = document.getElementsByName("imprintText")[0].value;
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

    let previewWindow = document.getElementById("previewWindow");
    let outputFooter = document.getElementById("outputFooter");
    let outputHeader = document.getElementById("outputHeader");
    let buttonPress = document.getElementById("buttonPress");




// ===================================================================


//Remake outputs as variables to make it easier to manipulate/post them in multiple places

 //HEADER HTML OUTPUT (includes Local Party name)
    //used freeformatter.coms html escape / un-escaper to fix this code
    headerHTML = 
    '<style>body{color: #333333;font-family: Helvetica, sans-serif;font-size: 14px;line-height: 150%;text-align: left;padding: 20px 20px 0px; max-width:800px;margin:0 auto;}    h1 {background-color: #f04e98;color:white;padding:10px;text-align:center;line-height:1.6;}     h2 {background-color: #6ab023;color:white;padding:5px;text-align:center;}  a {color: #6AB023;}strong {color: #6AB023;} hr {border: 1px solid #cccccc;}tr{border-bottom:1px,solid,#ddd}</style> <table border="0" cellpadding="0" cellspacing="0" style="margin:0px;"><tr style="background-color:#6AB023;"> <td valign="middle" style="margin:auto auto"><div style="width:100%;text-align:center"> <center> <table border="0" cellpadding="0" cellspacing="0" style="margin:0px;"> <tr> <td valign="middle"> <div tyle="color:#FFFFFF;font-size: 30px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;margin-left:20px;">'
    + localParty 
    + '</div> </td> <td valign="middle" style="font-size: 0"> <img alt="" src="https://actionnetwork.org/user_files/user_files/000/075/051/original/GPEW-nostrap-wt_(1)_logoonly.png" style="width:80px; margin:5px" /> </td> <td valign="middle"> <div style="color:#FFFFFF;font-size: 30px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;margin-right:20px;"> Green Party </div> </td></tr> </table> </center> </div> </td> </tr> <tr style="background-color: #FFFFFF;"> <td valign="top" style="padding:0px 0px 40px;"> <!--[if mso]> <center> <table> <tr> <td width="600"> <![endif]--> <div style="color: #333333;font-family: Helvetica, sans-serif; font-size: 14px;line-height: 150%;text-align: left;padding: 20px 20px 0px; max-width:600px;margin:0 auto;">'
    ;

//FOOTER HTML OUTPUT (includes Local Party name, URL links (with if statements to check if blank) and imprint information)
footerHTML =
    ''

    + localParty

    + '';

//If any of the social media fields are empty, don't include the additional HTML, otherwise include an image of the relevant social media, with a link
if (facebookURL != "") {outputFooter.innerHTML +='<a href="'
+facebookURL+
'"><img alt="" src="https://actionnetwork.org/user_files/user_files/000/046/426/original/facebook.png" width="5%" style="width:5%; padding:10px" /></a>'
};

if (twitterURL != "") {outputFooter.innerHTML +='<a href="'+twitterURL+'"><img alt="" src="https://actionnetwork.org/user_files/user_files/000/046/428/original/twitter.png" width="5%" style="width:5%; padding:10px" /></a>'};

if (instagramURL != "") {outputFooter.innerHTML +='<a href="'+instagramURL+'"><img alt="" src="https://actionnetwork.org/user_files/user_files/000/047/891/original/insta.png" width="5%" style="width:5%; padding:10px" /></a>'};

if (youtubeURL != "") {outputFooter.innerHTML +='<a href="'+youtubeURL+'"><img alt="" src="https://actionnetwork.org/user_files/user_files/000/047/893/original/youtube.png" width="5%" style="width:5%; padding:10px" /></a>'};

if (whatsappURL != "") {outputFooter.innerHTML +='<a href="'+whatsappURL+'"><img alt="" src="https://actionnetwork.org/user_files/user_files/000/047/892/original/whatsapp.png" width="5%" style="width:5%; padding:10px" /></a>'};

//Add general footer content, inserting the website URL and local party name for 'Learn more about X local party here' link to website
outputFooter.innerHTML +=
    ""+websiteURL+""+localParty+"";
    
//If imprintText is blank, use default imprint, else use the inputted text
if (imprintText != "") {outputFooter.innerHTML += imprintText;
} else {
    outputFooter.innerHTML +="";}

//Add closing tag as escaped HTML
outputFooter.innerHTML += "";


//make header add to innerhtml
document.getElementById("outputHeader").innerHTML = headerHTML;
//close function 
};