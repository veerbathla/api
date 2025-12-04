const express=require('express')
const router=express.Router();
const st=require('../controller/Student')
const th=require('../controller/Teacher')
const cr=require('../controller/course')
const lg=require('../controller/Login')
const rg=require('../controller/Register')
router.use(express.json());

/**
 * @swagger
 * /logincheck:
 *   post:
 *     summary: User Login
 *     tags: [Authentication]
 *     description: Validates user credentials and returns JWT token if correct.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *             example:
 *               username: veer
 *               password: 12345
 *     responses:
 *       200:
 *         description: Login successful, JWT token returned
 *       401:
 *         description: Invalid credentials
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.post('/logincheck',lg.login)

/**
 * @swagger
 * /registeruser:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     description: Saves user information to the database and sends a confirmation email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: Unique username of the user
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *             example:
 *               username: veer
 *               email: veer@example.com
 *               password: 12345
 *     responses:
 *       200:
 *         description: User registered successfully & confirmation email sent
 *       404:
 *         description: Failed to register user
 *       500:
 *         description: Server error
 */
router.post('/registeruser',rg.register)

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: JWT token for authentication
 *     responses:
 *       200:
 *         description: Successfully fetched student list
 *       401:
 *         description: Invalid Token
 */
 
router.get('/getStudentList',st.getStudentList)

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Insert a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *               - name
 *               - age
 *               - rollno
 *             properties:
 *               token:
 *                 type: string
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               rollno:
 *                 type: number
 *             example:
 *               token: your_jwt_token
 *               name: Rohan
 *               age: 20
 *               rollno: 101
 *     responses:
 *       200:
 *         description: Student inserted successfully
 *       400:
 *         description: Something went wrong
 *       401:
 *         description: Invalid Token
 */
router.post('/insertstudent',st.insertStudent)

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB document ID of student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               rollno:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successfully updated data
 *       401:
 *         description: Invalid Token
 */
router.put('/updatestudent/:id',st.updateStudent)

/**
 * @swagger
 * /students/{name}:
 *   delete:
 *     summary: Delete student by name
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the student to delete
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully deleted student
 *       401:
 *         description: Invalid Token
 */
router.delete('/deletestudent/:name',st.deleteStudent)

router.get('/getTeacherList',th.getTeacherList)
router.post('/insertTeacher',th.insertTeacher)
router.put('/updateTeacher/:id',th.updateTeacher)
router.delete('/deleteTeacher/:name',th.deleteTeacher)


router.get('/getCourseList',cr.getCourseList)
router.post('/insertCourse',cr.insertCourse)
router.put('/updateCourse/:id',cr.updateCourse)
router.delete('/deleteCourse/:id',cr.deleteCourse)

router.get('/homepage', (req, res) => {
    res.render('Home', { name: "Visitor" });
});

module.exports=router;