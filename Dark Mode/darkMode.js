    var count = 0;
    function runDarkmode(){
      count++;
      if(count%2!=0){
        document.body.setAttribute(
        "style","color:#808080; background-color:#1f1a24; font-size:2rem"
        ); 
      }
      else{
        document.body.setAttribute(
        "style","color:#000000; background-color:#ffffff; font-size:1rem"
        ); 
      }
    }