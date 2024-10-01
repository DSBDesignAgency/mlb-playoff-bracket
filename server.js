const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Sample data
const bracketData = {
    AL: {
        wildCard: [
            { team: '1-0', logo: 'images/AL/Tigers.png', seed: 6 },
            { team: '0-1', logo: 'images/AL/Astros.png', seed: 3 },
        ],
       

        wildCard2: [
            { team: '0-0', logo: 'images/AL/Royals.png', seed: 5 },
            { team: '0-0', logo: 'images/AL/Orioles.png', seed: 4 },
        ],
        division: [
            { team: '0-0', logo: 'images/Default.png', seed: null },
            { team: '0-0', logo: 'images/AL/Guardians.png', seed: 2 },
        ],
        division2: [
            { team: '0-0', logo: 'images/Default.png', seed: null },
            { team: '0-0', logo: 'images/AL/Yankees.png', seed: 1 },
        ],
        champions: [
            { team: '0-0', logo: 'images/Default.png', seed: null },
        ],
        champions2: [
            { team: '0-0', logo: 'images/Default.png', seed: null },
        ],
    },
    NL: {
        wildCard3: [
            { team: '0-0', logo: 'images/NL/Mets.png', seed: 6 },
            { team: '0-0', logo: 'images/NL/Brewers.png', seed: 3 },
        ],

        wildCard4: [
            { team: '0-0', logo: 'images/NL/Braves.png', seed: 5 },
            { team: '0-0', logo: 'images/NL/Padres.png', seed: 4 },
        ],

        division3: [
            { team: '0-0', logo: 'images/Default.png', seed: null },
            { team: '0-0', logo: 'images/NL/Phillies.png', seed: 2 },
        ],
        division4: [
            { team: '0-0', logo: 'images/Default.png', seed: null },
            { team: '0-0', logo: 'images/NL/Dodgers.png', seed: 1 },
        ],
        champions3: [
            { team: '0-0', logo: 'images/Default.png', seed: null },
        ],
        champions4: [
            { team: '0-0', logo: 'images/Default.png', seed: null },
        ],
    },
    worldSeries: {
        contenders: [
            { team: '0-0', logo: 'images/Default.png' },
            { team: '0-0', logo: 'images/Default.png' },
        ],
    },
};

app.get('/', (req, res) => {
    res.render('index', { bracket: bracketData });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
