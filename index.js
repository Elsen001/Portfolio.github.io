var index = 0;
var text = "Front-end Developer - Kodlaşdırmada sehvlerin aradan qaldırılması Və layihələrin vaxtında tamamlanmasına kömək etmək bacarığımdan Istifadə etmək üçün şirkətlə giriş səviyyəsində bir vəzifə axtaran həvəsli  və təfərrüatlı bir Front-end mühəndisəm."
var speed = 60;



function typeWriter() {
    if (index < text.length) {
      document.getElementById("text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter()