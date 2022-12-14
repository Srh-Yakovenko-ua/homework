import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC, stateType} from './bll/loadingReducer';
import loader from './../../assets/image/loader.svg'

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, stateType>(state => state.loading)
    const dispatch = useDispatch()


    const setLoading = () => {
        console.log('loading...')
        dispatch(loadingAC(true))
        setTimeout(() => {
            console.log('loading-setTime...')
            dispatch(loadingAC(false))
        }, 5000)
    };

const styleIMG = {
    display : 'flex',
    alignItems : 'center',
}
const styleSpan = {
    color : 'green',
    paddingRight : '5px'
}
    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    <div style={styleIMG}>
                        <span style={styleSpan}>Ожидайте загрузки : </span>
                        <img src={loader} alt="#"/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
