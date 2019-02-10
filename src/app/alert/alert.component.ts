import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(navigator.userAgent)
    var browser=navigator.userAgent;
    var browsersrch = browser.search('Edge')
    console.log(browsersrch)
    
    if(browsersrch == -1){
      // document.getElementById("cdk-overlay-0").className="cdk-overlay-pane-firefox"
    var browsersrch = browser.search('Firefox')
      if(browsersrch ==-1){
          var browsersrch = browser.search('Chrome')
          if(browsersrch == -1){
            document.getElementById('alerttxt').innerHTML="Browser not supported";
            var element=document.getElementById('cdk-overlay-0')
            element.classList.add('cdk-overlay-pane')
          }
      else{
        var element=document.getElementById('cdk-overlay-0')
        element.classList.add('cdk-overlay-pane_chrome')
      }    
        
      }
      else{
        var element=document.getElementById('cdk-overlay-0')
        element.classList.add('cdk-overlay-pane_firefox')
      }
      
    }
    else{
      // document.getElementById("cdk-overlay-0").className="cdk-overlay-pane-chrome"
      var element=document.getElementById('cdk-overlay-0')
      element.classList.add('cdk-overlay-pane')
    }
  }

}
