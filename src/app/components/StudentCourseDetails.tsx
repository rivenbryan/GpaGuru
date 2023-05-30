"use client"
import { Box, Button, Divider, SimpleGrid } from '@mantine/core'
import React, { Dispatch, SetStateAction, useState } from 'react'
import StudentDetail from './StudentDetail';
import { useGPAContext } from '../contexts/gpaContext';


export default function StudentCourseDetails() {
    const  {setGPA, arrayOfCourseGradeCredits}  = useGPAContext();
    const [numberOfStudentDetail, setNumberOfStudentDetail] = useState<number>(1);
    const handleAddCourse = () => {
        setNumberOfStudentDetail((prevValue) =>
            prevValue + 1
        )
    }
    const handleCalculateGPA = () =>{

    }
    return (
        <Box sx={{ paddingTop: "10px" }}>
            <SimpleGrid cols={4} spacing="sm" verticalSpacing="sm">
                {Array(numberOfStudentDetail).fill(null).map((_, index) => (
                    <StudentDetail key={index}/>
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