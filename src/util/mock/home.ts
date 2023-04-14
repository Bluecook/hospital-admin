import Mock from 'mockjs'
import { Random } from 'mockjs'
let cityData: Array<{ id: number, city: string }> = []
let helpData: Array<{ id: number, index: number, title: string, content: string }> = []

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