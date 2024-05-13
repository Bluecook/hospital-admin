import { Random } from 'mockjs'
import Mock from 'mockjs'

import { doctorInfo, scheduleType } from '@/module/doctor_inter'

let doctors: Array<doctorInfo> = []

const departments = ["整形外科", "神经科", "心脏病学", "骨科", "妇科", "脑科"]

for (let i = 0; i < 6; i++) {
    doctors.push({
        id: Random.id(),
        imageUrl: Random.dataImage('200x100', 'Doctor'),
        name: Random.cname(),
        department: departments[Mock.mock({ "number|0-5": 4 }).number],
    })
}

let scheduleDoctor: Array<scheduleType> = []

for (let i = 0; i < 24; i++) {
    scheduleDoctor.push({
        id: Random.id(),
        bgColor: Random.hex(),
        name: Random.cfirst() + '医生',
        department: departments[Mock.mock({ "number|0-5": 4 }).number]
    })
}

export default {
    mockDoctor: (config: unknown) => {
        return {
            code: 200,
            data: doctors
        }
    },
    mockSchedule: (config: unknown) => {
        return {
            code: 200,
            data: scheduleDoctor
        }
    }
}