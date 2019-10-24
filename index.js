var app = new Vue ({
    el: '#app',

    data: {
        gallery: [],
        startYear: 1200,
        numCenturies: 6,
        yearUnit: .4,
        isQuizAll: false,
        coverImg: true,
        theaterOn: false,
        subsOn: true,
        theaterData: {},
    },

    created() {
        this.gallery = galleryData;
    },

    methods: {
        setTheaterImage(obj) {
            obj.bgSrc = `background-image: url(${obj.img})`;
            this.theaterData = obj;

            this.openTheater();
        },

        openTheater() {
            this.theaterOn = true;
            this.subsOn = true;
        },

        closeTheater() {
            this.theaterOn = false;
        },
        
        toggleSubs() {
            this.subsOn = !this.subsOn;
        },

        toggleImgCover() {
            this.coverImg = !this.coverImg;
            console.log(this.coverImg)
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



document.addEventListener('keyup', e => {
    if (e.keyCode === 27 && app.theaterOn) { app.closeTheater() }
})