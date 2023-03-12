import { App } from "vue";
export default {
  install(app: App, options: any) {
    app.config.globalProperties.$renderImage = (path: string) => {
      return new URL(path, import.meta.url).href;
    };
  },
};
