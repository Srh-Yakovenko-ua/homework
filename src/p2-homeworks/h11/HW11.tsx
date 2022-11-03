import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

const minDistance = 10

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100);


    const changeTwoValueSliders = (value: [number, number] | number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    const changeValueFirstSlider = (value: number) => {
        if (value + minDistance < value2) setValue1(value)
    }


    return (
        <div>
            <hr/>

            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={changeValueFirstSlider}
                            value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={changeTwoValueSliders}
                    // сделать так чтоб value1 и value2 изменялось
                    minDistance={minDistance}
                    value={[value1, value2]}/>
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
