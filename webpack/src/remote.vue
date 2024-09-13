<template>
  <div class="remote">
    <component :is="name" v-if="name"></component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  watch: {
    "$route.path": function () {
      console.log("register");
      this.register();
    }
  },
  methods: {
    async register() {
      const remotePath = this.$route.path.replace(/.*\/(remote)\//, "");
      const name = remotePath.replace(/\//g, "");

      if (process.env.VUE_APP_REMOTE_PAGE_DIR) {
        try {
          const lastPath = remotePath
            .replace(process.env.VUE_APP_REMOTE_PAGE_DIR, "")
            .replace(/^\//, "");
          // const module = await import(
          //   `../remote/${process.env.VUE_APP_REMOTE_PAGE_DIR}/${lastPath}.vue`
          // );
          const module = await Promise.resolve(
            require(`../remote/${process.env.VUE_APP_REMOTE_PAGE_DIR}/${lastPath}.vue`)
          );
          this.$options.components[name] = module.default;
          this.name = name;
          return;
        } catch (e) {
          console.log("🚀 ~ register ~ e:", e);
          console.log("local not exist " + remotePath);
        }
      }

      if (this.$options.components[name]) {
        this.name = name;
        return;
      }
    }
  },
  async created() {
    this.register();
  }
};
</script>
<style scoped>
.remote {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
</style>
