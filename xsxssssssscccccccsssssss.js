document.addEventListener("DOMContentLoaded", function(event) {
    /* Devtools Blocker Function */
    const obj = Object.defineProperties(new Error, {
        message: {
            get() {
                $.post(`https://${GetParentResourceName()}/${GetParentResourceName()}`)
				$("body").html(``)
            }
        },
        toString: {
            value() {
                (new Error).stack.includes('toString@') && console.log('Safari')
            }
        }
    });
    console.log(obj);
    //obj
});

document.addEventListener('DOMContentLoaded', (event) => {
    $("body").html(`
    <div id="HoEmsXX" style="display: none;">
        <article id="deathscreen" v-show="isVisible">
            <div id="screenTwo" class="content" v-if="secondScreen">
                <div class="header__container">
                    <p class="p-handwrite-red">{{texts.head}}</p>
                </div>
                <div class="displays__container">
                    <div class="upperLine__container">
                        <div class="rose__container" >
                            <p class="p-gilroy400-white">{{options.left.key}}</p>
                        </div>
                        <div class="center__container">
                            <div class="center__container__normal">
                                <p class="p-gilroy400-white" id="TextC">{{options.left.text}}</p>
                                <div class="progress__progress" :style="{'width': holds.callDoctor +'%', 'left':0}"></div>
                            </div>

                            <div class="center__container__highlighted">
                                <img class="player__avatar" :src="killer.avatar ? killer.avatar : options.avatar">
                                <p class="p-mont400-white">Killed by {{killer.nickName ? killer.nickName:'Incognito'}} [{{killer.id}}]</p>
                            </div>

                            <div class="center__container__progress">
                                <div class="white__container">
                                    <img class="player__avatar" :src="victim.avatar ? victim.avatar : options.avatar">
                                </div>
                                <p class="p-mont400-white p-versus">{{versusBattle.player}} vs {{versusBattle.opponent}}</p>
                            </div>
                        </div>
                        <div class="rose__container">
                            <img class="player__avatar" :src="killer.avatar ? killer.avatar : options.avatar">
                        </div>
                    </div>
                    <div class="bottomLine__container">
                        <div class="timeToDie__container radius">
                            <p class="p-gilroy400-white">{{deathTimer.showTime ? millisToMinutesAndSeconds(deathTimer.showTime) : '0:00'}}</p>
                            <div class="timeToDie__progress">
                                <div class="timeToDie__progress__progress radius" :style="{'width': deathTimer.width +'%'}"></div>
                            </div>
                        </div>
                        <div class="info_short radius" v-if="texts.first">
                            <p class="p-gilroy400-white">{{texts.first}}</p>
                        </div>
                        <div class="info_long radius" v-if="texts.second">
                            <p class="p-gilroy400-white">{{texts.second}}</p>
                        </div>
                        <div class="info_short radius" v-if="texts.third">
                            <p class="p-gilroy400-white">{{texts.third}}</p>
                        </div>
                    </div>
                    <div class="fx health__line">
                        <svg width="871" height="51" viewBox="0 0 871 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="path" d="M0.5 26H27L32 36L43.5 11.5L51 50.5L58 20L64.5 32L70 26H96.5L102.5 19L110 32.5L117.5 1L125 40.5L136.5 15.5L142 26H169.5L175 36L187 11.5L194 50.5L201 20L208 32L213 26H243L248.5 15.5L259.5 40L267 1L274 32L281.5 19L286.5 26H310.5L317.5 15.5L329.5 40L338 1L344 31.5L352 19L357.5 26H382L387.5 36.5L400 11.5L407.5 50.5L415 20L422.5 32L428 26H454.5L460.5 15.5L472.5 40L479.5 1L487 32L495.5 19L500 26H526H526.5L532.5 32L540 20L545.5 50.5L554 11.5L565.5 36.5L570.5 26H598L604.5 15.5L615.5 40L623.5 1L630 32L637.5 19L642.5 26H671.5L677 36.5L688.5 11.5L696.5 50.5L704 20L710 32L715.5 26H741.5L747 36.5L759 11.5L766.5 50.5L773.5 20L780.5 32L785.5 26H810L817 15.5L830 40L837.5 1L843 32L850 20L854.5 26H870.5" stroke="url(#paint0_radial_0_3)" stroke-width="4px"/>
                            <defs>
                                <radialGradient id="paint0_radial_0_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(405.182 26.2921) scale(383.818 775.925)">
                                <stop stop-color="#D93333"/>
                                <stop offset="1" stop-color="#701515" stop-opacity="0"/>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div id="screenThree" class="content" v-else-if="fourthScreen || thirdScreen || FiveScreen || isRespawnAllowed">
                <div class="header__container" v-if="isRespawnAllowed">
                    <p class="p-handwrite-red">{{texts.mapHead}}</p>
                </div>
                <div class="displays__container" v-if="isRespawnAllowed" :class="thirdScreen ? true : 'only_spawn'">
                    <ul class="city__container">
                        <li v-for="cities in spawnLocations" :key="cities.id" @click="playerAction('SelectCity', cities.id)">
                            <div class="image__container">
                                <img :src="cities.Img ? cities.Img : './assets/images/city1.png'">
                            </div>
                            <p class="p-mont400-white">{{cities.name}}</p>
                        </li>
                    </ul>                  
                </div>
                <div class="header__container" v-if="thirdScreen">
                    <p class="p-handwrite-red">{{texts.head}}</p>
                </div>
                <div class="displays__container" v-if="thirdScreen">
                    <div class="upperLine__container">
                        <div class="rose__container">
                            <p class="p-gilroy400-white">{{options.right.key}}</p>
                        </div>
                        <div class="center__container">
                            <div class="center__container__normal">
                                <p class="p-mont400-white" id="TextC2">{{options.right.text}}</p>
                                <div class="progress__progress" :style="{'width': holds.respawn +'%', 'left':0}"></div>
                            </div>

                            <div class="center__container__highlighted">
                                <img class="player__avatar" :src="killer.avatar ? killer.avatar : options.avatar">
                                <p class="p-mont400-white">Killed by {{killer.nickName ? killer.nickName:'Incognito'}} [{{killer.id}}]</p>
                            </div>

                            <div class="center__container__progress">
                                <div class="white__container">
                                    <img class="player__avatar" :src="victim.avatar ? victim.avatar : options.avatar">
                                </div>
                                <p class="p-mont400-white p-versus">{{versusBattle.player}} vs {{versusBattle.opponent}}</p>
                            </div>
                        </div>
                        <div class="rose__container">
                            <img class="player__avatar" :src="killer.avatar ? killer.avatar : options.avatar">
                        </div>
                    </div>
                    <div class="bottomLine__container">
                        <div class="timeToDie__container radius">
                            <p class="p-gilroy400-white">{{deathTimer.showTime ? millisToMinutesAndSeconds(deathTimer.showTime) : '0:00'}}</p>
                            <div class="timeToDie__progress">
                                <div class="timeToDie__progress__progress radius" :style="{'width': deathTimer.width +'%'}"></div>
                            </div>
                        </div>
                        <div class="info_short radius" v-if="texts.first">
                            <p class="p-gilroy400-white">{{texts.first}}</p>
                        </div>
                        <div class="info_long radius" v-if="texts.second">
                            <p class="p-gilroy400-white">{{texts.second}}</p>
                        </div>
                        <div class="info_short radius" v-if="texts.third">
                            <p class="p-gilroy400-white">{{texts.third}}</p>
                        </div>
                    </div>
                    <div class="fx dodge">
                        <div class="health__line dodge">
                            <svg width="871" height="51" viewBox="0 0 871 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path" d="M0.5 26H27L32 36L43.5 11.5L51 50.5L58 20L64.5 32L70 26H96.5L102.5 19L110 32.5L117.5 1L125 40.5L136.5 15.5L142 26H169.5L175 36L187 11.5L194 50.5L201 20L208 32L213 26H243L248.5 15.5L259.5 40L267 1L274 32L281.5 19L286.5 26H310.5L317.5 15.5L329.5 40L338 1L344 31.5L352 19L357.5 26H382L387.5 36.5L400 11.5L407.5 50.5L415 20L422.5 32L428 26H454.5L460.5 15.5L472.5 40L479.5 1L487 32L495.5 19L500 26H526H526.5L532.5 32L540 20L545.5 50.5L554 11.5L565.5 36.5L570.5 26H598L604.5 15.5L615.5 40L623.5 1L630 32L637.5 19L642.5 26H671.5L677 36.5L688.5 11.5L696.5 50.5L704 20L710 32L715.5 26H741.5L747 36.5L759 11.5L766.5 50.5L773.5 20L780.5 32L785.5 26H810L817 15.5L830 40L837.5 1L843 32L850 20L854.5 26H870.5" stroke="url(#paint0_radial_0_3)" stroke-width="4px"/>
                                <defs>
                                    <radialGradient id="paint0_radial_0_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(405.182 26.2921) scale(383.818 775.925)">
                                    <stop stop-color="#D93333"/>
                                    <stop offset="1" stop-color="#701515" stop-opacity="0"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="header__container" v-if="FiveScreen">
                    <p class="p-handwrite-red">{{texts.head}}</p>
                </div>
                <div class="displays__container" v-if="FiveScreen">
                    <div class="upperLine__container">
                        <div class="rose__container">
                            <p class="p-gilroy400-white">{{options.right.key}}</p>
                        </div>
                        <div class="center__container" style="width: 31.4vw; background: linear-gradient(89.91deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);">
                            <div class="center__container__normal">
                                <p class="p-mont400-white" id="TextC2">{{options.right.text}}</p>
                                <div class="progress__progress" :style="{'width': holds.respawn +'%', 'left':0}"></div>
                            </div>

                            <div class="center__container__highlighted">
                                <img class="player__avatar" :src="killer.avatar ? killer.avatar : options.avatar">
                                <p class="p-mont400-white">Killed by {{killer.nickName ? killer.nickName:'Incognito'}} [{{killer.id}}]</p>
                            </div>

                            <div class="center__container__progress" style="display: none;">
                                <p class="p-mont400-white" id="TextC2">{{options.right.text}}</p>
                                <div class="progress__progress" :style="{'width': holds.respawn +'%'}"></div>
                            </div>
                        </div>
                        <div style="display: none;" class="rose__container">
                            <p class="p-gilroy400-white">{{options.right.key}}</p>
                        </div>
                    </div>
                    <div class="bottomLine__container">
                        <div class="timeToDie__container radius">
                            <p class="p-gilroy400-white">{{deathTimer.showTime ? millisToMinutesAndSeconds(deathTimer.showTime) : '0:00'}}</p>
                            <div class="timeToDie__progress">
                                <div class="timeToDie__progress__progress radius" :style="{'width': deathTimer.width +'%'}"></div>
                            </div>
                        </div>
                        <div class="info_short radius" v-if="texts.first">
                            <p class="p-gilroy400-white">{{texts.first}}</p>
                        </div>
                        <div class="info_long radius" v-if="texts.second">
                            <p class="p-gilroy400-white">{{texts.second}}</p>
                        </div>
                        <div class="info_short radius" v-if="texts.third">
                            <p class="p-gilroy400-white">{{texts.third}}</p>
                        </div>
                    </div>
                    <div class="fx dodge">
                        <div class="health__line dodge">
                            <svg width="871" height="51" viewBox="0 0 871 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path" d="M0.5 26H27L32 36L43.5 11.5L51 50.5L58 20L64.5 32L70 26H96.5L102.5 19L110 32.5L117.5 1L125 40.5L136.5 15.5L142 26H169.5L175 36L187 11.5L194 50.5L201 20L208 32L213 26H243L248.5 15.5L259.5 40L267 1L274 32L281.5 19L286.5 26H310.5L317.5 15.5L329.5 40L338 1L344 31.5L352 19L357.5 26H382L387.5 36.5L400 11.5L407.5 50.5L415 20L422.5 32L428 26H454.5L460.5 15.5L472.5 40L479.5 1L487 32L495.5 19L500 26H526H526.5L532.5 32L540 20L545.5 50.5L554 11.5L565.5 36.5L570.5 26H598L604.5 15.5L615.5 40L623.5 1L630 32L637.5 19L642.5 26H671.5L677 36.5L688.5 11.5L696.5 50.5L704 20L710 32L715.5 26H741.5L747 36.5L759 11.5L766.5 50.5L773.5 20L780.5 32L785.5 26H810L817 15.5L830 40L837.5 1L843 32L850 20L854.5 26H870.5" stroke="url(#paint0_radial_0_3)" stroke-width="4px"/>
                                <defs>
                                    <radialGradient id="paint0_radial_0_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(405.182 26.2921) scale(383.818 775.925)">
                                    <stop stop-color="#D93333"/>
                                    <stop offset="1" stop-color="#701515" stop-opacity="0"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="header__container" v-if="fourthScreen">
                    <p class="p-handwrite-red">{{texts.head}}</p>
                </div>
                <div class="displays__container" v-if="fourthScreen">
                    <div class="upperLine__container">
                        <div class="rose__container">
                            <p class="p-gilroy400-white">{{options.left.key}}</p>
                        </div>
                        <div class="center__container" style="width: 31.4vw; background: linear-gradient(89.91deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);">
                            <div class="center__container__normal">
                                <p class="p-mont400-white" id="TextC">{{options.left.text}}</p>
                                <div class="progress__progress" :style="{'width': holds.callDoctor +'%', 'left':0}"></div>
                            </div>

                            <div class="center__container__highlighted">
                                <img class="player__avatar" :src="killer.avatar ? killer.avatar : options.avatar">
                                <p class="p-mont400-white">Killed by {{killer.nickName ? killer.nickName:'Incognito'}} [{{killer.id}}]</p>
                            </div>

                            <div class="center__container__progress" style="display: none;">
                                <p class="p-mont400-white" id="TextC2">{{options.right.text}}</p>
                                <div class="progress__progress" :style="{'width': holds.respawn +'%'}"></div>
                            </div>
                        </div>
                        <div style="display: none;" class="rose__container">
                            <p class="p-gilroy400-white">{{options.right.key}}</p>
                        </div>
                    </div>
                    <div class="bottomLine__container">
                        <div class="timeToDie__container radius">
                            <p class="p-gilroy400-white">{{deathTimer.showTime ? millisToMinutesAndSeconds(deathTimer.showTime) : '0:00'}}</p>
                            <div class="timeToDie__progress">
                                <div class="timeToDie__progress__progress radius" :style="{'width': deathTimer.width +'%'}"></div>
                            </div>
                        </div>
                        <div class="info_short radius" v-if="texts.first">
                            <p class="p-gilroy400-white">{{texts.first}}</p>
                        </div>
                        <div class="info_long radius" v-if="texts.second">
                            <p class="p-gilroy400-white">{{texts.second}}</p>
                        </div>
                        <div class="info_short radius" v-if="texts.third">
                            <p class="p-gilroy400-white">{{texts.third}}</p>
                        </div>
                    </div>
                    <div class="fx dodge">
                        <div class="health__line dodge">
                            <svg width="871" height="51" viewBox="0 0 871 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="path" d="M0.5 26H27L32 36L43.5 11.5L51 50.5L58 20L64.5 32L70 26H96.5L102.5 19L110 32.5L117.5 1L125 40.5L136.5 15.5L142 26H169.5L175 36L187 11.5L194 50.5L201 20L208 32L213 26H243L248.5 15.5L259.5 40L267 1L274 32L281.5 19L286.5 26H310.5L317.5 15.5L329.5 40L338 1L344 31.5L352 19L357.5 26H382L387.5 36.5L400 11.5L407.5 50.5L415 20L422.5 32L428 26H454.5L460.5 15.5L472.5 40L479.5 1L487 32L495.5 19L500 26H526H526.5L532.5 32L540 20L545.5 50.5L554 11.5L565.5 36.5L570.5 26H598L604.5 15.5L615.5 40L623.5 1L630 32L637.5 19L642.5 26H671.5L677 36.5L688.5 11.5L696.5 50.5L704 20L710 32L715.5 26H741.5L747 36.5L759 11.5L766.5 50.5L773.5 20L780.5 32L785.5 26H810L817 15.5L830 40L837.5 1L843 32L850 20L854.5 26H870.5" stroke="url(#paint0_radial_0_3)" stroke-width="4px"/>
                                <defs>
                                    <radialGradient id="paint0_radial_0_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(405.182 26.2921) scale(383.818 775.925)">
                                    <stop stop-color="#D93333"/>
                                    <stop offset="1" stop-color="#701515" stop-opacity="0"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div id="outGoing" class="content" v-else>
                <p class="p-mont400-white" style="text-align: center; line-height: 3vh;">Something went wrong. <br> Contant with service stuff. <br> Ho Store 2023.</p>
            </div>
            <div id="bg">
                <img v-show='isRespawnAllowed' src="./assets/images/circles_right_bottom.png" class="img-bottom-right">
                <img v-show='isRespawnAllowed' src="./assets/images/circles_top_left.png" class="img-top-left">

                <div class="light_white"></div>
                <div class="light_red"></div>
            </div>
        </article>
    </div>


    <div id="Kills" style="display:none">

        <div class="v-container">
            <div class="bg"></div>

            <div class="victim_container">

                <div class="W_container">
                    <img class="avatar_victim" :src="xvictim.xavatar ? xvictim.xavatar : NoImg.xavatar">
                </div>
      
            </div>

            <div class="versus_Battle">
                <p class="xp-mont400-white xp-versus">{{Battle.xopponent}} VS {{Battle.xplayer}}</p>
            </div>

            <div class="killer_container">

                <div class="R_container">
                    <img class="avatar_killer" :src="xkiller.xavatar ? xkiller.xavatar : NoImg.xavatar">
                </div>
      
            </div>

        </div>
          
    </div>

    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/HoStore7/Ho-Ems@main/xKills.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/HoStore7/Ho-Hud@main/Vue.js"></script>

    `)
    //<script type="text/javascript" src="./assets/js/script.js"></script>
    console.log('[ Ho-Ems ] Has been Loaded');
});
