    /*
    function mostraAlerta(mensagem){
        alert(mensagem);
    }

    function mostraConsole(mensagem){
        console.log(mensagem);
    }

    function mostraimpressora(mensagem){
        //imprime a mensagem na impressora
    }

    function somar (a, b, callback){
        let result = a + b;
        callback (result);
    }

    somar (2, 3, mostraAlerta); //5 

    const url = "https://6734a92ea042ab85d11b1f82.mockapi.io/Animal";

    fetch(url)
        .then (response => response.text())
        .then (text => {
            document.querySelector("#titulo").innerHTML = text;
        }); */
        const url = "https://6734a92ea042ab85d11b1f82.mockapi.io/Animal";
        function carregaLista(){
            fetch(url)
            .then(response => response.json())
            .then(data => {
            console.log(data);
            for(let i of data)
            {
                document.getElementById("lista").innerHTML += `<li>${i.id} - ${i.name} (${i.idade}) - ${i.raca}<li>`;
            }
            })
            .catch(error => console.log('Erro:', error));
      
        }      

        function adicionar() {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: 'Tequila',
                    idade: '12',
                    raca: 'cachorro'    
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            });
        }

        carregaLista();