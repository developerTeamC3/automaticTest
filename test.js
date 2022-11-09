const {By,Key,Builder}  = require('selenium-webdriver');
//firefox = require('selenium-webdriver/firefox');

const driver_fox = new Builder().forBrowser('firefox').build();


//let driver_chr = new Builder().forBrowser("chrome").build();
//let driver_fx =  new Builder().forBrowser("MicrosoftEdge").build();
//let driver_fox = new Builder().forBrowser("firefox").build();


//searchTest(driver_fx);
//searchTest(driver_chr);
searchTest(driver_fox);


function searchTest(driver) {
  driver.get('https://www.google.com.ar/');

// print the title
driver.getTitle().then(title => console.log(title));

// close the browser
driver.quit();
}
