import { App, Directive } from 'vue'


// 自定义指令节流
export const setupThrottle = (app: App) => {
    const throttleDirective: Directive<HTMLElement> = {
        mounted(el, binding) {
            let [fn, event = "click", time = 300] = binding.value
            let timer: NodeJS.Timeout | null, timer_end: string | number | NodeJS.Timeout | undefined;
            el.addEventListener(event, () => {
                if (timer) {
                    clearTimeout(timer_end);
                    return timer_end = setTimeout(() => fn(), time);
                }
                fn();
                timer = setTimeout(() => timer = null, time)
            })
        }
    }
    app.directive('throttle', throttleDirective)
}