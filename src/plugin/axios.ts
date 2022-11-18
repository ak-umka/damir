import axios from "axios";
import type { App } from "vue";

interface AxiosConfig {
  baseURL?: string;
}

export default {
  install(app: App, config: AxiosConfig) {
    app.config.globalProperties.$axios = axios.create({
      baseURL: config.baseURL,
    });
  },
};
