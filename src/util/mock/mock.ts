import Mock from 'mockjs'
import doctor from './doctor'
import home from './home'
import appointTable from './appointTable'


Mock.mock('/api/login', 'post', home.userlogin)

// 预约表格
Mock.mock('/api/getTable', 'get', appointTable.mockTable)
Mock.mock('/api/addappoint', 'post', appointTable.addappoint)

Mock.mock('/api/getDoctor', 'get', doctor.mockDoctor)


Mock.mock('/api/schedule', 'get', doctor.mockSchedule)

Mock.mock('/api/city', 'get', home.mockCity)

Mock.mock('/api/help', 'get', home.mockHelp)



