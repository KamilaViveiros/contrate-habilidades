function login(e) {
    e.preventDefault()
    var done=0;
    var usuario = document.getElementsByName('email')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('senha')[0].value;
    seha=senha.toLowerCase();
    if (usuario=="kamila.viveiros20@gmail.com" && senha=="123") {
      window.location="vagas.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }

  function cadastrox(e) {
      e.preventDefault()
    var done=0;
    var usuario = document.getElementsByName('nome')[0].value;
    usuario=usuario.toLowerCase();
    var email= document.getElementById('inputEmail1').value;
    email=email.toLowerCase();
    var senha= document.getElementById('inputPassword1').value;
    seha=senha.toLowerCase();
    if (usuario=="kamila" && email=="kamila.viveiros20@gmail.com" && senha=="123" ) {
      window.location="selecao.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }