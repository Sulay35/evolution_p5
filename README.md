# Evolution p5
_population evolution over the time with p5.js library_

This project is inspired by [primer](https://www.youtube.com/channel/UCKzJFdi57J53Vr_BkTfN3uQ "Primer's channel") 

[preview](https://editor.p5js.org/Sulay35/full/mzlkp4mo "P5.js web editor preview")

![alt text][image1]

[image1]:https://github.com/Sulay35/evolution_p5/blob/master/images/Capture.PNG "blobs are happy"

## Libraries :
+ [P5.js](https://p5js.org/ "P5.js library for creative coding")
+ [Chart.js](https://www.chartjs.org/ "Chart.js library flexible JavaScript charting")


## Tracker :
+ _pull_request_1_ : Version with the blob class build
+ _pull_request_2_ : Version with the blob rate evolution system 
+ _pull_request_3_ : Version with mutation rate added 
  - blue blobs can mutate into red or green blob with differents rates
+ _pull_req_chancerate_ : Version with chance rate fixed 
  - the spontaneous rates are now based on probabilities but depends of random
+ _pull_request_5_chart_ : statistics added :
  - Using `chart.js`
  - `Libraries` folder added
  - `Chart.js` javascript file for chart configuration 
  - TO ADD : 
    + Proportion chart because it's only number of blobs -> percentages
    + Y axis responsive
  
## Features to add :
+ Rates can be inputed in a table
+ speed of generation 
+ number of each population
+ statistics ✅
+ crowding coeficient
+ pause generating : `setInterval and clearInterval`
+ Max tracking
