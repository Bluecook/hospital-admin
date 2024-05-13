import { App, Directive } from "vue";
import setupImgLazy from './imglazy'
import setupDebounce from "./debounce";
import { setupThrottle } from './throttle'

export function setupDirectives(app: App) {
    setupImgLazy(app)
    setupDebounce(app)
    setupThrottle(app)
}