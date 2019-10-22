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
        yearUnit: .25,
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