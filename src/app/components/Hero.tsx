"use client";

import { Text } from '@mantine/core'
import React from 'react'



export default function Hero() {
    return (
        <>
            <Text fw={700} fz="xl" sx={{ paddingBottom: 5 }}>College GPA Calculator</Text>
            <Text>Want to calculate your college grades? Our easy to use college GPA calculator will help you calculate your GPA and stay on top of your study grades in just minutes!
            </Text>
            <Text>Whether you are taking degree courses online or are on a community college campus or studying at an ivy league, no matter what financial aid or scholarship you are aiming for – we’ve got you covered.</Text>
        </>
    )
}