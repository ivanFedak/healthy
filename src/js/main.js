import def from './services/default'
import burger from './modules/burger'
import spollerModule from './modules/spoller'
import video from './modules/video'
import Slider from './services/slidder'


// import getResource from './services/request'


window.onload = function (){
    def();
    burger();
    spollerModule();
    video();
    Slider();
}
