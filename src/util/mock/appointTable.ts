import Mock from 'mockjs'
import { Random } from 'mockjs'
import { tableInfo } from '@/module/home_inter'

let tableData: Array<tableInfo> = []
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

export default {
    mockTable: (config: unknown) => {
        return {
            code: 200,
            data: tableData
        }
    },
    addappoint: (config: any) => {

        const { date, time, userName, doctor } = JSON.parse(config.body)
        tableData.reverse()
        tableData.push({
            name: userName,
            experename: doctor,
            patientId: Mock.mock('@id'),
            dateTime: date,
            time: time,
            status: { number: 1 }
        })
        tableData.reverse()
        // console.log(infos);
        return {
            code: 200,
            data: tableData,
            message: '预约成功'
        }
    }
}