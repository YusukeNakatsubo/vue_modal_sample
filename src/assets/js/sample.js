// Vue Template

// start this block
Vue.component('modal-case01', {
  template: `
    <template>
      <transition name="modal">
        <div class="vue-modal-bg">
          <div class="vue-modal-close" @click.self="$emit('close')"></div>
            <div class="vue-modal-container" @click.self="$emit('close')">
              <div class="vue-modal-wrapper">
                <div class="vue-modal-header">
                  <slot name="header"></slot>
                </div>
                <div class="vue-modal-body">
                  <slot name="body"></slot>
                </div>
                <div class="vue-modal-footer">
                  <slot name="footer"></slot>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </template>
   `
})
new Vue({
  el: '#modal-case01',
  data: {
    showModal: false,
    products: [],
  },
  watch: {
    showModal() {
      this.judgeShowModal()
    }
  },
  methods: {
    async getProducts() {
      let url = 'http://127.0.0.1:8080/assets/data/sample.json'
      await axios.get(url).then(product => { this.products = product.data })
    },
    judgeShowModal() {
      this.$nextTick(() => {
        const bodyScrollPrevent = (flag) => {
          let currentPosition, body = document.getElementsByTagName('body')[0]
          let getuserAgent = window.navigator.userAgent.toLowerCase()
          let isUserAgent = getuserAgent.indexOf('iphone') > -1 || getuserAgent.indexOf('ipad') > -1 || getuserAgent.indexOf('macintosh')>-1 && 'ontouchend' in document
          let scrollBarWidth = window.innerWidth - document.body.clientWidth
          if (flag) {
            body.style.paddingRight = scrollBarWidth + 'px'
            if (isUserAgent) {
              currentPosition =- window.pageYOffset,
              body.style.position = 'fixed'
              body.style.width = '100%'
              body.style.top = currentPosition +'px'
            }
            else {
              body.style.overflow = 'hidden'
            }
          } else if (!flag) {
            body.style.paddingRight = ''
            if (isUserAgent) {
              currentPosition = parseInt(body.style.top.replace(/[^0-9]/g,''))
              body.style.position = ''
              body.style.width = ''
              body.style.top = ''
              window.scrollTo(0, currentPosition)
            }
            else {
              body.style.overflow = ''
            }
          }
        }
        if (this.showModal !== false) bodyScrollPrevent(true)
        else bodyScrollPrevent(false)
      })
    },
  },
  async mounted() {
    this.getProducts()
  }
})
// end this block
