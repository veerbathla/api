const express=require('express')
const router=express.Router();
const st=require('../controller/Student')
const th=require('../controller/Teacher')
const cr=require('../controller/course')
const lg=require('../controller/Login')
const rg=require('../controller/Register')
router.use(express.json());
router.post('/logincheck',lg.login)
router.post('/registeruser',rg.register)
router.get('/getStudentList',st.getStudentList)
router.post('/insertstudent',st.insertStudent)
router.put('/updatestudent/:id',st.updateStudent)
router.delete('/deletestudent/:name',st.deleteStudent)

router.get('/getTeacherList',th.getTeacherList)
router.post('/insertTeacher',th.insertTeacher)
router.put('/updateTeacher/:id',th.updateTeacher)
router.delete('/deleteTeacher/:name',th.deleteTeacher)


router.get('/getCourseList',cr.getCourseList)
router.post('/insertCourse',cr.insertCourse)
router.put('/updateCourse/:id',cr.updateCourse)
router.delete('/deleteCourse/:id',cr.deleteCourse)

module.exports=router;