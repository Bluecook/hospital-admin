import { scheduleType } from "@/module/doctor_inter";

export default function randomApply(totalArr: Array<scheduleType>): Array<scheduleType> {
    let arr: Array<scheduleType> = [];
    let num: number = Math.floor(Math.random() * 5)
    let count: number = 5

    for (let i = 0; i < count; i++) {
        let res: number = Math.floor(Math.random() * 24)
        arr.push(totalArr[res])
    }

    for (let i = 0; i < num; i++) {
        let free: number = Math.floor(Math.random() * 5)
        arr[free] = { id: Math.random(), bgColor: '', department: '', name: '' }
    }
    return arr
}