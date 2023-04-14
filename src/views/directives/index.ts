import { App, Directive } from "vue";
import setupImgLazy from './imglazy'

export function setupDirectives(app: App) {
    setupImgLazy(app)
}