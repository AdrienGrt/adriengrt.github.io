$(document).ready(function(){
    $('.dial').each(function () { 
  
              var elm = $(this);
              var color = elm.attr("data-fgColor");  
              var perc = elm.attr("value");  
  
              elm.knob({ 
                   'value': 0, 
                    'min':0,
                    'max':100,
                    "skin":"tron",
                    "readOnly":true,
                    "thickness":.1,                 'dynamicDraw': true,                "displayInput":false
              });
  
              $({value: 0}).animate({ value: perc }, {
                  duration: 2000,
                  easing: 'swing',
                  progress: function () {                  elm.val(Math.ceil(this.value)).trigger('change')
                  }
              });
  
              //circular progress bar color
              $(this).append(function() {
                  elm.parent().parent().find('.circular-bar-content').css('color',color);
                  elm.parent().parent().find('.circular-bar-content label').text(perc+'%');
              });
  
              });
     
    function progressBar(percent, $element) {
      var progressBarWidth = percent * $element.width() / 100;
      $element.find('div').animate({ width: progressBarWidth }, 1500).html(percent + "%&nbsp;");
    }
    
    progressBar(75, $('#progressBar'));
    
    progressBar(25, $('#progressBar2'));
    
   });

   const numb = document.querySelector(".number");
  

setInterval(() => {
  if(counter == 100 ){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 80);


let number = document.getElementById('nombre')
let counter = 0;

setInterval(()=>{
    counter+=1;
    number.innerHTML = `${counter}%`;
});