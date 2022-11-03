import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRange.module.css'
import {Box, Slider} from '@mui/material';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className, value,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {


    const onChangeCallback = (event: Event, newValue: number | number[]) => {
        onChange && onChange(event as unknown as ChangeEvent<HTMLInputElement>)

        onChangeRange && onChangeRange(newValue as number)
    };

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <Box sx={{width: 150, display: 'inline-block', margin: '0 10px'}}>
                <Slider
                    defaultValue={0}
                    value={value}
                    onChange={onChangeCallback}
                    valueLabelDisplay="auto"/>
            </Box>
        </>
    )
}

export default SuperRange
