"use client"
import { Input, NumberInput } from '@mantine/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { AiFillDelete, AiOutlineConsoleSql } from 'react-icons/Ai'
import { useGPAContext } from '../contexts/gpaContext'

type InputField = 'courseName' | 'grade' | 'credit';

export default function StudentDetail() {
    const {setArrayOfCourseGradeCredits }: any = useGPAContext();
    const [courseName, setCourseName] = useState<string>("");
    const [grade, setGrade] = useState<string>("");
    const [credit, setCredit] = useState<number | ''>(0);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>,
        inputField: InputField) => {
        
        if (inputField === 'courseName') {
            setCourseName(event.target.value);
        } else if (inputField === 'grade') {
            setGrade(event.target.value);
        } else if (inputField === 'credit') {
            setCredit(Number(event.target.value));
        }
    }

    useEffect(() => {
        const addCourseIntoArray = () => {
            setArrayOfCourseGradeCredits((prevValue: CourseGradeCreditType[]) => {
                const CourseGradeCredits: CourseGradeCreditType = {
                    courseName:  courseName,
                    grade:  grade,
                    credit: credit,
                }
                const ResultArray: CourseGradeCreditType[] = prevValue.slice();
                ResultArray.push(CourseGradeCredits)
                return ResultArray;
            })
        }
        if(grade && credit && courseName){
            addCourseIntoArray()
        }
    }, [grade, credit, courseName])
    

    return (
        <>
            <Input
                value={courseName}
                onChange={(event) => handleInputChange(event, 'courseName')}
                placeholder="Course Name"
                radius="md"
            />
            <Input
                value={grade}
                onChange={(event) => handleInputChange(event, 'grade')}
                placeholder="Grade"
                radius="md"
            />
            <Input
                value={credit}
                onChange={(event) => handleInputChange(event, 'credit')}
                placeholder="Credit"
            />
            <AiFillDelete size={30} />
        </>
    )
}