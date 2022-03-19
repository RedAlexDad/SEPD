$(function() {
    $(«#dialog»).dialog({
       bgiframe: true,
       modal: true,
       buttons: {
          Ok: function() {
            const mongoose = require('mongoose');

            const Account = new mongoose.Schema({
             // id: {type:Number, required:true},
             login: {type:String, required:true},
             password: {type:String, required:true}
             password: {type:String, required:true},
            
             first_name: {type:String, required:true},
             second_name: {type:String, required:true},
             third_name: {type:String, required:true}, 
            
             type_user: {type:Number, required:true}, 
            })
            
            module.exports = mongoose.model('Account', Account)
            10:46
            
            
          }
       }
    });

});



<!DOCTYPE HTML PUBLIC 
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html">
<link rel="stylesheet" href="style.css"  type="text/css">
<title>MySQL</title>
</head>
<body>
<form action="rec.php" method="post">
<input type="text" name="author" placeholder="Телефон" size="30"><b/>
<b/>
<input type="text" name="title" placeholder="Пароль" size="30"><b/>
<b/>
<input  type="text" name="text" placeholder="Запомнить" size="30"><b/>
<b/>
<input id="submit" type="submit" value="Войти"><b/>
</form>
</body>
</html>
<?php 
require 'connect.php'; // Подключает файл с логином/паролем и именем БД
mysql_set_charset('utf8'); // Устанавливает кодировку клиента
$author = trim($_REQUEST['author']); // Получает содержимое поля "Автор" и убирает возможные пробелы в начале строки
$title = trim($_REQUEST['title']); // То же самое для поля "Название"
$text = mysql_real_escape_string(trim($_REQUEST['text'])); // То же самое для поля "Текст" + (см.ниже)    
$insert_sql = "INSERT INTO polka1 (author, title, text)" . // Указывает в какую таблицу и в какие поля ...
                   "VALUES('{$author}', '{$title}', '{$text}');"; // ...записывать данные
mysql_query($insert_sql); // отправляем данные в базу
?>
<html>
<head>
<META HTTP-EQUIV='Refresh' CONTENT='1,URL=index.html'> <!-- Возврат обратно -->
</head>
<body>
</body>
</html>