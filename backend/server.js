const express = require('express')
const cors = require('cors')
const tf = require('@tensorflow/tfjs-node')
const querystring = require('node:querystring');
const app = express()



// middleware to only allow requests from my website
const corsOptions = {
    origin:'http://localhost:3000',
    optionsSuccessStatus: 200 
}


app.listen(8080, () => {
    console.log("server live on port 8080")
})

app.get('/crime', cors(corsOptions), async(req, res) => {
    const params = querystring.decode(req.url.split("?")[1])



    const path = tf.io.fileSystem("./crime/model.json");
    model = await tf.loadLayersModel(path)

    index2char = ['\n', ' ', '!', '"', '#', '$', '%', "'", 
    '(', ')', '*', ',', '-', '.', '/', '0', '1', '2', '3', 
    '4', '5', '6', '7', '8', '9', ':', ';', '?', 'A', 'B', 
    'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 
    'Y', 'Z', '[', ']', '_', 'a', 'b', 'c', 'd', 'e', 'f', 
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'à', 'ä', 
    'æ', 'ç', 'è', 'é', 'ê', 'î', 'ï', 'ô', 'ö', 'ü', '‘',
    '’', '“', '”', '\ufeff']


    char2index = {}
    index2char.forEach((char, index) => char2index[char.toString()] = index)

    const result = await generate(
        model, 
        index2char, 
        char2index, 
        params['query'], 
        parseFloat(params['temperature'])
    )
    res.json({text: result})
})

app.get('/shakespeare', cors(corsOptions), async(req, res) => {
    const params = querystring.decode(req.url.split("?")[1])

    const path = tf.io.fileSystem("./shakespeare/model.json");
    model = await tf.loadLayersModel(path)

    index2char = ['\n', ' ', '!', '$', '&', "'", ',', '-', 
    '.', '3', ':', ';', '?', 'A', 'B', 'C', 'D', 'E', 'F', 
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
    'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 
    'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z']


    char2index = {}
    index2char.forEach((char, index) => char2index[char.toString()] = index)

    const result = await generate(
        model, 
        index2char, 
        char2index, 
        params['query'], 
        parseFloat(params['temperature'])
    )
    res.json({text: result})
})

app.get('/lotr', cors(corsOptions), async(req, res) => {
    const params = querystring.decode(req.url.split("?")[1])

    const path = tf.io.fileSystem("./lotr/model.json");
    model = await tf.loadLayersModel(path)

    index2char = ['\t', '\n', ' ', '!', '"', "'", '(', ')', 
    '*', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', 
    '6', '7', '8', '9', ':', ';', '=', '?', 'A', 'B', 'C', 
    'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 
    'Z', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
    't', 'u', 'v', 'w', 'x', 'y', 'z', '\x96', 'É', 'Ó', 'á', 
    'â', 'ä', 'é', 'ê', 'ë', 'í', 'î', 'ó', 'ô', 'ú', 'û']

    char2index = {}
    index2char.forEach((char, index) => char2index[char.toString()] = index)

    const result = await generate(
        model, 
        index2char, 
        char2index, 
        params['query'], 
        parseFloat(params['temperature'])
    )
    res.json({text: result})
})

app.get('/potter', cors(corsOptions), async(req, res) => {
    const params = querystring.decode(req.url.split("?")[1])

    const path = tf.io.fileSystem("./potter/model.json");
    model = await tf.loadLayersModel(path)

    index2char = ['\n', ' ', '!', '"', '%', "'", '(', ')', 
    '*', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', 
    '6', '7', '8', '9', ':', ';', '?', 'A', 'B', 'C', 'D', 
    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    '\\', ']', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z', '|', '~', '—', '‘', '’', 
    '“', '”', '•', '■']

    char2index = {}
    index2char.forEach((char, index) => char2index[char.toString()] = index)

    const result = await generate(
        model, 
        index2char, 
        char2index, 
        params['query'], 
        parseFloat(params['temperature'])
    )
    res.json({text: result})
})


const generate = async(model, i2c, c2i, inputString, temperature) => {
    // convert input characters to indices
    inputIndices = []
    inputString.split("").forEach(c => inputIndices.push(c2i[c]));
    inputIndices = tf.tensor(inputIndices)
    inputIndices = tf.expandDims(inputIndices, 0)
    generated = []

    for (let i = 0; i < 500; i++){

        preds = model.predict(inputIndices)
        preds = tf.squeeze(preds, 0)
        preds = preds.div(temperature)
        nextIDs = tf.multinomial(preds, numSamples=1)
        nextIDs = await nextIDs.array()
        nextID = nextIDs[nextIDs.length - 1]

        inputIndices.dispose()
        inputIndices = tf.expandDims(tf.tensor([nextID[0]]), 0)    
        generated.push(i2c[nextID[0]])

    }

    inputIndices.dispose()

    return inputString + generated.join("")
}