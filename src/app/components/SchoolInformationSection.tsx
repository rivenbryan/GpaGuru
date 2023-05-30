"use client";
import { Box, Container, Divider, NativeSelect, Text, } from '@mantine/core';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

enum typesOfSchool {
    NTU = 'Nanyang Technological University',
    NUS = 'National University of Singapore',
    SMU = 'Singapore Management University'
}

export default function SchoolInformationSection() {
    const typesOfSchoolData: typesOfSchool[] = [typesOfSchool.NTU, typesOfSchool.NUS, typesOfSchool.SMU]
    const [school, setSchool] = useState<typesOfSchool>();
    const [schoolImage, setSchoolImage] = useState<string | StaticImport>("/images/school/NTU.jpg");

    useEffect(() => {
        switch (school) {
            case typesOfSchool.NTU:
                setSchoolImage("/images/school/NTU.jpg")
                break;
            case typesOfSchool.NUS:
                setSchoolImage("/images/school/NUS.jpg")
                break;
            default:
                break;
        }
    }, [school])

    return (
        <Box>
            <NativeSelect
                data={typesOfSchoolData}
                value={school}
                onChange={(event) => setSchool(event.currentTarget.value)}
                label="Select your School"
                description="Currently it supports only specific schools Apologises.."
                radius="xl"
                withAsterisk
                sx={{ width: "500px", paddingBottom: "15px" }}
            />
            <Image src={schoolImage}
                width={437}
                height={159}
                alt="School image" />
            <Divider my="sm" />
        </Box>

    )
}