//Function to clean URL fields, to make sure https:// is included, and that the url included the correct social media site info e.g. FacebookURL includes 'facebook' within the submission

//Make button trigger multiple functions in order
buttonPress.addEventListener("click", function(){
    createHeaderAndFooter();
    createPreview();
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
/*
    //HEADER HTML OUTPUT (includes Local Party name)
    //used freeformatter.coms html escape / un-escaper to fix this code
    outputHeader.innerHTML =
    "&lt;style&gt; body{color: #333333;font-family: Helvetica, sans-serif; font-size: 14px;line-height: 150%;text-align: left;padding: 20px 20px 0px; max-width:800px;margin:0 auto;} h1 {background-color: #f04e98;color:white;padding:10px;text-align:center;line-height:1.6;} h2 {background-color: #6ab023;color:white;padding:5px;text-align:center;} a {color: #6AB023;} strong {color: #6AB023;} hr {border: 1px solid #cccccc;}tr{border-bottom:1px,solid,#ddd} &lt;/style&gt; &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;margin:0px;&quot;&gt; &lt;tr style=&quot;background-color: #6AB023;&quot;&gt; &lt;td valign=&quot;middle&quot; style=&quot;margin:auto auto&quot;&gt; &lt;div style=&quot;width:100%;text-align:center&quot;&gt; &lt;center&gt; &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;margin:0px;&quot;&gt; &lt;tr&gt; &lt;td valign=&quot;middle&quot;&gt; &lt;div style=&quot;color:#FFFFFF;font-size: 30px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;margin-left:20px;&quot;&gt;"
    + localParty 
    + "&lt;/div&gt; &lt;/td&gt; &lt;td valign=&quot;middle&quot; style=&quot;font-size: 0&quot;&gt; &lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/075/051/original/GPEW-nostrap-wt_(1)_logoonly.png&quot; style=&quot;width:80px; margin:5px&quot; /&gt; &lt;/td&gt; &lt;td valign=&quot;middle&quot;&gt; &lt;div style=&quot;color:#FFFFFF;font-size: 30px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;margin-right:20px;&quot;&gt; Green Party &lt;/div&gt; &lt;/td&gt;&lt;/tr&gt; &lt;/table&gt; &lt;/center&gt; &lt;/div&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr style=&quot;background-color: #FFFFFF;&quot;&gt; &lt;td valign=&quot;top&quot; style=&quot;padding:0px 0px 40px;&quot;&gt; &lt;!--[if mso]&gt; &lt;center&gt; &lt;table&gt; &lt;tr&gt; &lt;td width=&quot;600&quot;&gt; &lt;![endif]--&gt; &lt;div style=&quot;color: #333333;font-family: Helvetica, sans-serif; font-size: 14px;line-height: 150%;text-align: left;padding: 20px 20px 0px; max-width:600px;margin:0 auto;&quot;&gt;"
    ;

//FOOTER HTML OUTPUT (includes Local Party name, URL links (with if statements to check if blank) and imprint information)
outputFooter.innerHTML =
    "&lt;/div&gt; &lt;!--[if mso]&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;/center&gt; &lt;![endif]--&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=&quot;background: #6ab023&quot;&gt; &lt;td valign=&quot;middle&quot;&gt;&lt;div style=&quot;width:100%;text-align:center&quot;&gt;&lt;center&gt;&lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;margin:0px;padding:10px 0&quot;&gt;&lt;tr&gt;&lt;td valign=&quot;middle&quot;&gt;&lt;div style=&quot;color:#FFFFFF;font-size: 16px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;margin-left:20px;&quot;&gt;"

    + localParty

    + "&lt;/div&gt;&lt;/td&gt;&lt;td valign=&quot;middle&quot; style=&quot;font-size: 0&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/075/051/original/GPEW-nostrap-wt_(1)_logoonly.png&quot; style=&quot;width:40px; margin:5px&quot; /&gt;&lt;/td&gt;&lt;td valign=&quot;middle&quot;&gt;&lt;div style=&quot;color:#FFFFFF;font-size: 16px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;&quot;&gt;Green Party&lt;/div&gt;&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;&lt;div style=&quot;background-color:#6ab023;margin-top:-10px;&quot;&gt;&lt;div&gt;";

//If any of the social media fields are empty, don't include the additional HTML, otherwise include an image of the relevant social media, with a link
if (facebookURL != "") {outputFooter.innerHTML +="&lt;a href=&quot;"+facebookURL+"&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/046/426/original/facebook.png&quot; width=&quot;5%&quot; style=&quot;width:5%; padding:10px&quot; /&gt;&lt;/a&gt;"};

if (twitterURL != "") {outputFooter.innerHTML +="&lt;a href=&quot;"+twitterURL+"&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/046/428/original/twitter.png&quot; width=&quot;5%&quot; style=&quot;width:5%; padding:10px&quot; /&gt;&lt;/a&gt;"};

if (instagramURL != "") {outputFooter.innerHTML +="&lt;a href=&quot;"+instagramURL+"&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/047/891/original/insta.png&quot; width=&quot;5%&quot; style=&quot;width:5%; padding:10px&quot; /&gt;&lt;/a&gt;"};

if (youtubeURL != "") {outputFooter.innerHTML +="&lt;a href=&quot;"+youtubeURL+"&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/047/893/original/youtube.png&quot; width=&quot;5%&quot; style=&quot;width:5%; padding:10px&quot; /&gt;&lt;/a&gt;"};

if (whatsappURL != "") {outputFooter.innerHTML +="&lt;a href=&quot;"+whatsappURL+"&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/047/892/original/whatsapp.png&quot; width=&quot;5%&quot; style=&quot;width:5%; padding:10px&quot; /&gt;&lt;/a&gt;"};

//Add general footer content, inserting the website URL and local party name for 'Learn more about X local party here' link to website
outputFooter.innerHTML +=
    "&lt;/div&gt;&lt;div style=&quot;color:#FFFFFF;font-size: 16px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;&quot;&gt;&lt;a style=&quot;color:#FFFFFF&quot; href=&quot;"+websiteURL+"&quot;&gt;Find out more about "+localParty+" Green Party here&lt;/a&gt;&lt;br&gt;&lt;br&gt;Not a member? &lt;a style=&quot;color:#FFFFFF&quot; href=&quot;https://join.greenparty.org.uk/&quot;&gt;You can join today!&lt;/a&gt;&lt;br&gt;&lt;br&gt;&lt;/div&gt; &lt;/div&gt; &lt;div style=&quot;background: #FFFFFF;color: #333333;font-family: Arial,sans-serif;font-size: 10px;line-height: 125%;text-align: left;padding:5px&quot;&gt; You received this email because you signed up to our mailing list on our website, took a campaign action, gave us your address at an event or because you're a member of the Green Party. ";
    
//If imprintText is blank, use default imprint, else use the inputted text
if (imprintText != "") {outputFooter.innerHTML += imprintText;
} else {
    outputFooter.innerHTML +="Published and promoted by Chris Rose on behalf of the Green Party, both at The Biscuit Factory, Unit 215 J Block, 100 Clements Road, London, SE16 4DG.";}

//Add closing tag as escaped HTML
outputFooter.innerHTML += "&lt;/div&gt";

//close function 
};
*/




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
if (facebookURL != "") {outputFooter.innerHTML +=""
+facebookURL+
""
};

if (twitterURL != "") {outputFooter.innerHTML +=""+twitterURL+""};

if (instagramURL != "") {outputFooter.innerHTML +=""+instagramURL+""};

if (youtubeURL != "") {outputFooter.innerHTML +=""+youtubeURL+""};

if (whatsappURL != "") {outputFooter.innerHTML +=""+whatsappURL+""};

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

//This function needs non escaped HTML copied/input
function createPreview(){
    document.getElementById("previewWindow").innerHTML = headerHTML.replace('<style>body{color: #333333;font-family: Helvetica, sans-serif;font-size: 14px;line-height: 150%;text-align: left;padding: 20px 20px 0px; max-width:800px;margin:0 auto;}    h1 {background-color: #f04e98;color:white;padding:10px;text-align:center;line-height:1.6;}     h2 {background-color: #6ab023;color:white;padding:5px;text-align:center;}  a {color: #6AB023;}strong {color: #6AB023;} hr {border: 1px solid #cccccc;}tr{border-bottom:1px,solid,#ddd}</style> ','')
   //Generic text to show how headings, subheadings, paragraphs, and links will display
   + "<h1>Main Heading</h1>"
   +"<h2>Sub heading</h2>"
   + "<p>Here is a preview of what your header and footer look like with the input settings. To update the preview, please click 'Generate Header and Footer'.</p>"
   + "<p>Links will display <a href=''>like this.</a></p>"

  + unescapeHTML(outputFooter.innerHTML);
}

function unescapeHTML(str){
   var doc = new DOMParser().parseFromString(str, "text/html");
   return doc.documentElement.textContent;
}