const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

require('dotenv').config();

 
async function EPH(){

       // Buscar un Producto2
       var searchString = "camisas";
           
       let driver = await new Builder().forBrowser("chrome").build();
               
       //await driver.get(process.env.URL_PROD);
       await driver.get(process.env.URL_DEV);        

        //To send a search query by passing the value in searchString.
        await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);
       
        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Titulo del sitio es :',title);

        //Elegir un producto del PLP
        console.log("Elige el producto en la grilla")
        await driver.findElement(By.xpath("//*[@id='maincontent']/section/section/div[7]/div/div[1]/div[1]/a/div/div[2]/div/picture/img")).click();
                       
       //Boton agregar al carrito
       await driver.sleep(3000);
       console.log("Boton agregar al carrito")
       await driver.findElement(By.xpath("//*[@id='maincontent']/div[2]/div[1]/div[3]/div/div[3]/div[2]/button")).click();
      
       //Ir al carrito
       console.log("Ir al carrito")
       await driver.sleep(4000);
       await driver.findElement(By.xpath("//*[@id='body']/div[2]/header/div[5]/div/div/div[1]/a")).click();
       //Boton comprar del carrito
       console.log("Boton comprar del carrito")
       await driver.findElement(By.xpath("//*[@id='maincontent']/div[2]/div[2]/div[3]/div/div[3]/a")).click();
       await driver.sleep(2000);
       //Ingresar Mail
        console.log("Ingresa mail")
       var login = process.env.LOGIN_DEV;
       await driver.findElement(By.name("dwfrm_profile_login_email")).sendKeys(login,Key.RETURN);
       
        //Ingresa PAssword 
        console.log("Ingresa password");
       var passw = process.env.PASSWORD_DEV;
       await driver.findElement(By.name("dwfrm_profile_login_password")).sendKeys(passw,Key.RETURN);
       
       await driver.sleep(2000);
       
       console.log("Seleccionar Tipo de Envio");
        await driver.findElement(By.xpath("//*[@id='checkout-main']/div/div[1]/div[4]/button[1]")).click();
               
        await driver.sleep(2000);
        
        
        await driver.sleep(7000)
        console.log("Seleccionar Tipo de tarjeta");
        await driver.findElement(By.xpath("//*[@id='dwfrm_billing']/div[1]/div[1]/div/ul/li[2]/a/img")).click();
       
        
        console.log("Seleccionar Tu tarjeta");
        await driver.findElement(By.xpath("//*[@id='credit-card-content']/fieldset/div/div[1]/div/input")).click();
       

        await driver.sleep(3000);
        //Boton confirmar Orden 
        console.log("Boton confirmar Orden");
        await driver.findElement(By.xpath("//*[@id='checkout-main']/div/div[1]/div[4]/button[2]")).click();
 
        await driver.sleep(3000);
        //Boton Finalizar Orden 
        console.log("Boton finalizar Orden");
        await driver.findElement(By.xpath("//*[@id='checkout-main']/div/div[1]/div[5]/button")).click();
       
        await driver.sleep(2000);
       var NumeroOrden = await driver.findElement(By.css("#maincontent > div.l-order_confirm > div.l-order_confirm-main > div.b-confirmation_order > div.b-order_short_details > div.b-order_short_details-column.m-number"));
       
        console.log (NumeroOrden.length)      
        console.log('NumeroOrden:',NumeroOrden);
 
        //It is always a safe practice to quit the browser after execution
       //await driver.quit();
 
}
 
EPH()