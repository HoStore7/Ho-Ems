const app = new Vue({
    el: '#deathscreen',
    data: {
        isVisible: false,
        secondScreen: false,
        thirdScreen: false,
        fourthScreen: false,
        FiveScreen: false,
        isRespawnAllowed: false,
        versusBattle: {
            player: 2,
            opponent: 5
        },
        killer: {
            id: 250,
            avatar: 'https://cdn.discordapp.com/attachments/681278085072551939/921706204722495498/a.png',
            nickName: "Player Name"
        },
        victim: {
            id: 912,
            avatar: 'https://cdn.discordapp.com/attachments/681278085072551939/921706204722495498/a.png',
        },
        texts: {
            mapHead: 'Select City',
            head: 'You are dead',
            first: "المتبقي للتحلل",
            second: "AP Pistol",
            third: "سبب الموت"
        },
        spawnLocations: [
        ],
        options: {
            left: {
                text: 'طلب مسعف',
                key: "E"
            },
            right: {
                text: 'التحلل',
                key: "Q"
            },
            avatar: 'https://cdn.discordapp.com/attachments/681278085072551939/921706204722495498/a.png', //If avatar not able place here URL
        },
        holds:{
            interval: null,
            clearInterval: null,

            callDoctorIs: false,
            callDoctor: 0,

            respawnIs: false,
            respawn: 0,
        },
        deathTimer: {
            time: null,
            showTime: null,
            width: 0,
            interval: null,
        },
        blocks: {
            call_doctor: false,
            respawn: false,
        }
    },
    methods: {
        holdElementToDoctor(el){
            let actualInterval = this.holds.interval;
            let code = el.split('_');
            let is = code[1]+"Is";
            let count = code[1];
            let isDone = 0;
            clearInterval(actualInterval)
            clearInterval(this.holds.clearInterval)
            if(code[0] == "down"){
                this.holds[is] = true;
                if(this.holds[is] == true){
                    setTimeout(() => {
                        this.holds.interval = setInterval(() => {
                            if(this.holds[count] >= 100){
                                this.holds[is] = false;
                                if(isDone) return;
                                    $.post(`https://${GetParentResourceName()}/xHo-Ems`, JSON.stringify({
                                        type: 'buttons',
                                        button: code[1]
                                    }));
                                    isDone = true;
                                return;
                            }
                            this.holds[count] = this.holds[count]+2
                        }, 20);
                    }, 1);
                }
            }
            if(code[0] == 'up'){
                this.holds[is] = true;
                clearInterval(this.holds.clearInterval)
                setTimeout(() => {
                    this.holds.clearInterval = setInterval(() => {
                        if(this.holds[count] <= 0){
                            this.holds[is] = false;
                            return;
                        }
                        this.holds[count] = this.holds[count]-2
                    }, 20);
                }, 1);
            }
        },

        holdElementToRespawn(el){
            let xactualInterval = this.holds.interval;
            let xcode = el.split('_');
            let xis = xcode[1]+"xis";
            let xcount = xcode[1];
            let xisDone = 0;
            clearInterval(xactualInterval)
            clearInterval(this.holds.clearInterval)
            if(xcode[0] == "down"){
                this.holds[xis] = true;
                if(this.holds[xis] == true){
                    setTimeout(() => {
                        this.holds.interval = setInterval(() => {
                            if(this.holds[xcount] >= 100){
                                this.holds[xis] = false;
                                if(xisDone) return;
                                    $.post(`https://${GetParentResourceName()}/xHo-Ems`, JSON.stringify({
                                        type: 'buttons',
                                        button: xcode[1]
                                    }));
                                    xisDone = true;
                                return;
                            }
                            this.holds[xcount] = this.holds[xcount]+2
                        }, 5);
                    }, 1);
                }
            }
            if(xcode[0] == 'up'){
                this.holds[xis] = true;
                clearInterval(this.holds.clearInterval)
                setTimeout(() => {
                    this.holds.clearInterval = setInterval(() => {
                        if(this.holds[xcount] <= 0){
                            this.holds[xis] = false;
                            return;
                        }
                        this.holds[xcount] = this.holds[xcount]-2
                    }, 5);
                }, 1);
            }
        },

        millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            if(minutes == -1 && seconds == '-0') return '0:00';
            return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
        },
        toggleScreen(Screen, Time){
            this.isRespawnAllowed = false;
            this.secondScreen = false;
            this.thirdScreen = false;
            this.fourthScreen = false;
            this.FiveScreen = false;
            this.isVisible = false;

            if(Screen == 1){
                this.secondScreen = true;
                this.isVisible = true;

                if(this.deathTimer.interval) {
                    clearInterval(this.deathTimer.interval);
                    this.deathTimer.interval = null;
                }

                this.deathTimer.width = 0;
                this.deathTimer.time = Time;
                this.deathTimer.showTime = Time;
            }

            if(Screen == 2){
                this.thirdScreen = true;
                this.isVisible = true;

                if(this.deathTimer.interval) {
                    clearInterval(this.deathTimer.interval);
                    this.deathTimer.interval = null;
                }

                this.deathTimer.width = 0;
                this.deathTimer.time = Time;
                this.deathTimer.showTime = Time;
            }

            if(Screen == 3){
                this.fourthScreen = true;
                this.isVisible = true;

                if(this.deathTimer.interval) {
                    clearInterval(this.deathTimer.interval);
                    this.deathTimer.interval = null;
                }

                this.deathTimer.width = 0;
                this.deathTimer.time = Time;
                this.deathTimer.showTime = Time;
            }

            if(Screen == 4){
                this.FiveScreen = true;
                this.isVisible = true;

                if(this.deathTimer.interval) {
                    clearInterval(this.deathTimer.interval);
                    this.deathTimer.interval = null;
                }

                this.deathTimer.width = 0;
                this.deathTimer.time = Time;
                this.deathTimer.showTime = Time;
            }

            if(Screen == 'Hide'){
                this.secondScreen = false;
                this.thirdScreen = false;
                this.fourthScreen = false;
                this.FiveScreen = false;
                this.isVisible = false;
            }

            if(Screen == 'HideSelectCity'){
                this.isRespawnAllowed = false;
                this.isVisible = false;
            }

            setTimeout( () => {
                app.initBeat()
            }, 10)

        },
        playerAction(type, values){
            if(type == 'SelectCity'){
                $.post(`https://${GetParentResourceName()}/xHo-Ems`, JSON.stringify({
                    type: 'SelectCity',
                    City: values
                }));
            }
        },
        initBeat(){
            let lines = document.querySelectorAll('#path');
            lines.forEach(path => {
                path.setAttribute('stroke-dasharray', path.getTotalLength())
                path.setAttribute('stroke-dashoffset', path.getTotalLength())
                let tl = gsap.timeline({repeat: Infinity})
                tl.to(".fx", {opacity: 0.2, duration: 1, ease: 'bounce.out', scale: 0.8});
                tl.to(path, {'stroke-dashoffset': 0, duration: 2})
                tl.to(".fx", {opacity: 1, duration: 1, ease: 'bounce.out', scale: 1});
                tl.to(path, {'stroke-dashoffset': path.getTotalLength(), duration: 2, onComplete: () => {
                    tl.reverse()
                }})
            })
        }
    },
    mounted(){
        var sound = null;
        const xthis = this;
        window.addEventListener("message", function(event){
            const data = event.data;
            if(data.type == "ToggleScreen"){
                xthis.toggleScreen(data.Screen, data.Time)

                if (data.Screen == 1 || data.Screen == 2 || data.Screen == 3 || data.Screen == 4) {
                    sound = new Audio(data.sound);
                    sound.volume = data.volume ? data.volume : 0.1;
                    sound.loop = true;
                    sound.play();
                } 

                if (data.Screen == 'Hide' && sound != null) {
                    sound.pause();
                }  
                    
            }

            if(data.type == "importVersusData"){
                xthis.victim = data.victim
                xthis.killer = data.killer
                xthis.versusBattle = data.versusBattle
            }

            if(data.type == "importDeathCause"){
                xthis.texts.second = data.Reason
            }

            if(data.type == "UpdateText"){

                if (data.TText == 1) {
                    xthis.options.left.text = data.text
                    var TextC = document.getElementById("TextC");
                    TextC.style.color = data.Color;
                } else if (data.TText == 2) {
                    xthis.options.left.text = data.text
                    var TextC = document.getElementById("TextC");
                    TextC.style.color = data.Color;
                }
                
            }

            if(data.type == "UpdateText2"){

                if (data.TText2 == 1) {
                    xthis.options.right.text = data.text
                    var TextC2 = document.getElementById("TextC2");
                    TextC2.style.color = data.Color2;
                } else if (data.TText2 == 2) {
                    xthis.options.right.text = data.text
                    var TextC2 = document.getElementById("TextC2");
                    TextC2.style.color = data.Color2;
                }
            }

            if(data.type == "UpdateKays"){
                xthis.options.left.key = data.KayE
                xthis.options.right.key = data.KayQ

                var Ems = document.getElementById("HoEmsXX");
                Ems.style.display = "block";
            }
    
            if(data.type == "SelectCity"){
                xthis.spawnLocations = data.SpawnLocations
                xthis.isVisible = true;
                xthis.isRespawnAllowed = true;
            }

            if(data.type == "ParamedicPressed"){
                
                let code = 'down_callDoctor'.split('_');
                let is = code[1]+"Is";
                if(xthis.blocks.call_doctor) return;
                    xthis.blocks.call_doctor = true;
                if(xthis.holds[is]) return;
                    xthis.holdElementToDoctor('down_callDoctor');
                return;
            }

            if(data.type === 'toggleBlock'){
                xthis.blocks.call_doctor = !xthis.blocks.call_doctor
                xthis.holdElementToDoctor('up_callDoctor');
            }

            if(data.type == "RespawnPressed"){

                let xcode = 'down_respawn'.split('_');
                let xis = xcode[1]+"xis";
                if(xthis.blocks.respawn) return;
                    xthis.blocks.respawn = true;
                if(xthis.holds[xis]) return;
                    xthis.holdElementToRespawn('down_respawn');
                return;
                
            }

            if(data.type === 'toggleBlock2'){
                xthis.blocks.respawn = !xthis.blocks.respawn
                xthis.holdElementToRespawn('up_respawn');

            }
        })
    },
    watch:{ 
        deathTimer: {
            handler(newValue, oldValue) {
                if(this.deathTimer.interval) return;
                let calcValue = newValue.time / 1000;
                this.deathTimer.interval = setInterval(() => {
                    if(this.deathTimer.width >= 100) return;
                    this.deathTimer.width = this.deathTimer.width + 0.1;
                    this.deathTimer.showTime = this.deathTimer.showTime - calcValue;
                }, calcValue);
            },
            deep: true
        }
    },
})

///////////////////////////////////////////////////////////////////

const xapp = new Vue({
    el: '#Kills',
    data: {

        Battle: {
            xplayer: 9,
            xopponent: 6,
        },

        xkiller: {
            xavatar: 'https://cdn.discordapp.com/avatars/208708457019342848/992acd0dd9db1e193fbb4dbbce32d5cf.png',
        },

        xvictim: {
            xavatar: 'https://cdn.discordapp.com/avatars/392289563315535873/8e71961428795bf1a667f4ae3b9e69b6.png',
        },

        NoImg: {
            xavatar: 'https://cdn.discordapp.com/attachments/681278085072551939/921706204722495498/a.png',
        },

    },
    methods: {},
    mounted(){

        window.addEventListener("message", function(event){
            const data = event.data;
        
            if(data.type == "X_importVersusData"){
                this.xvictim = data.xvictim
                this.xkiller = data.xkiller
                this.Battle = data.Battle

                setTimeout( () => {
                    $('#Kills').fadeIn("slow")
                }, 100)
                
                setTimeout( () => {
                    $('#Kills').fadeOut("slow")
                }, 7000)
            }


        })
    },

})
