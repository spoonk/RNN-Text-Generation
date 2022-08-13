const potter = {
    name: "Harry Potter 1-3",
    route: "potter",
    vocabulary: [' ', '!', '"', "'", '(', ')', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6',
        '7', '8', '9', ':', ';', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z', 'a', 'b', 'c', 'd',
        'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z', '|', '—', '‘', '’', '“', '”', '•', '■'],
    background: 'red'
}

const crimeAndPunishment = {
    name: "Crime and Punishment",
    route: "crime",
    vocabulary: [' ', '!', '"', '#', '$', '%', "'", '(', ')', '*', ',', '-', '.', '/', 
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '?', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
        'V', 'W', 'X', 'Y', 'Z','[', ']', '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
        '¤', '¦', '§', '¨', '©', 'ª', '®', 
        '¯', '´', '¶', '»', '¼', '¿', 'Ã', 'â', 'ï'],
    background: 'purple'
}

const lotr = {
    name: "Lord of the Rings Trilogy",
    route: "lotr",
    vocabulary: [' ', '!', '"', "'", '(', ')', '*', ',', '-', '.', '/', '0', '1', 
    '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '=', '?', 'A', 'B', 'C', 'D', 'E', 'F', 
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 
    'Y', 'Z', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'É', 'Ó', 'á', 'â', 
    'ä', 'é', 'ê', 'ë', 'í', 'î', 'ó', 'ô', 'ú', 'û'],
    background: 'green'
}

const shakespeare = {
    name: "Shakespeare",
    route: "shakespeare",
    vocabulary: ['\n', ' ', '!', '$', '&', "'", ',', '-', '.', '3', ':', ';', '?', 'A', 'B', 
    'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    background: 'blue'
}

const models = {
    "Harry Potter 1-3": potter,
    "Crime and Punishment": crimeAndPunishment,
    "Lord of the Rings": lotr,
    "Shakespeare": shakespeare
}

export { models }