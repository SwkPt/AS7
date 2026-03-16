"use client";

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {Select,MenuItem} from "@mui/material"
 
export default function DateReserve(){
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center w-full">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker className="bg-white" />
        </LocalizationProvider>
        </div>
    );
}