function verificar(){
    var foto = document.getElementById('imagem')
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var result = document.querySelector('div#resp')

    if(fAno.value.length == 0 || fAno.value > ano){

        alert("Error, verifique os dados alocados.")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fAno.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //CRIANÇA
                foto.innerHTML = '<img id="imgteste" src="crianca-homem.jpg">'


            }else if (idade > 11 && idade <= 21){
                //Adolecente
                foto.innerHTML = '<img id="imgteste" src="adolescente-homem.jpg">'


            }else if (idade > 21 && idade <= 70){
                //Adulto
                foto.innerHTML = '<img id="imgteste" src="adulto-homem.jpg">'


            }else {
                //Idoso
                foto.innerHTML = '<img id="imgteste" src="idoso-homem.jpg">'


            }

            }else {
            genero ='Mulher'
            if(idade >= 0 && idade <= 10){
                //CRIANÇA
                foto.innerHTML = '<img id="imgteste" src="crianca-mulher.jpg">'

            }else if (idade > 11 && idade <= 21){
                //Adolecente
                foto.innerHTML = '<img id="imgteste" src="adolescente-mulher.jpg">'

            }else if (idade > 21 && idade <= 70){
                //Adulto
                foto.innerHTML = '<img id="imgteste" src="adulto-mulher.jpg">'

            }else {
                //Idoso
                foto.innerHTML = '<img id="imgteste" src="idoso-mulher.jpg">'
            }
        }

            //resp.style.textAlign = 'center' para centralizar o texto em Js.
            resp.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }

    }



