import { Box, Input, SimpleGrid, Text } from '@mantine/core'
import React from 'react'



export default function ResultSection() {
    return (
        <Box sx={{ width: "500px", paddingTop: "10px" }}>
            <Text fz="lg" fw={600}>Result: </Text>
            <SimpleGrid cols={2} spacing="sm" verticalSpacing="sm">
                <Text>GPA: </Text>
                <Text>CGPA: </Text>
                <Input
                    disabled
                />
                <Input
                    disabled
                />
            </SimpleGrid>

        </Box>
    )
}