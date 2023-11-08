const express= require("express");
const generate=express.Router();
require('dotenv').config();
const apiKey=process.env.apiKey;
const axios = require('axios');


//function 
async function generateEmailDesign(colorScheme,brandingElements,textContent,imageUrl,imagePlacement,imageSize,layoutPreferences,fontChoices,designGuidelines,myName) {
    try {
        if(brandingElements!=""){
            
        var prompt=`[Act as a very creative UI Designer who always creates very amazing css designs even if the instructions are very simple]

        Your task is to Design and Generate HTML and CSS code for a Professional and Stylish Email .
        
        The  Theme should be very appealing and according to the Content.
        
        Design a visually appealing email  that incorporates various elements, colors, and design choices. Here are the following details:
        
        1. Color Scheme: ${colorScheme}.
        
        2. Branding Elements or Logos: Include provided branding elements or logo = (${brandingElements}).
        
        3. Text Content:
           Provide the following text content: ${textContent}.
        
        4. Images:
           Image URL(s) if provided externally: ${imageUrl}.
           Image Placement(s) if provided: ${imagePlacement}.
           Image Size(s) if provided: ${imageSize}.
        
        5. Layout Preferences: ${layoutPreferences}.
        
        6. Typography Choices:
           Preferred Fonts or Typography Choices: ${fontChoices}.
        
        7. Sender Information:
           Name of the sender: ${myName}.
        
        8. Additional Design Guidelines: ${designGuidelines}
        
        9. Add contrasting background colors. The colors should be neutrals.
        
        10.Your goal is to create an HTML and CSS code for a visually appealing email  suitable for newsletters, marketing emails, or professional correspondence. This design should embody sophistication and reflect the content provided.
        
        And here is an very basic example of Syntax but strictly do not copy this design and always design  very different from this:
        <!DOCTYPE html>
        <html>
        <head>
        <style>
        /* CSS styles go here */
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }
        
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #f8f8f8;
          padding: 20px;
          border: 1px solid #ddd;
          box-sizing: border-box;
        }
        
       
        
        
        
        .content {
          padding: 20px;
          background-color: #fff;
        }
        
        .content p {
          line-height: 1.4;
        }
        
        
        
        .footer {
          margin-top: 20px;
          color: #888;
        }
        
        .footer p {
          font-size: 12px;
          line-height: 1.4;
          margin-bottom: 10px;
        }
        
        .footer a {
          color: #888;
          text-decoration: none;
        }
        
        .button {
          display: inline-block;
          background-color: #ff578a;
          color: #fff;
          padding: 10px 15px;
          border-radius: 3px;
          text-decoration: none;
        }
      
      
        @keyframes gradient {
          0% {
            background-position: 0% 100%;
          }
          50% {
            background-position: 100% 0%;
          }
          100% {
            background-position: 0% 100%;
          }
        }
        </style>
        </head>
        <body>
        <!-- Email content here -->
        <div class="container background">
          
          <div class="content">
          
            <p style="color:green;">If this newsletter was forwarded to you, kindly subscribe at this link if you wish to continue receiving future updates.</p>
            <div style="background-color:#f8f8f8; padding:20px;">
              <h2 style="color: #ff578a;">What's in this newsletter?</h2>
              <ul>
                <li>New Feature: <strong>Elevate sales performance and minimize returns with Growth Opportunities</strong></li>
                <li>New Feature: <strong>Enroll in Transparency using your existing serial numbers</strong></li>
                <li>New A+ Content Module: <strong>Premium Navigation Carousel Module</strong></li>
                <li>Spotlight: <strong>A/B test your Brand Story content with Manage Your Experiments</strong></li>
                <li>Use Case: <strong>HexClad doubled sales</strong></li>
              </ul>
            </div>
            <div style="background-color: #e0cdf1; padding:20px;">
              <h3 style="color:#ff578a;">Brand Benefits News</h3>
              <h4 style="color:green;">New Feature: Elevate sales performance and minimize returns with Growth Opportunities</h4>
              <p style="color:green;">Our Return Reduction Recommendations tool in Growth Opportunity enhances the selling experience by addressing issues like purchase abandonment, delays, negative reviews, and unclear product details. It uses data-driven insights to optimize listings, analyze feedback, and answer questions. You receive tailored suggestions, data access, cost insights, benchmarking, and content guidance to enhance product pages, reduce returns, increase sales, and improve customer satisfaction.</p>
              <a href="#" class="button" style="background-color:#ff578a; color:#fff; display:inline-block; padding:10px 15px; border-radius:3px; text-decoration:none;">Learn More</a>
              <br><br>
              <h4 style="color:green;">New Feature: Enroll in Transparency using your existing serial numbers</h4>
              <p style="color:green;">Do you serialize your products? If so, unlocking Transparency’s anti-counterfeiting protections just got easier! Amazon Transparency is a product serialization program that ensures customers only receive authentic and accurate products.</p>
              <a href="#" class="button" style="background-color:#ff578a; color:#fff; display:inline-block; padding:10px 15px; border-radius:3px; text-decoration:none;">Learn More</a>
            </div>
            <div style="background-color: #f8f8f8; padding:20px;">
              <h3 style="color:#ff578a;">New A+ Content Module: Premium Navigation Carousel Module</h3>
              <p style="color:#ff578a;">This new design replaces the buttons with clickable tabs that are highlighted in a translucent overlay on the image. The tab/image of the carousel the customer is currently on is underlined to make the browsing experience clear. In the desktop experience, customers can click on the redesigned tabs or arrows to navigate through elements in the carousel. In the mobile experience, customers can click on the redesigned tabs or swipe horizontally on the image to navigate through elements in the carousel.</p>
            </div>
          </div>
          
          <div class="footer">
            <p>This email is sent by lalit</p> 
          </div>
        </div>
        </body>
        
        
        
        Please note that logos, images, and branding elements should only be included if provided externally. If certain information is not provided, such as images or branding elements, they should not be included in the  to avoid broken links or errors.
        
        Example of theme:
        If the email is regarding Income Tax, then choose the theme according to Income Tax variations and colors and many more things.
        
        You can also convert links into buttons and make images look more beautiful by using borders and shadow effects.
        
        Output:
        Exhaustively Meet the Requirements: Ensure meticulous adherence to all specified requirements, from precise colors and fonts to strategic image placements.
        
        Exclusivity: Exclude any additional text or code not explicitly outlined in the prompt to maintain focus and cleanliness.
        
        Deliverability-Ready Code: Provide HTML and CSS code for the email, impeccably formatted and ready for seamless integration with Nodemailer or similar email deployment tools.
        
        Note:  Don't add any example or fake links as logo or brand eliment like in this:- <img src="brand_logo.png" alt="Logo" class="logo">  which is not provided by me and strictly do not copy the example code or replicate it was just for an example`
        }else{
          console.log("it is ")
var prompt=`[Act as a professional UI Designer]

Your task is to Design and Generate HTML and CSS code for a Professional and Stylish Email .

The  Theme should be very appealing and according to the Content.

Design a visually appealing email  that incorporates various elements, colors, and design choices. Here are the following details:

1. Color Scheme: ${colorScheme}.

2. Your goal is to create an HTML and CSS code for a visually appealing email  suitable for newsletters, marketing emails, or professional correspondence. This design should embody sophistication and reflect the content provided.

3. Text Content:
   Provide the following text content: ${textContent}.

4. Images:
   Image URL(s) if provided externally: ${imageUrl}.
   Image Placement(s) if provided: ${imagePlacement}.
   Image Size(s) if provided: ${imageSize}.

5. Layout Preferences: ${layoutPreferences}.

6. Typography Choices:
   Preferred Fonts or Typography Choices: ${fontChoices}.

7. Sender Information:
   Name of the sender: ${myName}.

8. Additional Design Guidelines: ${designGuidelines}

9. Add contrasting background colors. The colors should be neutrals.

And here is an very basic example of Syntax but strictly do not copy this design and always design  very different from this:
<!DOCTYPE html>
<html>
<head>
<style>
/* CSS styles go here */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f8f8f8;
  padding: 20px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}




.content {
  padding: 20px;
  background-color: #fff;
}

.content p {
  line-height: 1.4;
}



.footer {
  margin-top: 20px;
  color: #888;
}

.footer p {
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 10px;
}

.footer a {
  color: #888;
  text-decoration: none;
}

.button {
  display: inline-block;
  background-color: #ff578a;
  color: #fff;
  padding: 10px 15px;
  border-radius: 3px;
  text-decoration: none;
}



@keyframes gradient {
  0% {
    background-position: 0% 100%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}
</style>
</head>
<body>
<!-- Email content here -->
<div class="container background">
  
  <div class="content">
   
    <p style="color:green;">If this newsletter was forwarded to you, kindly subscribe at this link if you wish to continue receiving future updates.</p>
    <div style="background-color:#f8f8f8; padding:20px;">
      <h2 style="color: #ff578a;">What's in this newsletter?</h2>
      <ul>
        <li>New Feature: <strong>Elevate sales performance and minimize returns with Growth Opportunities</strong></li>
        <li>New Feature: <strong>Enroll in Transparency using your existing serial numbers</strong></li>
        <li>New A+ Content Module: <strong>Premium Navigation Carousel Module</strong></li>
        <li>Spotlight: <strong>A/B test your Brand Story content with Manage Your Experiments</strong></li>
        <li>Use Case: <strong>HexClad doubled sales</strong></li>
      </ul>
    </div>
    <div style="background-color: #e0cdf1; padding:20px;">
      <h3 style="color:#ff578a;">Brand Benefits News</h3>
      <h4 style="color:green;">New Feature: Elevate sales performance and minimize returns with Growth Opportunities</h4>
      <p style="color:green;">Our Return Reduction Recommendations tool in Growth Opportunity enhances the selling experience by addressing issues like purchase abandonment, delays, negative reviews, and unclear product details. It uses data-driven insights to optimize listings, analyze feedback, and answer questions. You receive tailored suggestions, data access, cost insights, benchmarking, and content guidance to enhance product pages, reduce returns, increase sales, and improve customer satisfaction.</p>
      <a href="#" class="button" style="background-color:#ff578a; color:#fff; display:inline-block; padding:10px 15px; border-radius:3px; text-decoration:none;">Learn More</a>
      <br><br>
      <h4 style="color:green;">New Feature: Enroll in Transparency using your existing serial numbers</h4>
      <p style="color:green;">Do you serialize your products? If so, unlocking Transparency’s anti-counterfeiting protections just got easier! Amazon Transparency is a product serialization program that ensures customers only receive authentic and accurate products.</p>
      <a href="#" class="button" style="background-color:#ff578a; color:#fff; display:inline-block; padding:10px 15px; border-radius:3px; text-decoration:none;">Learn More</a>
    </div>
    <div style="background-color: #f8f8f8; padding:20px;">
      <h3 style="color:#ff578a;">New A+ Content Module: Premium Navigation Carousel Module</h3>
      <p style="color:#ff578a;">This new design replaces the buttons with clickable tabs that are highlighted in a translucent overlay on the image. The tab/image of the carousel the customer is currently on is underlined to make the browsing experience clear. In the desktop experience, customers can click on the redesigned tabs or arrows to navigate through elements in the carousel. In the mobile experience, customers can click on the redesigned tabs or swipe horizontally on the image to navigate through elements in the carousel.</p>
    </div>
  </div>
  
  <div class="footer">
    <p>This email is sent by lalit</p> 
  </div>
</div>
</body>



Please note that logos, images, and branding elements should only be included if provided externally. If certain information is not provided, such as images or branding elements, they should not be included in the  to avoid broken links or errors.

Example of theme:
If the email is regarding Income Tax, then choose the theme according to Income Tax variations and colors and many more things.

You can also convert links into buttons and make images look more beautiful by using borders and shadow effects.

Output:
Exhaustively Meet the Requirements: Ensure meticulous adherence to all specified requirements, from precise colors and fonts to strategic image placements.

Exclusivity: Exclude any additional text or code not explicitly outlined in the prompt to maintain focus and cleanliness.

Deliverability-Ready Code: Provide HTML and CSS code for the email , impeccably formatted and ready for seamless integration with Nodemailer or similar email deployment tools.

Note: Don't add any example or fake links as logo or brand eliment like in this:- <img src="brand_logo.png" alt="Logo" class="logo">  which is not provided by me and strictly do not copy the example code or replicate it was just for an example`
        } 
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            temperature: 1.2 ,
            max_tokens: 1500,
            top_p: 1,
            //start: ["<!DOCTYPE html>"],
            stop: ["</html>"],
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.data.choices && response.data.choices.length > 0) {
            const data = response.data.choices[0].message.content;
            return data;
        } else {
            console.log({ msg: 'No valid response from the API' });
            return null; // Return null to indicate an error
        }
    } catch (error) {
        console.error(error.message);
        return null; // Return null to indicate an error
    }
}


/////router
generate.post('/generate-email', async (req, res) => {
    const { colorScheme,brandingElements,textContent,imageUrl,imagePlacement,imageSize,layoutPreferences,fontChoices,designGuidelines,myName } = req.body;

    // if (!colorScheme  || !textContent || !layoutPreferences || !fontChoices || !designGuidelines) {
    //     return res.status(400).json({ error: 'All input fields are required' });
    // }

    try {
        // Call your generateEmailDesign function here or include its logic
        // Note: Make sure to handle errors and send responses appropriately
        const emailDesign = await generateEmailDesign(colorScheme,brandingElements,textContent,imageUrl,imagePlacement,imageSize,layoutPreferences,fontChoices,designGuidelines,myName);
        if (emailDesign !== null) {
            res.send({ emailDesign });
        } else {
            res.status(500).json({ error: 'Failed to generate email design' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Define other routes here if needed
module.exports={
    generate
}
//////////
