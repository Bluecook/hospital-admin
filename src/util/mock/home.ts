import Mock from 'mockjs'


import { tableInfo } from '@/module/home_inter'
import { Random } from 'mockjs'

let tableData: Array<tableInfo> = []
let cityData: Array<{ id: number, city: string }> = []
let helpData: Array<{ id: number, index: number, title: string, content: string }> = []

const count: number = 100

for (let i = 0; i < count; i++) {
    tableData.push({
        name: Mock.mock('@cname()'),
        experename: Mock.mock('@cname'),
        patientId: Mock.mock('@id'),
        dateTime: Random.now('day', 'yyyy-MM-dd'),
        time: Mock.mock('@time("HH:MM")'),
        status: Mock.mock({ "number|0-2": 0 })
    })
}

for (let i = 0; i < 12; i++) {
    cityData.push({
        id: Mock.mock('@id'),
        city: Mock.mock('@city()')
    })
}

for (let i = 0; i < 10; i++) {
    helpData.push({
        id: Mock.mock("@id"),
        index: i,
        title: i + 1 + '、' + Random.cparagraph(1, 3),
        content: Random.cparagraph()
    })
}

export default {

    userlogin: (config: { body: string }) => {
        const { email, pwd } = JSON.parse(config.body)

        if (email === 'admin@163.com' && pwd === '123456') {
            return {
                data: {
                    code: 200,
                    msg: '登录成功，欢迎使用',
                    role: 0,
                    token: Mock.mock('@guid()')
                }
            }
        } else if (email === 'user@163.com' && pwd === '123456') {
            return {
                data: {
                    code: 200,
                    msg: '登录成功，欢迎使用',
                    role: 1,
                    token: Mock.mock('@guid()')
                }
            }
        }
        else {
            return {
                data: {
                    code: 301,
                    msg: '用户名或者密码输入有误！'
                }
            }
        }
    },

    mockTable: (config: unknown) => {
        return {
            code: 200,
            data: tableData
        }
    },
    mockCity: () => {
        return {
            code: 200,
            data: cityData
        }
    },
    mockHelp: () => {
        return {
            code: 200,
            data: helpData
        }
    }

}