import React, {useEffect, useState} from 'react';
import RangeInput from '../rangeInputs';
import {products, ProductsTypes} from 'src/data/products';
import ProductBadge from 'src/components/productBadge';
import InputArrays from '../input';
import InputBooleans from '../inputBooleans';
import './index.css';
import { globalFilters } from 'src/data';
import {THandleFilters} from "src/pages/products";

type TMinMaxTypes = {
    min: string | number,
    max: string | number
}

export type TFiltersTypes = {
    priceRanges: TMinMaxTypes,
    metal: string[],
    forWhom: string[],
    type: string[],
    stone: boolean,
    size: string[],
    certificate: boolean,
    weightRanges: TMinMaxTypes,
    fineness: string[],
    color: string[],
}

const Filters = ({handleFilters}: THandleFilters) => {
    const [myFilters, setMyFilters] = useState<TFiltersTypes>({
        priceRanges: {
            min: '',
            max: ''
        },
        metal: [],
        forWhom: [],
        type: [],
        size: [],
        stone: false,
        certificate: false,
        weightRanges: {
            min: '',
            max: ''
        },
        fineness: [],
        color: [],
    })

    useEffect(() => {
        handleFilters(myFilters)
    }, [myFilters])


    const [show, setShow] = useState(false)
    const showFilName = !show ? ' +  SHOW ALL FILTERS' : ' x  HIDE FILTERS'
    const handleSow = (): void => {
        setShow(!show)
    }

    const getRanges = (min: string, max: string, name: string): void => {
        setMyFilters({
            ...myFilters, [ name ]: {
                min, max
            }
        })
    }

    const getInputArrays = (value: boolean, title: string, name: string) => {
        if (value) {
            // @ts-ignore
            const myTitle = [...myFilters[ title ]]
            setMyFilters({
                ...myFilters,
                [ title ]: [...myTitle, name]
            })
        } else {
            // @ts-ignore
            const myTitle = [...myFilters[ title ]]
            setMyFilters({
                ...myFilters,
                [ title ]: [...myTitle].filter(el => el !== name)
            })
        }
    }

    const getInputRadio = (id: string, title: string) => {
        if (id === 'yes') {
            setMyFilters({
                ...myFilters,
                [ title ]: true
            })
        } else if (id === 'no') {
            setMyFilters({
                ...myFilters,
                [ title ]: false
            })
        }
    }

    return (
        <div>
            <div className='filMenuContainer'>
                <RangeInput title={'price'} getRanges={getRanges}/>
                <InputArrays title={'metal'} data={globalFilters.metal} getInput={getInputArrays}/>
                <InputArrays title={'forWhom'} data={globalFilters.forWhom} getInput={getInputArrays}/>
                <InputArrays title={'type'} data={globalFilters.type} getInput={getInputArrays}/>
                <InputArrays title={'size'} data={globalFilters.size} getInput={getInputArrays}/>
                {
                    show
                    &&
                    <>
                        <InputBooleans name={'diamond'} title={'diamond'} data={globalFilters.diamond}
                                       getInput={getInputRadio}/>
                        <InputBooleans name={'certificate'} title={'certificate'} data={globalFilters.certificate}
                                       getInput={getInputRadio}/>
                        <InputArrays title={'color'} data={globalFilters.color} getInput={getInputArrays}/>
                        <InputArrays title={'fineness'} data={globalFilters.fineness} getInput={getInputArrays}/>
                        <RangeInput title={'weight'} getRanges={getRanges}/>
                    </>
                }
            </div>
                <p className='showFilName' onClick={handleSow}> {showFilName} </p>
            <div>
                {/*@ts-ignore*/}
                <button onClick={() => window.location.reload(false)}>Clear filters</button>
            </div>

        </div>
    )
}

export default Filters;