var name = prompt('Ваше імя?','Ваше імя');
var time = prompt('Час проведення зустрічі?','Введіть час зустрічі');
var place = prompt('Місце проведення?', 'Введіть місце проведення зустрічі');
var event = prompt('Яка подія Вас цікавить?', 'Подія');
alert(name + ' has a ' + event + ' at ' + time + ' іn ' + place);
https://jsfiddle.net/n4mdoaz9/


var x1 = prompt('Enter x1');
var y1 = prompt('Enter y1');
var x2 = prompt('Enter x2');
var y2 = prompt('Enter y2');
var result = 0 ;
result = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))
alert('The distance between points A('+x1+','+y1+')  B('+x2+','+y2+') is '  + result);
https://jsfiddle.net/tvz6coxv/



for(var i = 1;i <= 10; ++i) 
{
    for(var j = 1; j <= i; ++j)
   
        document.write(' # '); 
    document.write('<br>'); 
};
https://jsfiddle.net/zz9x6f7z/





var amper = '# # # # #';
  desk = 1;
  while (desk < 8) {
    if (desk % 2===0) {
      console.log(' ' + amper);
    } else {
      console.log(amper);
    }
    desk++;
  }

  
  
  
  
  
  
var num;
var rand = parseInt(Math.random() * 101);
while (num !== rand) {
num = prompt("Enter the number from 0 to 100:");
if (num === null) {
alert("Lose. The number is "+rand);
return;
}
num = parseInt(num);
if (isNaN(num)) {
alert("You must enter only number.Try again.");
} else if (num > rand) {
alert ("Our number is lower, try again.");
} else if (num < rand) {
alert ("Our number is higher, try again.");
}
}
alert("You are right, the number is " + rand + ".");


https://jsfiddle.net/b4nksjjb/






