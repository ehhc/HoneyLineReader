#HoneyLine Reader
The HoneyLine Reader is a smale hobby project aimed to modify the color of a text in a way that it is easyer to read afterwards. 

I used the idea from beelinereader.com and implemented it with plain JavaScript and CSS

##Hint
The addon is only available for firefox because I've used some webkit specific css promperties.

##Installation
To run the app you need jpm (see https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation).
Because the app is not signed you need the web developer version of firefox which can handle unsigned apps.
Afterwards you can test the app with jpm run -b "C:\Program Files\Firefox Developer Edition\firefox.exe"

##Known Problems
- Only works with Firefox
- sets the display-style to inline -> might break the layout
- performance??
- resizing??