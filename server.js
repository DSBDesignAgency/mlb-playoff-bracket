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
            { team: '2-0', logo: 'images/AL/Tigers.png', seed: 6 },

        ],
        wildCardA: [
            { team: '0-2', logo: 'images/AL/Astros-e.png', seed: 3 },
        ],
       

        wildCard2: [
            { team: '2-0', logo: 'images/AL/Royals.png', seed: 5 },
        ],
        wildCard2A: [
            { team: '0-2', logo: 'images/AL/Orioles-e.png', seed: 4 },
        ],

        division: [
            { team: '2-2', logo: 'images/AL/Tigers.png', seed: 6 },
        ],
        divisionA: [
            { team: '2-2', logo: 'images/AL/Guardians.png', seed: 2 },
        ],
        division2: [
            { team: '1-3', logo: 'images/AL/Royals-e.png', seed: 5 },
        ],
        division2A: [
            { team: '3-1', logo: 'images/AL/Yankees.png', seed: 1 },
        ],
        champions: [
            { team: '0-0', logo: 'images/Default.png', seed: null },
        ],
        champions2: [
            { team: '0-0', logo: 'images/AL/Yankees.png', seed: 1 },
        ],
    },
    NL: {
        wildCard3: [
            { team: '2-1', logo: 'images/NL/Mets.png', seed: 6 },
        ],
        wildCard3A: [
            { team: '1-2', logo: 'images/NL/Brewers-e.png', seed: 3 },
        ],

        wildCard4: [
            { team: '0-2', logo: 'images/NL/Braves-e.png', seed: 5 },
        ],
        wildCard4A: [
            { team: '2-0', logo: 'images/NL/Padres.png', seed: 4 },
        ],

        division3: [
            { team: '3-1', logo: 'images/NL/Mets.png', seed: 6 },
        ],
        division3A: [
            { team: '1-3', logo: 'images/NL/Phillies-e.png', seed: 2 },
        ],
        division4: [
            { team: '2-3', logo: 'images/NL/Padres-e.png', seed: 4 },
        ],
        division4A: [
            { team: '3-2', logo: 'images/NL/Dodgers.png', seed: 1 },
        ],
        champions3: [
            { team: '0-0', logo: 'images/NL/Mets.png', seed: 6 },
        ],
        champions4: [
            { team: '0-0', logo: 'images/NL/Dodgers.png', seed: 1 },
        ],
    },
    worldSeries: {
        contenders: [
            { team: '0-0', logo: 'images/Default.png' },
        ],
        contenders2: [
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
