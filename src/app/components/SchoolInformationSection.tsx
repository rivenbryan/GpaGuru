"use client";
import { Box, Container, Divider, NativeSelect, Text, } from '@mantine/core';
import Image from 'next/image';
import React from 'react'

type Props = {}

export default function SchoolInformationSection({ }: Props) {
    const school = ['Nanyang Technological University', 'National University of Singapore']
    return (
        <Box>
            <NativeSelect
                data={school}
                label="Select your School"
                description="Currently it supports only NTU & NUS! Apologises.."
                radius="xl"
                withAsterisk
                sx={{ width: "500px", paddingBottom: "15px" }}
            />
            <Image src="/images/school/NTU.jpg"
                width={437}
                height={159}
                alt="Picture of NTU" />
            <Divider my="sm" />
        </Box>

    )
}