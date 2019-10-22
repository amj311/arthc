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

var app = new Vue ({
    el: '#time_flow',

    data: {
        gallery: [
            {
                name: "Foundling Hospital",
                artist: "Filippo Bruneslleschi",
                year: 1425,
                loc: "south",
                pos: 70,
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
                pos: 50,
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
                pos: 40,
                img: 'https://farm9.staticflickr.com/8050/8087572248_1c0757895f.jpg',
                period: PERIODS.ER,
            },
            {
                name: "Madonna of the Meadows",
                artist: "Raphael",
                year: 1505,
                loc: "south",
                pos: 50,
                img: 'https://o.quizlet.com/i/CidRZxg4EZgiobQOion02w.jpg',
                period: PERIODS.ER,
            },
            {
                name: "Judith Slaying Holofernes",
                artist: "Artemisia Gentileschi",
                year: 1620,
                loc: "south",
                pos: 50,
                img: 'https://o.quizlet.com/xEWhB4QMrFUGWl6lErHCCg.jpg',
                period: PERIODS.SB,
            },
            {
                name: "Ghent Alterpiece",
                artist: "Jan van Eyke",
                year: 1260,
                loc: "north",
                pos: 50,
                img: 'https://o.quizlet.com/i/IyIToh26EEHz4MQj0hVn1A.jpg',
                period: PERIODS[15],
            },
            {
                name: "Jesus Giving the Keys of the Kingdon to St Peter",
                artist: "Perugino",
                year: 1230,
                loc: "south",
                pos: 60,
                img: 'https://o.quizlet.com/kdCXvUm-o8Z6XzlLeTpD1w.jpg',
                period: PERIODS.ER,
            },
        ],
        startYear: 1200,
        numCenturies: 5,
        yearUnit: .2,
    },

    computed: {
        eras() {
            let array = [];
            for (i = 0; i < this.numCenturies; i++)
            {
                array.push(this.startYear + i*100)
            }
            return array;
        },
        eraStyle() {
            return `width: ${this.yearUnit*100}rem`
        },

        galleryEls() {
            let array = []
            this.gallery.forEach ( piece => {
                let obj = piece;
                obj.styles = `left: ${(piece.year - this.startYear) * this.yearUnit}rem; min-height: ${piece.pos/2}%`;
                obj.classes = `art-pos ${piece.loc}`;

                array.push(obj)
            })
            return array;
        }
    }
})