// components/xr-start/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleReady(e) {
      console.log('handleReady: ', e);
    },
    // handleARReady(e) {
    //   console.log('handleARReady: ', e);
    // },
    // handleError(e) {
    //   console.log('handleError: ', e);
    // },
    handleAssetsProgress: function ({ detail }) {
      // console.log('assets progress', detail.value);
    },
    handleAssetsLoaded: function ({ detail }) {
      console.log('assets loaded', detail.value);
    }
  }
})