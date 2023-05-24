"use client"
import { Box, Button, Divider, SimpleGrid } from '@mantine/core'
import React from 'react'
import StudentDetail from './StudentDetail';
type Props = {}

export default function StudentCourseDetails({ }: Props) {
    return (
        <Box sx={{ paddingTop: "10px" }}>
            <SimpleGrid cols={4} spacing="sm" verticalSpacing="sm">
                <StudentDetail />
                <Box >
                    <Button sx={{ marginRight: "10px" }} color="indigo" radius="md">
                        Add New Course
                    </Button>
                    <Button color="indigo" radius="md">
                        Save Course
                    </Button>
                </Box>

            </SimpleGrid>
            <Divider my="sm" />
        </Box>
    )
}