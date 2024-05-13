/** @type {import('tailwindcss').Config} */

// 该方法是为了颜色基础类可以提供设置透明度的快捷方式，
function withOpacityValue(variable) {
  // 返回一个函数，透明度为可选参数，这样在 HTML 元素中使用颜色基础类时，既可以采用 text-blue-500 方式，也支持 text-blue-500/20 快捷同时设置透明度的形式
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgba(var(${variable}), ${opacityValue})`;
  };
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        xxl: '1536px',
      },
      backgroundColor: { // 此处用来定义主题的背景色基础样式
        skin: {
          bg: withOpacityValue('--color-bg-base'),
          btn: withOpacityValue('--color-btn-bg'),
          'right-side': withOpacityValue('--color-bg-right'),
          'left-side': withOpacityValue('--color-bg-left'),
          'main-color': withOpacityValue('--color-main')
        }
      },
      textColor: { // 文本的基础样式
        'primary': 'var(--color-text-base)',
        'btn-base': 'var(--color-btn-base)',
        'del': 'var(--color-text-del)',
        'green': 'var(--color-text-green)',
        'top': 'var(--color-text-top)'
      }
    },
  },
  plugins: [],
}