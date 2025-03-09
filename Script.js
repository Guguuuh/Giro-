document.getElementById('fetchData').addEventListener('click', function() {
    // URL da API com proxy CORS
    const apiUrl = 'https://cors-anywhere.herokuapp.com/https://sisregi.mdzapis.com/pessoa.php?key=mdz';

    fetch(apiUrl)
        .then(response => {
            console.log('Status da resposta:', response.status); // Log do status da resposta
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.statusText);
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            console.log('Dados recebidos:', data); // Log dos dados recebidos
            const resultDiv = document.getElementById('result');

            // Verifica se os dados estão no formato esperado
            if (data && data.nome) {
                resultDiv.innerHTML = `
                    <p><strong>Nome:</strong> ${data.nome}</p>
                    <p><strong>CPF:</strong> ${data.cpf}</p>
                    <p><strong>RG:</strong> ${data.rg}</p>
                    <p><strong>Data de Nascimento:</strong> ${data.data_nasc}</p>
                    <p><strong>Sexo:</strong> ${data.sexo}</p>
                    <p><strong>Signo:</strong> ${data.signo}</p>
                    <p><strong>Mãe:</strong> ${data.mae}</p>
                    <p><strong>Pai:</strong> ${data.pai}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>CEP:</strong> ${data.cep}</p>
                    <p><strong>Endereço:</strong> ${data.endereco}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.cidade}</p>
                    <p><strong>Estado:</strong> ${data.estado}</p>
                    <p><strong>Telefone Fixo:</strong> ${data.telefone_fixo}</p>
                    <p><strong>Celular:</strong> ${data.celular}</p>
                    <p><strong>Altura:</strong> ${data.altura}</p>
                    <p><strong>Tipo Sanguíneo:</strong> ${data.tipo_sanguineo}</p>
                `;
            } else {
                throw new Error('Dados inválidos recebidos da API.');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error.message || error); // Log do erro com mais detalhes
            document.getElementById('result').textContent = 'Erro ao carregar os dados. Verifique o console para mais detalhes.';
        });
});
