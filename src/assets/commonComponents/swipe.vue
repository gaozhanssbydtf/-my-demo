<!--
 * @author: gaozhan
 * @Date: 2020-11-21 21:46:51
 * @LastEditors: gaozhan
 * @LastEditTime: 2020-11-22 00:00:20
 * @FilePath: \mydemo\src\assets\commonComponents\swipe.vue
 * @Description: In User Settings Edit
-->
<template>
  <div class="slider" ref="slider">
    <div class="sliderGroup" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots" v-if="isDots">
      <span class="dot" v-for="(item, index) of data" :key="index" :class="{active:currentIndex === index}"></span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
   name: 'templatess',
   props: {
     // 传入的数组
    data: {
      type: Array,
      default() {
        return []
      }
    },
    // 是否循环播放
    loop: {
      type: Boolean,
      default: true
    },
    // 是否自动播放
    autoPlay: {
       type: Boolean,
      default: true
    },
    // 是否显示圆点
    isDots : {
      type: Boolean,
      default: true
    },
    //播放间隔
    interval: {
      type: Number,
      default:0.25
    },
    // 默认高度
    initHeight: {
      type: Number,
      default:86
    }
   },
    data () {
      return {
        slider: null,
        width:300,
        height:100,
        currentIndex:0,
        timer:null,
      }
    },
    watch: {
      data: {
        handler(val) {
          this.$nextTick(() => {
            this.initSlider();
            
            
          })
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initLayout()
      })
    },
    methods: {
      initLayout() {
        this.width = this.$refs.slider.clientWidth
        this.height = this.isDots ? this.initHeight - 12 : this.initHeight
        this.$refs.slider.style.height = this.height

        
        this.$refs.sliderGroup.style.height = this.height
        this.initSlider()
      },
      initSlider() {
        if(this.data.length <= 0) return
        let contentWidth = this.width * this.data.length
        if(this.loop) contentWidth += this.width * 2
        const childItems = this.$refs.sliderGroup.children
        for (let i = 0; i < childItems.length; i++) {
          const child = childItems[i];
          child.style.width = this.width + 'px'
          child.style.height = this.height + 'px'
        }
        this.$refs.sliderGroup.style.width = contentWidth + 'px'
        this.slider = new BScroll(this.$refs.slider,{
          scrollX: true,
          scrollY:false,
          momentnum: false,
          snap: {
            loop: this.loop,
            threshold:0.1,
            speed: 400,
            easing: {
              style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              fn(t) {
                return t * (2 - t)
              }
            }
          }
        });
        this.slider.on('scrollEnd', () => {
          this.currentIndex = this.slider.getCurrentPage().pageX
          clearTimeout(this.timer)
          if(this.autoPlay) this.play()
        })
        if(this.autoPlay) this.play()
      },
      play() {
        let playPage = this.currentIndex + 1
        if(playPage = this.data.length) {
          playPage = 0
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(playPage)
        }, this.interval)
      }
    },
}
</script>

<style scoped>
  .slider {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  .sliderGroup {
    overflow: hidden;
  }
  .sliderGroup > div {
    display: inline-block;
    float: left;
    height: 100%;
  }
  .dots {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 2px;
    background-color: #ececec;
    border-radius: 3px;
  }
  .dot.active {
    background: #f37938;
  }
</style>>


