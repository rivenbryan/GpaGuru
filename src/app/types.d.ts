enum typesOfSchool {
    NTU = 'Nanyang Technological University',
    NUS = 'National University of Singapore',
    SMU = 'Singapore Management University'
} 


type CourseGradeCreditType = {
    courseName: string,
    grade: string,
    credit: number | '',
}