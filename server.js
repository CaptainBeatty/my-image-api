const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

// Middleware pour gérer les requêtes CORS
app.use(cors());

// Liste d'URLs d'images
const images = [
    "https://img.freepik.com/photos-gratuite/vue-nocturne-galaxie_23-2148895302.jpg?w=1380&t=st=1713617546~exp=1713618146~hmac=99f910bfe951f048d00682a5d8808309c4ade857415eab44fe61ac37c2d01d15",
    "https://img.freepik.com/photos-premium/trou-noir-trou-noir-numerique-dans-espace-illustration_950002-96521.jpg?w=1380",
    "https://img.freepik.com/photos-premium/chat-assis-devant-lumiere-spirale-ai_97070-13166.jpg?w=1380"
    // Ajoutez d'autres URLs d'images selon vos besoins
];

// Route pour obtenir les images
app.get('/images', (req, res) => {
    res.json(images.map((url, index) => ({ id: index, url })));
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
