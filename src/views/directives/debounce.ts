import { App, Directive } from "vue";
/*
自定义防抖指令
*/

export default function setupDebounce(app: App): void {
    const debounceDirective: Directive<HTMLElement> = {
        mounted(el: any, binding) {
            //可以传递三个值,1、调用的函数，2、触发方式 3、防抖间隔  (至少传递调用的函数这个参数)
            let [fn, event = "click", time = 300] = binding.value
            let timer: any;
            el.addEventListener(event, () => {
                timer && clearTimeout(timer)
                timer = setTimeout(() => fn(), time)
            })
        }
    }
    app.directive('debounce', debounceDirective)
}