"use client"
import { Box, Button, Divider, SimpleGrid } from '@mantine/core'
import React, { Dispatch, SetStateAction, useState } from 'react'
import StudentDetail from './StudentDetail';
import { useGPAContext } from '../contexts/gpaContext';
interface GpaContextType {
    setGPA: Dispatch<SetStateAction<number>>,
    arrayOfCourseGradeCredits: CourseGradeCreditType[]
}

export default function StudentCourseDetails() {
    const  {setGPA, arrayOfCourseGradeCredits}: GpaContextType  = useGPAContext();
    const [numberOfStudentDetail, setNumberOfStudentDetail] = useState<number>(1);

    const gradeToPoint = (grade: string): number => {
        switch (grade) {
            case "A+":
                return 5.0;
            case "A":
                return 5.0;
            case "A-":
                return 4.5;
            case "B+":
                return 4.0;
            case "B":
                return 3.5;
            case "B-":
                return 3.0;
            case "C+":
                return 2.5;
            case "C":
                return 2.0;
            case "D+":
                return 1.5;
            case "D":
                return 1.0;
            case "F":
                return 0.0;
            default:
                return 0.0;
        }
    };

    
    const handleAddCourse = () => {
        setNumberOfStudentDetail((prevValue) =>
            prevValue + 1
        )
    }
    const handleCalculateGPA = () =>{
        
        let totalPoints = 0;
        let totalCredits = 0;
    
        for (const course of arrayOfCourseGradeCredits) {
            totalPoints += gradeToPoint(course.grade) * course.credit;
            totalCredits += course.credit;
        }
    
        const gpa = totalPoints / totalCredits;
    
        setGPA(gpa);
    }

    console.log(arrayOfCourseGradeCredits)
    return (
        <Box sx={{ paddingTop: "10px" }}>
            <SimpleGrid cols={4} spacing="sm" verticalSpacing="sm">
                {Array(numberOfStudentDetail).fill(null).map((_, index) => (
                    <StudentDetail key={index} index={index}/>
                ))}
                <Box >
                    <Button onClick={handleAddCourse} sx={{ marginRight: "10px" }} color="indigo" radius="md">
                        Add New Course
                    </Button>
                    <Button onClick={handleCalculateGPA} color="indigo" radius="md">
                        Calculate GPA
                    </Button>
                </Box>

            </SimpleGrid>
            <Divider my="sm" />
        </Box>
    )
}