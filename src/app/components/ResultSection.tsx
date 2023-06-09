import { Box, Input, SimpleGrid, Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import { useGPAContext } from '../contexts/gpaContext';


export default function ResultSection() {
    const { gpa, arrayOfCourseGradeCredits}  = useGPAContext();
    
   
    return (
        <Box sx={{ width: "500px", paddingTop: "10px" }}>
            <Text fz="lg" fw={600}>Result: </Text>
            <SimpleGrid cols={2} spacing="sm" verticalSpacing="sm">
                <Text>GPA: </Text>
                <Text>CGPA: </Text>
                <Input
                    value={gpa}
                    disabled
                />
                <Input
                    disabled
                />
            </SimpleGrid>

        </Box>
    )
}