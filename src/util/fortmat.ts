import dayjs from 'dayjs'
import isLeapYear from 'dayjs/plugin/isLeapYear' // 导入插件

import 'dayjs/locale/zh-cn' // 导入本地化语言

dayjs.extend(isLeapYear) // 使用插件
dayjs.locale('zh-cn') // 使用本地化语言

export const appointTime = () => {
    // 函数体
    let now = dayjs();
    return now
}

interface MW {
    day: string,
    week: string
}

export const getWek = () => {

    let weak: Array<MW> = []
    // 函数体

    for (let i = 0; i < 7; i++) {
        weak.push({
            day: dayjs().add(0, 'week').startOf('week').add(i, 'day').format('DD'),
            week: dayjs().add(0, 'week').startOf('week').add(i, 'day').format('ddd')
        })
    }

    return weak
}
