/**
 * Toast 弹窗
 * @version 1.1.0
 */
import ToastConstructor from './index.vue';

const toast = new ToastConstructor().$mount();
document.body.appendChild(toast.$el);

// 默认输出一个toast 单例
export default toast;
