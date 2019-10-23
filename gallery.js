const PERIODS = {
    "IB":"Italo-Byzantine",
    "15":"15 Cen North Renaissance",
    "16":"16 Cen North Renaissance",
    "ER":"Early Renaissance",
    "HR":"High Renaissance",
    "VR":"Venetian Renaissance",
    "MAN":"Mannerism",
    "NB":"Northern Baroque",
    "SB":"Southern Baroque",
};

var galleryData = [
    {
        name: "Foundling Hospital",
        artist: "Filippo Bruneslleschi",
        year: 1425,
        loc: "south",
        pos: 95,
        img: 'https://o.quizlet.com/GxyZM1cvo6d91ByVnGBuAA.png',
        period: "Renaissance Architcture",
    },
    {
        name: "Villa Rotunda",
        artist: "Palladio",
        year: 1560,
        loc: "south",
        pos: 50,
        img: 'https://o.quizlet.com/i/WtybKZuN-YWIa9yCmkZuuA.jpg',
        period: "Renaissance Architcture",
    },
    {
        name: "Virgin and Child Before a Fire Screen (Merode Altarpiece)",
        artist: "Robert Campim",
        year: 1425,
        loc: "north",
        pos: 40,
        img: 'https://farm8.staticflickr.com/7166/6408027119_34c1e88a3b.jpg',
        period: PERIODS[15],
    },
    {
        name: "Madonna del Bordone",
        artist: "Coppo di Marcolvado",
        year: 1265,
        loc: "south",
        pos: 50,
        img: 'https://kids.kiddle.co/images/thumb/5/5f/Coppo_di_Marcovaldo_Mad.1.jpg/300px-Coppo_di_Marcovaldo_Mad.1.jpg',
        period: PERIODS.IB,
    },
    {
        name: "Hunters in the Snow",
        artist: "Pieter Breugel",
        year: 1565,
        loc: "north",
        pos: 50,
        img: 'https://farm4.staticflickr.com/3009/3037876791_c7923ea5bb.jpg',
        period: PERIODS[16],
    },
    {
        name: "Tribute Money",
        artist: "Masaccio",
        year: 1427,
        loc: "south",
        pos: 60,
        img: 'https://farm9.staticflickr.com/8050/8087572248_1c0757895f.jpg',
        period: PERIODS.ER,
    },
    {
        name: "Madonna of the Meadows",
        artist: "Raphael",
        year: 1505,
        loc: "south",
        pos: 68,
        img: 'https://o.quizlet.com/i/CidRZxg4EZgiobQOion02w.jpg',
        period: PERIODS.ER,
    },
    {
        name: "Judith Slaying Holofernes",
        artist: "Artemisia Gentileschi",
        year: 1620,
        loc: "south",
        pos: 60,
        img: 'https://o.quizlet.com/xEWhB4QMrFUGWl6lErHCCg.jpg',
        period: PERIODS.SB,
    },
    {
        name: "Woman Holding a Balance",
        artist: "Johannes Vermeer",
        year: 1663,
        loc: "north",
        pos: 75,
        img: 'https://o.quizlet.com/eJFvlxX-IV-UcFTxmR6sYA.jpg',
        period: PERIODS.NB,
    },
    {
        name: "Portinari Alterpiece",
        artist: "Hugo Van der Goes",
        year: 1475,
        loc: "north",
        pos: 95,
        img: 'https://o.quizlet.com/Bc0cqFf5MCEsvx5-eS5bbQ.png',
        period: PERIODS[15],
    },
    {
        name: "Les Tres Riches Hueres du Duc de Berry [May]",
        artist: "Limbourg Brothers",
        year: 1413,
        loc: "north",
        pos: 80,
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Limbourg_brothers_-_Les_tr%C3%A8s_riches_heures_du_Duc_de_Berry_-_Mai_%28May%29_-_WGA13022.jpg',
        period: PERIODS[15],
    },
    {
        name: "Les Tres Riches Hueres du Duc de Berry [Jan]",
        artist: "Limbourg Brothers",
        year: 1413,
        loc: "north",
        pos: 70,
        img: 'https://o.quizlet.com/z43Hr-XPM3yNgIJ8yNraSg.jpg',
        period: PERIODS[15],
    },
    {
        name: "The Baptism of Jesus Christ",
        artist: "Verrocchio and da Vinci",
        year: 1475,
        loc: "south",
        pos: 60,
        img: 'https://o.quizlet.com/i/dtVWn169RbFfOPKP4h1T_Q.jpg',
        period: PERIODS.ER,
    },
    {
        name: "The Immaculate Cenception",
        artist: "Murillo",
        year: 1665,
        loc: "south",
        pos: 70,
        img: 'https://o.quizlet.com/8d1emjyeFQYpSenqEmyvPQ.jpg',
        period: PERIODS.SB,
    },
    {
        name: "Madonna Enthroned with Angels and Prophets",
        artist: "Cimbue",
        year: 1290,
        loc: "south",
        pos: 50,
        img: 'https://o.quizlet.com/p9jbo7f0JKs3I4P5scSRJQ.jpg',
        period: PERIODS.IB,
    },
    {
        name: "Madonna Enthroned",
        artist: "Giotto de Bondone",
        year: 1310,
        loc: "south",
        pos: 50,
        img: 'https://o.quizlet.com/i/iymBQsQKyyRs9y_krApk_A.jpg',
        period: PERIODS.IB,
    },
    {
        name: "The Conversion of St Paul",
        artist: "Caravaggio",
        year: 1601,
        loc: "south",
        pos: 63,
        img: 'https://o.quizlet.com/7kzUEK.RMDQBvgOOm9Focw.jpg',
        period: PERIODS.SB,
    },
    {
        name: "Las Meninas",
        artist: "Diego Velazquez",
        year: 1656,
        loc: "south",
        pos: 40,
        img: 'https://o.quizlet.com/i/ZvHes2stWj3cnqTpIPb39w.jpg',
        period: PERIODS.SB,
    },
    {
        name: "Well of Moses",
        artist: "Claus Sluter",
        year: 1395,
        loc: "north",
        pos: 40,
        img: 'https://o.quizlet.com/uQxbJr0ucUiOaLlWeLMvXA.jpg',
        period: PERIODS[15],
    },
    {
        name: "The Last Supper",
        artist: "Dirk Bouts",
        year: 1465,
        loc: "north",
        pos: 40,
        img: 'https://o.quizlet.com/APR5k6DBlYKz6PSbDOz5UA.jpg',
        period: PERIODS[15],
    },
    {
        name: "The Last Supper",
        artist: "Leonardo da Vinci",
        year: 1495,
        loc: "south",
        pos: 35,
        img: 'https://o.quizlet.com/THc-D2ivMF5yjxx-cyKyNQ.jpg',
        period: PERIODS.HR,
    },
    {
        name: "Isenheim Alterpiece",
        artist: "Matthias Grunewald",
        year: 1510,
        loc: "north",
        pos: 35,
        img: 'https://o.quizlet.com/WYdkP2npkONJNPLWUZr.lg.jpg',
        period: PERIODS[16],
    },
    {
        name: "Adam and Eve",
        artist: "Albrecht Durer",
        year: 1504,
        loc: "north",
        pos: 65,
        img: 'https://o.quizlet.com/aooDE5yHF2N.gzTRGkLy8w.jpg',
        period: PERIODS[16],
    },
    {
        name: "A Goldsmith in his Shop",
        artist: "Petrus Christus",
        year: 1449,
        loc: "north",
        pos: 80,
        img: 'https://o.quizlet.com/X96RdXpT2itiY.jnz9s-kg.png',
        period: PERIODS[15],
    },
    {
        name: "A Money Changer and his Wife",
        artist: "Quentin Massys",
        year: 1514,
        loc: "north",
        pos: 63,
        img: 'https://o.quizlet.com/cAV2KI4utRNA-nyw3l4D.w.jpg',
        period: PERIODS[16],
    },
    {
        name: "Lamentation",
        artist: "Giotto de Bondone",
        year: 1305,
        loc: "south",
        pos: 90,
        img: 'https://o.quizlet.com/i/XVRPWs4IM_FdriXKEJuNzg.jpg',
        period: PERIODS.IB,
    },
    {
        name: "Annunciation",
        artist: "Simone Martini",
        year: 1333,
        loc: "south",
        pos: 50,
        img: 'https://o.quizlet.com/ZptLZEjf7iBmBT1WFbirdg.jpg',
        period: PERIODS.IB,
    },
    {
        name: "The Sacrifice of Isaac",
        artist: "Filippo Brunneleschi",
        year: 1402,
        loc: "south",
        pos: 40,
        img: 'https://o.quizlet.com/Vi67mQpAs2B3i3WPu2VzgA.jpg',
        period: PERIODS.ER,
    },
    {
        name: "The Sacrifice of Isaac",
        artist: "Lorenzo Ghiberti",
        year: 1402,
        loc: "south",
        pos: 55,
        img: 'https://o.quizlet.com/i/37hZP7512MP-0jnjgyxuhA.jpg',
        period: PERIODS.ER,
    },
    {
        name: "David",
        artist: "Donatello",
        year: 1428,
        loc: "south",
        pos: 30,
        img: 'https://o.quizlet.com/i/TDZE1k7h5j86aVU5Fs1tiA.jpg',
        period: PERIODS.ER,
    },
    {
        name: "David",
        artist: "Michelangelo",
        year: 1501,
        loc: "south",
        pos: 60,
        img: 'https://o.quizlet.com/i/IRBUdw0bBpYMNuSTChaP3w.jpg',
        period: PERIODS.HR,
    },
    {
        name: "David",
        artist: "Bernini",
        year: 1623,
        loc: "south",
        pos: 95,
        img: 'https://o.quizlet.com/yFu3vE56TP9JMVOzPv-AdA.jpg',
        period: PERIODS.SB,
    },
    {
        name: "Palazzo Rucella",
        artist: "Alberti",
        year: 1452,
        loc: "south",
        pos: 30,
        img: 'https://o.quizlet.com/UZNEPSmUVlQwNChaImWO9Q.png',
        period: "Renaissance Architecture",
    },
    {
        name: "San Carlo alle Quattro Fontane",
        artist: "Borromini",
        year: 1675,
        loc: "south",
        pos: 40,
        img: 'https://o.quizlet.com/C3MZOMnjvJcAu7gMHDogPg.jpg',
        period: PERIODS.SB,
    },
    {
        name: "Christ Delivering the Keys of the Kingdon to St Peter",
        artist: "Perugino",
        year: 1481,
        loc: "south",
        pos: 30,
        img: 'https://o.quizlet.com/kdCXvUm-o8Z6XzlLeTpD1w.jpg',
        period: PERIODS.ER,
    },
    {
        name: "The Expulsion of Adam and eve",
        artist: "Masaccio",
        year: 1427,
        loc: "south",
        pos: 65,
        img: 'https://farm3.staticflickr.com/2313/2236991826_01eecb571e.jpg',
        period: PERIODS.ER,
    },
    {
        name: "Ghent Alterpiece (Adam and Eve)",
        artist: "Jan van Eyck",
        year: 1432,
        loc: "north",
        pos: 80,
        img: 'https://o.quizlet.com/i/IyIToh26EEHz4MQj0hVn1A.jpg',
        period: PERIODS[15],
    },
    {
        name: "Pesaro Madonna",
        artist: "Titian",
        year: 1520,
        loc: "south",
        pos: 95,
        img: 'https://o.quizlet.com/e41UokIDjj2Qn76jSLS5YA.jpg',
        period: PERIODS.VR,
    },
    {
        name: "Deposition",
        artist: "Pontormo",
        year: 1525,
        loc: "south",
        pos: 60,
        img: 'https://o.quizlet.com/RpQwBI0Dp6vyARgZs24Mww.jpg',
        period: PERIODS.MAN,
    },
    {
        name: "The Tempest",
        artist: "Giorgione",
        year: 1506,
        loc: "south",
        pos: 92,
        img: 'https://o.quizlet.com/uVZR2.kZDm0Y-BTnMnzbQA.jpg',
        period: PERIODS.VR,
    },
    {
        name: "View of Haarlem from the Dunes at Overveen",
        artist: "Ruisdael",
        year: 1670,
        loc: "north",
        pos: 60,
        img: 'https://o.quizlet.com/i/TH_CEIZwCTw3wCAvMExOBA.jpg',
        period: PERIODS.NB,
    },
    {
        name: "Giovanni Arnolfini and his Bride",
        artist: "Jan van Eyck",
        year: 1434,
        loc: "north",
        pos: 73,
        img: 'https://o.quizlet.com/7zJsAHpJX7KGMgPuj-e9jQ.jpg',
        period: PERIODS[15],
    },
    {
        name: "Holy Trinity",
        artist: "Masaccio",
        year: 1428,
        loc: "south",
        pos: 70,
        img: 'https://farm9.staticflickr.com/8048/8087573267_111816b7f2.jpg',
        period: PERIODS.ER,
    },
    {
        name: "Bacchus",
        artist: "Caravaggio",
        year: 1595,
        loc: "south",
        pos: 60,
        img: 'https://o.quizlet.com/i/9CZ-Lk7AtpjvslJ6j29hYg.jpg',
        period: PERIODS.SB,
    },
    {
        name: "Triumph of Bacchus",
        artist: "Caracci",
        year: 1600,
        loc: "south",
        pos: 30,
        img: 'https://o.quizlet.com/3Vfcw.0i8az4RHdH6dKqPQ.jpg',
        period: PERIODS.SB,
    },
    {
        name: "Saint Serapion",
        artist: "Zurbaran",
        year: 1628,
        loc: "south",
        pos: 63,
        img: 'https://o.quizlet.com/i/TmFJGMblQvFZAGIglIzJ8w.jpg',
        period: PERIODS.SB,
    },
    {
        name: "Elevation of the Cross",
        artist: "Rubens",
        year: 1610,
        loc: "north",
        pos: 50,
        img: 'https://o.quizlet.com/i/sgB7SKqS15aXFivmVHuUzg.jpg',
        period: PERIODS.NB,
    },
    {
        name: "Return of the Prodigal Son",
        artist: "Rembrant van Rijn",
        year: 1665,
        loc: "north",
        pos: 40,
        img: 'https://o.quizlet.com/LURL4OsfWKMd0GL9iv2CkQ.jpg',
        period: PERIODS.NB,
    },
]