import { Text, Box } from '@mantine/core'
import React, { Dispatch, SetStateAction } from 'react'
import StudentCourseDetails from './StudentCourseDetails'

export default function GpaCalculatorSection() {
    return (
        <Box sx={{ paddingTop: "10px" }}>
            <Text>Fill up your Course name, Grade and Credits.</Text>
            <StudentCourseDetails />
        </Box>
    )
}