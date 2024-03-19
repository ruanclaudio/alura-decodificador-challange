function encryptText() {
//  Exibe o botão de cópia e o contêiner de saída
    document.getElementById("buton-copy").style.display = "block";
    document.getElementById("output-container").style.display = "inline";


    const inputText = document.getElementById("input-text").value; // Obtém o texto digitado pelo usuário
    const elements = document.querySelectorAll("#encrypt-image, #no-text-message, #message"); // Seleciona os elementos para ocultar
    elements.forEach(element => {
        element.style.display = "none"; // Oculta os elementos selecionados
    });

    const letterMap = { // Mapeia palavras específicas de volta para suas letras correspondentes (chave: valor)
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const encryptedText = inputText.replace(/[eiaou]/g, function(letter) { // Substitui as letras pelas palavras correspondentes
        return letterMap[letter];
    });

    const outputMessage = document.querySelector(".output-text"); // Seleciona o elemento que exibirá o texto criptografado
    outputMessage.textContent = encryptedText; // Atualiza o conteúdo do elemento com o texto descriptografado
    
}

function decryptText() {
//  Exibe o botão de cópia e o contêiner de saída
    document.getElementById("buton-copy").style.display = "block"; 
    document.getElementById("output-container").style.display = "inline";

    const inputText = document.getElementById("input-text").value; // Obtém o texto criptografado digitado pelo usuário
    const elements = document.querySelectorAll("#encrypt-image, #no-text-message, #message"); // Seleciona os elementos para ocultar
    elements.forEach(element => {
        element.style.display = "none"; // Oculta os elementos selecionados
    });

    const reverseLetterMap = { // Mapeia palavras específicas de volta para suas letras correspondentes (chave: valor)
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    const decryptedText = inputText.replace(/enter|imes|ai|ober|ufat/g, function(word) { // Substitui as palavras criptografadas pelas letras correspondentes
        return reverseLetterMap[word];
    });

    const outputMesage = document.querySelector(".output-text");  // Seleciona o elemento que exibirá o texto descriptografado
    outputMesage.textContent = decryptedText; // Atualiza o conteúdo do elemento com o texto descriptografado
}

function copyText() {
    const outputContainer = document.getElementById("output-text"); // Obtém o elemento que contém o texto a ser copiado
    const textToCopy = outputContainer.textContent.trim(); // Obtém o texto e remove espaços em branco extras no início e no final

    navigator.clipboard.writeText(textToCopy) // Usa a API Clipboard para escrever o texto na área de transferência
        .then(() => {
            alert("O texto foi copiado para a área de transferência!"); // Exibe uma mensagem de sucesso
        })
        .catch((error) => {
            console.error("Falha ao copiar o texto:", error); // Exibe uma mensagem de erro no console em caso de falha
        });
}