import React from 'react'
import {Box, Slider} from '@mui/material';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number] | number[]) => void
    value: [number, number]
    minDistance: number
    // min, max, step, disable, ...
}

function valuetext(value: number) {
    return `${value}°C`;
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, minDistance, ...restProps
        // min, max, step, disable,
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) return

        return activeThumb === 0 ?
            onChangeRange && onChangeRange([Math.min(newValue[0], newValue[1] - minDistance), newValue[1]]) :
            onChangeRange && onChangeRange([newValue[0], Math.max(newValue[1], newValue[0] + minDistance)])
    }



    return (
        <Box sx={{width: 150, display: 'inline-block', margin: '0 10px'}}>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                {...restProps}
            />
        </Box>
    )
}
export default SuperDoubleRange
