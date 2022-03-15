import React from 'react';

export const Main = () => {
    return (
        <div> 
        
         <title>Авторизация</title> 
        
         
        <body> 
         <header> 
         <div class="LOGO2"> 
         {/* <img src="image/2.png">  */}
         </div> 
         </header> 
         <center> 
         
         <h1> 
         Авторизация 
         </h1> 
         <div class="parent"> 
         <form> 
         <div class="form-group"> 
         <label for="exampleInputEmail1">Телефон</label> 
         {/* <input type="phone" class="form-control" id="exampleInputP  */}
         {/* hone1" placeholder="+7 (XXX) XXX XXXX">  */}
         </div> 
         <div class="form-group"> 
         <label for="exampleInputPassword1">Пароль</label> 
         {/* <input type="password" class="form-control" id="exampleInputPassword1" placeholder="**">  */}
         </div> 
         <div class="form-check"> 
         {/* <input type="checkbox" class="form-check-input" id="exampleCheck1">  */}
         <label class="form-check-label" for="exampleCheck1">Запомнить</label> 
         </div> 
         <button type="submit" class="btn btn-outline-warning">Войти</button> 
         <div class="form-group"> 
         <button type="submit" class="btn btn-outline-dark" href="http://127.0.0.1:5500/SEPD/index0/index.html">Регистрация</button> 
         
         </div> 
         </form> 
         </div> 
         
         </center> 
         
         <main> 
         
         </main> 
           
        </body> 
        </div>
    )
}
