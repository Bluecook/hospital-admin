import { App, Directive } from "vue";
import defaultImg from '@/assets/img/200.png'
export default function setupImgLazy(app: App) {
    function imglazy(el: any, value: [number, string]) {
        const observer = new IntersectionObserver(([{ isIntersecting }]) => {
            if (isIntersecting) {
                observer.unobserve(el)
                el.onerror = () => {
                    el.src = defaultImg
                }
                el.src = value
            }
        }, {
            threshold: 0.01
        })
        observer.observe(el)
    }

    const imgLazyDirective: Directive<HTMLElement> = {
        mounted(el, binding) {
            imglazy(el, binding.value)
        }
    }
    app.directive('imglazy', imgLazyDirective)
}