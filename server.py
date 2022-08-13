# Python 3 server example
from distutils.command import build
import tensorflow as tf
from http.server import BaseHTTPRequestHandler, HTTPServer
import time
import json
import numpy as np
from urllib.parse import urlparse, unquote

hostName = "localhost"
serverPort = 8080


class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        route = self.path.split("/")[1].split("?")[0]
        query = urlparse(self.path).query
        query_components = dict(qc.split("=") for qc in query.split("&"))
        print(unquote(query_components["query"]))
        response = "howdy"
        if route == 'potter':
            self.send_response(200)
            # set up vocabulary

            index2char = np.array(
                ['\n', ' ', '!', '"', '%', "'", '(', ')', '*', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
                 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '\\', ']', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '|', '~', '—', '‘', '’', '“', '”', '•', '■']

            )


# ['\n', ' ', '!', '"', '%', "'", '(', ')', '*', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '\\', ']', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '|', '~', '—', '‘', '’', '“', '”', '•', '■']

            char2index = {char: index for index, char in enumerate(index2char)}

            # model = build_model(vocab_size=len(index2char), batch_size=1)
            # model.load_weights('./potter.h5')
            model = tf.keras.models.load_model('./potter_final.h5')

            response = generate_text(
                model,
                index2char,
                char2index,
                unquote(query_components["query"]),
                temperature=float(query_components["temperature"]),
                num_generate=int(query_components["length"])
            )
            del model

        elif route == "lotr":
            self.send_response(200)

            # ['\t', '\n', ' ', '!', '"', "'", '(', ')', '*', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '=', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '\x96', 'É', 'Ó', 'á', 'â', 'ä', 'é', 'ê', 'ë', 'í', 'î', 'ó', 'ô', 'ú', 'û']

            index2char = np.array(
                ['\t', '\n', ' ', '!', '"', "'", '(', ')', '*', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '=', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
                 'V', 'W', 'X', 'Y', 'Z', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '\x96', 'É', 'Ó', 'á', 'â', 'ä', 'é', 'ê', 'ë', 'í', 'î', 'ó', 'ô', 'ú', 'û']

            )

            char2index = {char: index for index, char in enumerate(index2char)}

            # model = build_model(vocab_size=len(index2char), batch_size=1)
            # model.load_weights('./lotr.h5')

            model = tf.keras.models.load_model('./lotr_final.h5')

            response = generate_text(
                model,
                index2char,
                char2index,
                unquote(query_components["query"]),
                temperature=float(query_components["temperature"]),
                num_generate=int(query_components["length"])
            )
            del model

        elif route == "crime":
            self.send_response(200)

            index2char = np.array(
                ['\n', ' ', '!', '"', '#', '$', '%', "'", '(', ')', '*', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
                 'X', 'Y', 'Z', '[', ']', '_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'à', 'ä', 'æ', 'ç', 'è', 'é', 'ê', 'î', 'ï', 'ô', 'ö', 'ü', '‘', '’', '“', '”', '\ufeff']

            )

            char2index = {char: index for index, char in enumerate(index2char)}

            # model = build_model(vocab_size=len(index2char), batch_size=1)
            # model.load_weights('./crime_final.h5')

            model = tf.keras.models.load_model('./crime_final.h5')

            response = generate_text(
                model,
                index2char,
                char2index,
                unquote(query_components["query"]),
                temperature=float(query_components["temperature"]),
                num_generate=int(query_components["length"])
            )
            del model

        elif route == "shakespeare":
            self.send_response(200)

# ['\n', ' ', '!', '$', '&', "'", ',', '-', '.', '3', ':', ';', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
            index2char = np.array(
                ['\n', ' ', '!', '$', '&', "'", ',', '-', '.', '3', ':', ';', '?', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
                    'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

            )

            char2index = {char: index for index, char in enumerate(index2char)}

            # model = build_model(vocab_size=len(index2char), batch_size=1)
            # model.load_weights('./shakespeare.h5')
            model = tf.keras.models.load_model('./shakespeare_final.h5')

            response = generate_text(
                model,
                index2char,
                char2index,
                unquote(query_components["query"]),
                temperature=float(query_components["temperature"]),
                num_generate=int(query_components["length"])
            )
            del model

        self.send_header("Content-type", "application/json")
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(bytes(json.dumps({'text': response}), 'ascii'))


def generate_text(model, index2char, char2index,  start_string, num_generate=500, temperature=1.0):

    # Converting our start string to numbers (vectorizing).
    input_indices = [char2index[s] for s in start_string]
    input_indices = tf.expand_dims(input_indices, 0)

    # Empty string to store our results.
    text_generated = []

    # Here batch size == 1.
    model.reset_states()
    for char_index in range(num_generate):
        predictions = model(input_indices)
        # remove the batch dimension
        predictions = tf.squeeze(predictions, 0)

        # Using a categorical distribution to predict the character returned by the model.
        predictions = predictions / temperature
        predicted_id = tf.random.categorical(
            predictions,
            num_samples=1
        )[-1, 0].numpy()

        # We pass the predicted character as the next input to the model
        # along with the previous hidden state.
        input_indices = tf.expand_dims([predicted_id], 0)

        text_generated.append(index2char[predicted_id])

    return (start_string + ''.join(text_generated))


def build_model(vocab_size, batch_size, embedding_dim=256, rnn_units=1024):
    model = tf.keras.models.Sequential()

    model.add(tf.keras.layers.Embedding(
        input_dim=vocab_size,
        output_dim=embedding_dim,
        batch_input_shape=[batch_size, None]
    ))

    model.add(tf.keras.layers.LSTM(
        units=rnn_units,
        return_sequences=True,
        stateful=True,
        recurrent_initializer=tf.keras.initializers.GlorotNormal()
    ))

    model.add(tf.keras.layers.Dense(vocab_size))

    return model


def lossFN(labels, logits):
    return tf.keras.losses.sparse_categorical_crossentropy(
        y_true=labels,
        y_pred=logits,
        from_logits=True
    )


if __name__ == "__main__":
    # print(potter.summary())
    # Generate the text with default temperature (1.0).
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
