'use client';

import { createContext, useContext, useState } from "react";

const GPAContext = createContext({})

export const GPAContextProvider = ({ children }: any) => {
    const [gpa, setGPA] = useState<number>(0);
    const [arrayOfCourseGradeCredits, setArrayOfCourseGradeCredits] = useState<CourseGradeCreditType[]>([]);
    return (
        <GPAContext.Provider value={{ setGPA, gpa, arrayOfCourseGradeCredits,setArrayOfCourseGradeCredits }}>
            {children}
        </GPAContext.Provider>
    )
};

export const useGPAContext = () => useContext(GPAContext);