<!DOCTYPE html>
<html class="container" lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
<!--
<script>
    var al = parseInt(prompt ("Введите первое значение:"))
    var bl = parseInt(prompt ("ВВедите воторое значение:"))
    alert(al+bl);
</script>

<script>
var qa = { 
1922: "В каком году был создан СССР?",
1945: "В каком году закончилась Великая Отечественная Война?", 
1991: "В каком году СССР распался?"
};
var totalAnswers = 0;

for (var i in qa){
var answer = parseInt(prompt(qa[i]));
if(answer == i) {
totalAnswers++;
}
}
alert('Вы ответили на ' + totalAnswers + ' вопросов из ' + Object.keys(qa).length);

</script>
-->

<script>
    alert("Давай поиграем")
    alert("Попробуй отгадать 3 загадки");
    alert("Готов? - Поехали")
    var res= 0
    alert("Первая загадка");
    var name1=prompt("И зимой и летом, одним цветом");
    if(name1=="Елка") {
    alert("Молодец!");
    var res=res+1;
    } else { alert("Увы, неверно..");
    }
    
    var res= 0
    alert("вторая загадка");
    var name2=prompt("Сколько пальцев у человека?");
    if(name2=="20") {
    alert("Верный ответ!");
    var rest=res+1;
    } else { alert("Опять Неверно! Похоже, что ты снова ошибся..");
    }
    
    var res= 0
    alert("третья загадка");
    var name3=prompt("На раскрашенных страницах Много праздников хранится.");
    if(name3=="Календарь") {
    alert("Молодец");
    var resf=res+1;
    } else { alert("Похоже ты любишь неправильные ответы :)");
    }
    alert("Посмотрим на твои результаты")
    if(res==3){
        alert("3/3 - Молодец, так держать");
    }
    if(res==2){
        alert("2/3 - Неплохо. В следующий раз будет лучше");
    }
    
    if(res==1){
        alert("1/3 - Не пережива)главное, у тебя есть правильные ответы");
    }
    
    if(res==0) {
         alert("0/3 - Чтож, любой результат тоже результат. Увы, ты проиграл, так как не угадал ни одной загадки.");
    }
    alert("Спасибо и до новых встреч");
    alert("КОНЕЦ игры");
</script>

</body>
</html>
