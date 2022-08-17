const express = require('express')
const tf = require('@tensorflow/tfjs-node')
const querystring = require('node:querystring');
const cors = require('cors')
const app = express()
app.use(cors())
// middleware to only allow requests from my website 

// starts the server
app.listen(process.env.PORT || 8080, () => {   
    console.log(`server live on ${process.env.PORT || 8080}`)
})

app.get("/", (req,res) => {
    res.json({"text": "hello"});
})

// Routes for each model
// These routes load the corresponding saved model from local storage
// and use it with the request parameters to generate an output string
// The output string is sent as the response back to the client
app.get('/crime', async(req, res) => {

    const params = querystring.decode(req.url.split("?")[1])

    const path = tf.io.fileSystem("./crime/model.json");
    model = await tf.loadLayersModel(path)

    // note that this is not the same vocab as in modelData.js
    // Vocabs in modelData.js are filtered so that the user can't break the app
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

    // dictionary mapping characters to their index in index2char
    char2index = {}
    index2char.forEach((char, index) => char2index[char.toString()] = index)

    // generate the output sequence
    const result = await generate(
        model, 
        index2char, 
        char2index, 
        params['query'], 
        parseFloat(params['temperature'])
    )
    // send generated text back to client
    res.json({text: result})
})

app.get('/shakespeare', async(req, res) => {

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

app.get('/lotr',  async(req, res) => {
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

app.get('/potter', async(req, res) => {
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

/**
 * Tensorflow JS version of the text generation
 * Generates a sequence of 500 characters
 * @param {*} model keras model
 * @param {*} i2c mapping of indices to characters 
 * @param {*} c2i mapping of characters to indices
 * @param {*} inputString starting string to generate off of
 * @param {*} temperature unpredictability of results
 * @returns The generated sequence 
 */
const generate = async(model, i2c, c2i, inputString, temperature) => {
    // convert input characters to indices
    inputIndices = []
    inputString.split("").forEach(c => inputIndices.push(c2i[c]));
    inputIndices = tf.tensor(inputIndices)

    // expand so the data looks like a batch of 1
    inputIndices = tf.expandDims(inputIndices, 0)
    generated = []

    for (let i = 0; i < 500; i++){
        // pass character through model to get predictions for the next character
        preds = model.predict(inputIndices)
        preds = tf.squeeze(preds, 0)
        // divide by temp to scale results
        preds = preds.div(temperature)
    
        // sample a character from the probability vector
        nextIDs = tf.multinomial(preds, numSamples=1)
        nextIDs = await nextIDs.array()
        nextID = nextIDs[nextIDs.length - 1]

        // free tensor from memory
        inputIndices.dispose()
        // make a new input from the chosen character
        // note: model 'remembers' previous characters, so it's okay
        //      to pass one character at a time
        //      (LSTM)
        inputIndices = tf.expandDims(tf.tensor([nextID[0]]), 0)    
        generated.push(i2c[nextID[0]])

    }
    // free tensor from memory
    inputIndices.dispose()
    // return generated text 
    return inputString + generated.join("")
}