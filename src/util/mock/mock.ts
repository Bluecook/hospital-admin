import Mock from 'mockjs'
import doctor from './doctor'
import home from './home'


Mock.mock('/api/login', 'post', home.userlogin)

// 预约表格
Mock.mock('/api/getTable', 'get', home.mockTable)

Mock.mock('/api/getDoctor', 'get', doctor.mockDoctor)


Mock.mock('/api/schedule', 'get', doctor.mockSchedule)

Mock.mock('/api/city', 'get', home.mockCity)

Mock.mock('/api/help', 'get', home.mockHelp)



