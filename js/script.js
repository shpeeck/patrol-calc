
  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded')
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }


const app = {
    data() {
        return {
            start: new Date(),
            end: new Date(),
            step: 0,
            downtime: 0,
            details: 1,
            result: 0,
            selected: 'Eng',
            text: {
                start: 'Start time',
                end: 'End time',
                step: 'Cycle (sec)',
                downtime: 'Downtime (min)',
                details: 'Parts in a cycle',
                totall: 'Totall details: '
            },
            eng: {
                start: 'Start time',
                end: 'End time',
                step: 'Cycle (sec)',
                downtime: 'Downtime (min)',
                details: 'Parts in a cycle',
                totall: 'Totall details: '
            },
            ua: {
                start: 'Час старту',
                end: 'Час закінчення',
                step: 'Цикл (сек)',
                downtime: 'Простой (хвл)',
                details: 'Деталей в циклі',
                totall: 'Всього деталей: '
            },
            ru: {
                start: 'Время начала',
                end: 'Время окончания',
                step: 'Цикл (сек)',
                downtime: 'Простой (мин)',
                details: 'Детлей в цикле',
                totall: 'Всего деталей: '
            },
            pl: {
                start: 'Start godzina',
                end: 'Stop godzina',
                step: 'Cykl (sek)',
                downtime: 'Postoj (min)',
                details: 'Czesci w cyklu',
                totall: 'Calkowity: '
            }
        }
    },
        methods: {
            leng() {
                if(this.selected == 'Eng') {
                    this.text = this.eng;
                }else if (this.selected == 'Ua') {
                    this.text = this.ua;
                }else if (this.selected == 'Ru') {
                    this.text = this.ru;
                }else if (this.selected == 'Pl') {
                    this.text = this.pl;
                }else {
                    this.text = ''
                }
            },
            roundStep() {
                if (this.step<100) {
                    return this.step
                } else {
                    let ss = String(this.step).slice(0,2);
                    let pp = String(this.step).slice(2);
                    return parseFloat(ss + '.' + pp)
                }
            },
            startTime(event) {
                this.start = event.target.value;
                this.res()
            },
            endTime(event) {
                this.end = event.target.value;
                console.log(this.end);
                this.res()
            },
            stepTime(event) {
                this.step = event.target.value;
                this.res()
            },
            downtimeTime(event) {
                this.downtime = event.target.value;
                this.res()
            },
            detailsCol(event) {
                this.details = event.target.value;
                this.res()
            },
            res() {
                    let a = this.end,
                    b = this.start
                    c = (Math.floor((((new Date(a).getTime() - new Date(b).getTime()) / 1000) - (this.downtime * 60)) / this.roundStep())) * this.details;
                    if (c > 100000000000000) {
                        this.result = "not all fields";
                    }else {
                        this.result = c;
                    }

            }
        }
    }

        Vue.createApp(app).mount('.app')