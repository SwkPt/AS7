'use client'
import React from 'react';
import {Select,MenuItem,Button,TextField} from "@mui/material"
import DateReserve from '@/components/DateReserve';
export default function MyForm() {
  return (
    <form className='flex flex-col gap-10 p-6 border-2  w-[75vw] mx-auto '>

        <TextField
            variant="standard"
            name='Name-Lastname'
            label="Name-Lastname"
            
            className='w-full'
        />
        <TextField
            variant="standard"
            label="Contact-Number"
            name='Contact-Number'
            className='w-full'
            
        />
        <Select variant="standard" name="venue" id="venue"
        className="w-full" >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>
        <DateReserve  />
        <Button
            variant="contained"
            color="primary"
            name="Book Venue"
            onClick={()=>alert("Book venue")}>
            Book Venue
        </Button>
        </form>

  );
}

