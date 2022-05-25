function createHeaderAndFooter(){
    var localParty = document.getElementsByName("localParty")[0].value;
    var websiteURL = document.getElementsByName("websiteURL")[0].value;
    var imprintText = document.getElementsByName("imprintText")[0].value;
    var facebookURL = document.getElementsByName("facebookURL")[0].value;
    var twitterURL = document.getElementsByName("twitterURL")[0].value;
    var instagramURL = document.getElementsByName("instagramURL")[0].value;
    var youtubeURL = document.getElementsByName("youtubeURL")[0].value;
    var whatsappURL = document.getElementsByName("whatsappURL")[0].value;

    //HEADER HTML OUTPUT (includes Local Party name)
    document.getElementById("outputHeader").innerHTML =
    "&lt;style&gt; body{color: #333333;font-family: Helvetica, sans-serif; font-size: 14px;line-height: 150%;text-align: left;padding: 20px 20px 0px; max-width:800px;margin:0 auto;} h1 {background-color: #f04e98;color:white;padding:10px;text-align:center;line-height:1.6;} h2 {background-color: #6ab023;color:white;padding:5px;text-align:center;} a {color: #6AB023;} strong {color: #6AB023;} hr {border: 1px solid #cccccc;}tr{border-bottom:1px,solid,#ddd} &lt;/style&gt; &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;margin:0px;&quot;&gt; &lt;tr style=&quot;background-color: #6AB023;&quot;&gt; &lt;td valign=&quot;middle&quot; style=&quot;margin:auto auto&quot;&gt; &lt;div style=&quot;width:100%;text-align:center&quot;&gt; &lt;center&gt; &lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;margin:0px;&quot;&gt; &lt;tr&gt; &lt;td valign=&quot;middle&quot;&gt; &lt;div style=&quot;color:#FFFFFF;font-size: 30px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;margin-left:20px;&quot;&gt;"
    + localParty 
    + "&lt;/div&gt; &lt;/td&gt; &lt;td valign=&quot;middle&quot; style=&quot;font-size: 0&quot;&gt; &lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/075/051/original/GPEW-nostrap-wt_(1)_logoonly.png&quot; style=&quot;width:80px; margin:5px&quot; /&gt; &lt;/td&gt; &lt;td valign=&quot;middle&quot;&gt; &lt;div style=&quot;color:#FFFFFF;font-size: 30px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;margin-right:20px;&quot;&gt; Green Party &lt;/div&gt; &lt;/td&gt;&lt;/tr&gt; &lt;/table&gt; &lt;/center&gt; &lt;/div&gt; &lt;/td&gt; &lt;/tr&gt; &lt;tr style=&quot;background-color: #FFFFFF;&quot;&gt; &lt;td valign=&quot;top&quot; style=&quot;padding:0px 0px 40px;&quot;&gt; &lt;!--[if mso]&gt; &lt;center&gt; &lt;table&gt; &lt;tr&gt; &lt;td width=&quot;600&quot;&gt; &lt;![endif]--&gt; &lt;div style=&quot;color: #333333;font-family: Helvetica, sans-serif; font-size: 14px;line-height: 150%;text-align: left;padding: 20px 20px 0px; max-width:600px;margin:0 auto;&quot;&gt;"
    ;

//FOOTER HTML OUTPUT (includes Local Party name, URL links (with if statements to check if blank) and imprint information)
document.getElementById("outputFooter").innerHTML =
    "&lt;/div&gt; &lt;!--[if mso]&gt; &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt; &lt;/center&gt; &lt;![endif]--&gt;&lt;/td&gt;&lt;/tr&gt;&lt;tr style=&quot;background: #6ab023&quot;&gt; &lt;td valign=&quot;middle&quot;&gt;&lt;div style=&quot;width:100%;text-align:center&quot;&gt;&lt;center&gt;&lt;table border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot; style=&quot;margin:0px;padding:10px 0&quot;&gt;&lt;tr&gt;&lt;td valign=&quot;middle&quot;&gt;&lt;div style=&quot;color:#FFFFFF;font-size: 16px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;margin-left:20px;&quot;&gt;"

    + localParty

    + "&lt;/div&gt;&lt;/td&gt;&lt;td valign=&quot;middle&quot; style=&quot;font-size: 0&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/075/051/original/GPEW-nostrap-wt_(1)_logoonly.png&quot; style=&quot;width:40px; margin:5px&quot; /&gt;&lt;/td&gt;&lt;td valign=&quot;middle&quot;&gt;&lt;div style=&quot;color:#FFFFFF;font-size: 16px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;&quot;&gt;Green Party&lt;/div&gt;&lt;/td&gt;&lt;/tr&gt; &lt;/table&gt;&lt;div style=&quot;background-color:#6ab023;margin-top:-10px;&quot;&gt;&lt;div&gt;";

//If any of the social media fields are empty, don't include the additional HTML, otherwise include an image of the relevant social media, with a link
if (facebookURL != "") {document.getElementById("outputFooter").innerHTML +="&lt;a href=&quot;"+facebookURL+"&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/046/426/original/facebook.png&quot; width=&quot;5%&quot; style=&quot;width:5%; padding:10px&quot; /&gt;&lt;/a&gt;"};

if (twitterURL != "") {document.getElementById("outputFooter").innerHTML +="&lt;a href=&quot;"+twitterURL+"&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/046/426/original/twitter.png&quot; width=&quot;5%&quot; style=&quot;width:5%; padding:10px&quot; /&gt;&lt;/a&gt;"};

if (instagramURL != "") {document.getElementById("outputFooter").innerHTML +="&lt;a href=&quot;"+instagramURL+"&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/046/426/original/insta.png&quot; width=&quot;5%&quot; style=&quot;width:5%; padding:10px&quot; /&gt;&lt;/a&gt;"};

if (youtubeURL != "") {document.getElementById("outputFooter").innerHTML +="&lt;a href=&quot;"+youtubeURL+"&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/046/426/original/youtube.png&quot; width=&quot;5%&quot; style=&quot;width:5%; padding:10px&quot; /&gt;&lt;/a&gt;"};

if (whatsappURL != "") {document.getElementById("outputFooter").innerHTML +="&lt;a href=&quot;"+whatsappURL+"&quot;&gt;&lt;img alt=&quot;&quot; src=&quot;https://actionnetwork.org/user_files/user_files/000/046/426/original/whatsapp.png&quot; width=&quot;5%&quot; style=&quot;width:5%; padding:10px&quot; /&gt;&lt;/a&gt;"};

//Add general footer content, inserting the website URL and local party name for 'Learn more about X local party here' link to website
document.getElementById("outputFooter").innerHTML +=
    "&lt;/div&gt;&lt;div style=&quot;color:#FFFFFF;font-size: 16px; line-height:100%;text-align: center;vertical-align:middle;font-family: Helvetica,sans-serif;&quot;&gt;&lt;a style=&quot;color:#FFFFFF&quot; href=&quot;"+websiteURL+"&quot;&gt;Find out more about "+localParty+" Green Party here&lt;/a&gt;&lt;br&gt;&lt;br&gt;Not a member? &lt;a style=&quot;color:#FFFFFF&quot; href=&quot;https://join.greenparty.org.uk/&quot;&gt;You can join today!&lt;/a&gt;&lt;br&gt;&lt;br&gt;&lt;/div&gt; &lt;/div&gt; &lt;div style=&quot;background: #FFFFFF;color: #333333;font-family: Arial,sans-serif;font-size: 10px;line-height: 125%;text-align: left;padding:5px&quot;&gt; You received this email because you signed up to our mailing list on our website, took a campaign action, gave us your address at an event or because you're a member of the Green Party. ";
    
//If imprintText is blank, use default imprint, else use the inputted text
if (imprintText != "") {document.getElementById("outputFooter").innerHTML += imprintText;
} else {
    document.getElementById("outputFooter").innerHTML +="Published and promoted by Chris Rose on behalf of the Green Party, both at The Biscuit Factory, Unit 215 J Block, 100 Clements Road, London, SE16 4DG.";}

//Add closing tag as escaped HTML
document.getElementById("outputFooter").innerHTML += "&lt;/div&gt";

//close function 
}