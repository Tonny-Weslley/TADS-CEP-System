let cep_isCompleto = false;

function handleCEP(){
    let cep = document.getElementById('cep').value;
    if(cep.length == 8){
        document.getElementById('cep').disabled = true;
        cep_isCompleto = true;
        preencherCampos();
    }else{
        cep_isCompleto = false;
    }
}

//get cep api
async function getCep() {
  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

function preencherCampos(){
    getCep().then((data) => {
        if(data.logradouro){
            const logradouro = document.getElementById('logradouro');
            logradouro.value = data.logradouro;
            logradouro.disabled = true;
        }
        if(data.complemento){
            const complemento = document.getElementById('complemento');
            complemento.value = data.complemento;
            complemento.disabled = true;
        }
        if(data.bairro){
            const bairro = document.getElementById('bairro');
            bairro.value = data.bairro;
            bairro.disabled = true;
        }
        if(data.localidade){
            const cidade = document.getElementById('cidade');
            cidade.value = data.localidade;
            cidade.disabled = true;
        }
        if(data.uf){
            const estado = document.getElementById('estado');
            estado.value = data.uf;
            estado.disabled = true;
        }
    });
}

function resetForm(){
    document.getElementById('cep').disabled = false;
    document.getElementById('logradouro').disabled = false;
    document.getElementById('complemento').disabled = false;
    document.getElementById('bairro').disabled = false;
    document.getElementById('cidade').disabled = false;
    document.getElementById('estado').disabled = false;
}