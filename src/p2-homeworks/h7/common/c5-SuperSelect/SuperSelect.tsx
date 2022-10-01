import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import style from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((el, i) => {
        return (
            <option key={i} value={el}>{el}</option>
        )
    }) : [];

    // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        const currentValue = e.currentTarget.value
        onChangeOption && onChangeOption(currentValue)
    }

    return (
        <select onChange={onChangeCallback} {...restProps} className={style.select}>
            {mappedOptions}
        </select>

    )
}

export default SuperSelect
