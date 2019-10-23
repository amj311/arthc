var app = new Vue ({
    el: '#app',

    data: {
        gallery: [],
        startYear: 1200,
        numCenturies: 6,
        yearUnit: .4,
        isQuizAll: false,
        theaterOn: false,
        subsOn: false,
        theaterData: {},
    },

    created() {
        this.gallery = galleryData;
    },

    methods: {
        setTheaterImage(obj) {
            obj.bgSrc = `background-image: url(${obj.img})`;
            this.theaterData = obj;

            this.toggleTheater();
        },

        toggleTheater() {
            this.theaterOn = !this.theaterOn;
        },
        
        toggleSubs() {
            this.subsOn = !this.subsOn;
        }
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
                obj.styles = `left: ${(piece.year - this.startYear) * this.yearUnit}rem; height: ${piece.pos/2}%`;
                obj.classes = `art-pos ${piece.loc}`;
                obj.id = `piece_${array.length}`

                array.push(obj)
            })
            return array;
        }
    }
})