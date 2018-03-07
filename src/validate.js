import Vue from 'vue'
import VueValidate,{validator} from 'vue-validate'
import zh form 'vue-validate/dist/locale/zh_CN'

Validator.addLocale(zh);

const config = {
  locale: 'zh_CN'
};

Vue.use(VueValidate,config);

