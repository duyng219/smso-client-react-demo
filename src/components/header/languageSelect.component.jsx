import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

export default function SelectLanguage() {
    return (
        <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    <LanguageOutlinedIcon />
                    Language
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                    }}
                >
                    <option value={30}>English</option>
                    <option value={20}>Vietnamese</option>
                    <option value={10}>Korean</option>
                </NativeSelect>
            </FormControl>
        </Box>
    );
}