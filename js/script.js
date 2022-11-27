'use strict';

const formCad = document.getElementById("formCad")
formCad.addEventListener('submit',gravar);

function gravar(e){
    e.preventDefault();
    const formData = new FormData(this);
    const searchParams = new URLSearchParams();

    for(const par of formData){
        searchParams.append(par[0],par[1],par[2],par[3]/*,par[4],par[5],par[6],par[7],par[8],par[9],par[10]*/);
    }

    fetch('cadastroUser.php',{
        method:'POST',
        body:formData
        /*se der certo ira limpar os campos do cadastro*/
    }).then(function(response){
        document.getElementById('email').value=" ";
        document.getElementById('senha').value=" ";
        document.getElementById('cep').value=" ";
        document.getElementById('endereco').value=" ";
        /*document.getElementById('numeroEnd').value=" ";
        document.getElementById('complemento').value=" ";
        document.getElementById('tipoLocal').value=" ";
        document.getElementById('bairro').value=" ";
        document.getElementById('cidade').value=" ";
        document.getElementById('uf').value=" ";
        document.getElementById('telefone').value=" ";*/
        return alert('Dados gravados com sucesso!');
    }).catch(function(error){
        console.log(error);
    });
}