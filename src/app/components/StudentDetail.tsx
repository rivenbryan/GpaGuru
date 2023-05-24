"use client"
import { Input, NumberInput } from '@mantine/core'
import React from 'react'
import { AiFillDelete } from 'react-icons/Ai'

type Props = {}

export default function StudentDetail({ }: Props) {
    return (
        <>
            <Input
                placeholder="Course Name"
                radius="md"
            />
            <Input
                placeholder="Grade"
                radius="md"
            />
            <NumberInput
                placeholder="Your age"
                withAsterisk
            />
            <AiFillDelete size={30} />
        </>
    )
}