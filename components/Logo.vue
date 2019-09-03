<template>
  <vix-background>
    <!--常规按钮-->
    <div class="demo-line">
      <vix-button-line> <vix-button disabled text="禁用态" /> </vix-button-line>
    </div>
    <div class="demo-line">
      <vix-button-line>
        <vix-button outline disabled text="禁用态" />
      </vix-button-line>
    </div>
    <!--加载按钮-->
    <div class="demo-line">
      <vix-button-line>
        <vix-button
          :loading="loading"
          outline
          text="点击加载"
          v-tap
          @click="load"
        />
      </vix-button-line>
    </div>
    <div class="demo-line">
      <vix-button-line>
        <vix-button :loading="loading2" text="点击加载" v-tap @click="load2" />
      </vix-button-line>
    </div>
    <!--并列按钮-->
    <div class="demo-line">
      <vix-button-group>
        <vix-button outline text="次要操作按钮" />
        <vix-button text="主要操作按钮" />
      </vix-button-group>
    </div>
    <!--圆形按钮-->
    <div class="demo-line">
      <vix-button-group vertical>
        <vix-button round text="主要操作按钮" />
        <vix-button round outline text="次要操作按钮" />
      </vix-button-group>
    </div>
    <!--小按钮-->
    <div class="demo-line demo-padding"><vix-button text="按钮" /></div>
    <div class="demo-line demo-padding"><vix-button text="操作按钮" /></div>
    <div class="demo-line demo-padding">
      <vix-button round text="操作按钮" />
    </div>
    <div class="demo-line demo-padding"><vix-button outline text="按钮" /></div>
    <div class="demo-line demo-padding">
      <vix-button outline text="操作按钮" />
    </div>
    <div class="demo-line demo-padding">
      <vix-button round outline text="操作按钮" />
    </div>
    <div class="demo-line demo-padding">
      <vix-button outline disabled text="按钮" />
    </div>
    <div class="demo-line demo-padding">
      <vix-button outline disabled text="操作按钮" />
    </div>
    <div class="demo-line demo-padding">
      <vix-button round outline disabled text="操作按钮" />
    </div>
    <!--渐变按钮-->
    <div class="demo-line">
      <vix-button-line>
        <vix-button gradient text="渐变按钮" />
      </vix-button-line>
    </div>
    <!--吸底按钮-->
    <div class="demo-line has-fixed-button">
      <vix-button-line fixed> <vix-button text="吸底按钮" /> </vix-button-line>
    </div>
  </vix-background>
</template>

<script>
export default {
  name: 'demo-button',

  data() {
    return {
      loading: false,
      loading2: false
    };
  },

  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
    load2() {
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
      }, 5000);
    }
  }
};
</script>

<style lang="less">
.demo-line.has-fixed-button {
  padding: 0.5rem 0;
}
</style>