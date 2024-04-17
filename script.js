const signImages = {
    'a': 'letras/a.jpg',
    'b': 'letras/b.jpg',
    "c": "letras/c.jpg",
    "d": "letras/d.jpg",
    "e": "letras/e.jpg",
    "f": "letras/f.jpg",
    "g": "letras/g.jpg",
    "h": "letras/h.jpg",
    "i": "letras/i.jpg",
    "j": "letras/j.jpg",
    "k": "letras/k.jpg",
    "l": "letras/l.jpg",
    "m": "letras/m.jpg",
    "n": "letras/n.jpg",
    "o": "letras/o.jpg",
    "p": "letras/p.jpg",
    "q": "letras/q.jpg",
    "r": "letras/r.jpg",
    "s": "letras/s.jpg",
    "t": "letras/t.jpg",
    "u": "letras/u.jpg",
    "v": "letras/v.jpg",
    "w": "letras/w.jpg",
    "x": "letras/x.jpg",
    "y": "letras/y.jpg",
    "z": "letras/z.jpg"
};




function deletrear() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const signLanguageDiv = document.getElementById('signLanguage');
    signLanguageDiv.innerHTML = '';

    let currentWord = ''; // Variable para almacenar la palabra actual
    for (let i = 0; i < inputText.length; i++) {
        const letter = inputText[i];
        if (letter === ' ' || i === inputText.length - 1) { // Si es un espacio o el final de la frase
            if (letter !== ' ') { // Si es el final de la frase, añadir la última letra
                currentWord += letter;
            }
            if (currentWord.length > 0) { // Si hay alguna palabra para mostrar
                const wordContainer = document.createElement('div');
                for (const char of currentWord) {
                    if (char in signImages) {
                        const img = document.createElement('img');
                        img.src = signImages[char];
                        img.alt = char;
                        img.classList.add('signImage');
                        wordContainer.appendChild(img);
                    }
                }
                signLanguageDiv.appendChild(wordContainer);

                // Agregar imagen en blanco como espacio entre palabras
                const spaceImg = document.createElement('img');
                spaceImg.src = 'letras/blank.png'; // Reemplaza 'espacio_blanco.jpg' con el nombre de tu imagen en blanco
                spaceImg.alt = ' ';
                spaceImg.classList.add('signImage');
                signLanguageDiv.appendChild(spaceImg);

                currentWord = ''; // Reiniciar la palabra actual para la próxima iteración
            }
        } else {
            currentWord += letter; // Construir la palabra letra por letra
        }
    }
}