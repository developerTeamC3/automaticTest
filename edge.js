const {By,Key,Builder} = require("selenium-webdriver");
const edge = require('selenium-webdriver/edge');
let service = new edge.ServiceBuilder("/chromedriver/msedgedriver.exe");
require('dotenv').config();

 
async function dexter(){

       // Buscar un Producto
       var searchString = "NI_CU4826-002";
           
       let driver = await new Builder()
                .setEdgeService(service)
                .forBrowser('MicrosoftEdge')
                .build();
         
        await driver.get("https://www.dexter.com.ar");
        

        //To send a search query by passing the value in searchString.
        await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);
 
        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);

        //Elegir Talle 41
        console.log("Elege el producto en la grilla")
        await driver.findElement(By.xpath("//*[@id='product-search-results']/div[2]/div[2]/div[2]/div[1]/div/div/div[1]/a[1]")).click();
        
        await driver.sleep(2000);
       //Boton comprar PDP
       console.log("Elige el talle 41")
        await driver.findElement(By.xpath("//*[@id='size-1']/div[1]/li[6]")).click();
        
       //Boton agregar al carrito
       await driver.sleep(3000);
       console.log("Boton agregar al carrito")
       await driver.findElement(By.xpath("//*[@id='maincontent']/div/div[2]/div[3]/div[5]/div[8]/div/div/div/div/div[1]/button")).click();
      
       //Ir al carrito
       console.log("Ir al carrito")
       await driver.sleep(3000);
       await driver.findElement(By.xpath("/html/body/div[1]/header/nav/div[1]/div/div/div[2]/div[1]/div[1]/div[3]/div[1]/a")).click();
   
              
       //Ir al carrito
       console.log("Boton comprar del carrito")
       await driver.findElement(By.xpath("//*[@id='maincontent']/div[3]/div[1]/div[2]/div[9]/div/div/a")).click();
       //*[@id="mainContainer"]/header/nav/div[1]/div/div[3]/div/div/div[1]/div[3]/div[1]/a
       
        //Ingresar Mail
        console.log("Ingresa mail")
       
       var login = process.env.LOGIN;
       await driver.findElement(By.name("loginEmail")).sendKeys(login,Key.RETURN);

        //Ingresa PAssword 
        console.log("Ingresa password");
       var passw = process.env.PASSWORD;
       await driver.findElement(By.name("loginPassword")).sendKeys(passw,Key.RETURN);
       
       await driver.sleep(5000);
       await driver.findElement(By.xpath("//*[@id='checkout-main']/div[3]/div[1]/div[8]/div/div/button[1]")).click();
      
        //Seleccionar Envio
        console.log("Seleccionar Envio");
        var title = await driver.getTitle();
        console.log('Formulario de Envio:',title);

        console.log("Seleccionar Tipo de Envio");
        await driver.findElement(By.xpath("//*[@id='null']/fieldset[4]/div[2]/div[3]/label")).click();

        await driver.sleep(3000);
        //await driver.findElement(By.xpath("//*[@id='checkout-main']/div[3]/div[1]/div[8]/div/div/button[2]")).click();
        //await driver.sleep(3000);
        //Ingresa CVC Tarjeta 
        console.log("Ingresa CVC Tarjeta");
        var CVC = "123";
        await driver.findElement(By.id("saved-payment-security-code")).sendKeys(CVC);

        await driver.sleep(3000);
        //Boton confirmar Orden 
        console.log("Boton confirmar Orden");
        await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[3]/div[1]/div[8]/div/div/button[2]")).click();
 
        await driver.sleep(5000);
        //Boton Finalizar Orden 
        console.log("Boton finalizar Orden");
        await driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[3]/div[1]/div[8]/div/div/div/button")).click();

        await driver.sleep(2000);
        var NumeroOrden = await driver.findElement(By.className("summary-details order-number")).getText();
        console.log('NumeroOrden:',NumeroOrden);
 
        //It is always a safe practice to quit the browser after execution
       await driver.quit();
 
}
 
dexter()