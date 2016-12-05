<template>
  <div class="page">
    <div class="page__hd">
        <h1 class="page__title">ActionSheet</h1>
        <p class="page__desc">弹出式菜单</p>
    </div>
    <div class="page__bd page__bd_spacing">
        <a href="javascript:;" class="weui-btn weui-btn_default" v-on:click="iosHandleClick">iOS ActionSheet</a>
        <a href="javascript:;" class="weui-btn weui-btn_default" v-on:click="andrionHandleClick">Android ActionSheet</a>
    </div>

    <div>
        <div class="weui-mask" v-bind:style="{display: isIosDisplay}" v-on:click="iosHandleClick"></div>
        <div class="weui-actionsheet" v-bind:class="{'weui-actionsheet_toggle':isIosActive}" >
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell">示例菜单</div>
                <div class="weui-actionsheet__cell">示例菜单</div>
                <div class="weui-actionsheet__cell">示例菜单</div>
                <div class="weui-actionsheet__cell">示例菜单</div>
            </div>
            <div class="weui-actionsheet__action">
                <div class="weui-actionsheet__cell" v-on:click="iosHandleClick">取消</div>
            </div>
        </div>
    </div>

    <div class="weui-skin_android" v-bind:style="{display: isAndrionDisplay}">
        <div class="weui-mask" v-on:click="andrionHandleClick"></div>
        <div class="weui-actionsheet">
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell">示例菜单</div>
                <div class="weui-actionsheet__cell">示例菜单</div>
                <div class="weui-actionsheet__cell">示例菜单</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      isIosActive: false,
      isIosDisplay: 'none',
      isAndronActive: false,
      isAndrionDisplay: 'none',
    };
  },
  methods: {
    iosHandleClick() {
      this.isIosActive = !this.isIosActive;
      this.isIosDisplay = (this.isIosDisplay === 'none' ? 'block' : 'none');
    },
    andrionHandleClick() {
      this.isAndrionActive = !this.isAndrionActive;
      this.isAndrionDisplay = (this.isAndrionDisplay === 'none' ? 'block' : 'none');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
