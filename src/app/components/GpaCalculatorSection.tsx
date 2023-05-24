import { Text, Box } from '@mantine/core'
import React from 'react'
import StudentCourseDetails from './StudentCourseDetails'

type Props = {}

export default function GpaCalculatorSection({ }: Props) {
    return (
        <Box sx={{ paddingTop: "10px" }}>
            <Text>Fill up your Course name, Grade and Credits.</Text>
            <StudentCourseDetails />
        </Box>
    )
}