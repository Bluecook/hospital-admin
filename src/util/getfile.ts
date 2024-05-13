export function getImageUrl(name: string) {
    return new URL(`../assets/img/${name}.png`, import.meta.url).href
}
