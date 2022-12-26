import React, {useEffect, useState} from 'react';
import RangeInput from '../rangeInputs';
import {products, ProductsTypes} from 'src/data/products';
import ProductBadge from 'src/components/productBadge';
import InputArrays from '../input';
import InputBooleans from '../inputBooleans';
import './index.css';
import {globalFilters} from 'src/data';
import {THandleFilters} from "src/pages/products";
import banner_product from 'src/style/img/banner_products.png'
import Header from "../../header/header";

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

export enum TFilterKey {
    'metal' = 'metal',
    'forWhom' = 'forWhom',
    'type' = 'type',
    'size' = 'size',
    'fineness' = 'fineness',
    'color' = 'color'
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
            ...myFilters, [name]: {
                min, max
            }
        })
    }

    const getInputArrays = (value: boolean, title: TFilterKey, name: string) => {
        if (value) {
            const myTitle = [...myFilters[title]]
            setMyFilters({
                ...myFilters,
                [title]: [...myTitle, name]
            })
        } else {
            const myTitle = [...myFilters[title]]
            setMyFilters({
                ...myFilters,
                [title]: [...myTitle].filter(el => el !== name)
            })
        }
    }

    const getInputRadio = (id: string, title: string) => {
        if (id === 'yes') {
            setMyFilters({
                ...myFilters,
                [title]: true
            })
        } else if (id === 'no') {
            setMyFilters({
                ...myFilters,
                [title]: false
            })
        }
    }

    return (
        <div className={'banner_products'}>
            <Header/>
            <div className={'filtre_img'}>
                <img src={banner_product}/>
            </div>

            <div className='container'>
                <div className={'top_products_page'}>
                    <div className={'clear_filters flex justify-between align-center'}>
                        <h1>Engagement rings</h1>
                        <button onClick={() => window.location.reload()}>Clear filters</button>
                    </div>
                    <div className={'top_products_page_input '}>
                        <ul className={'top_products_page_input_1 flex justify-between'}>
                            <li><RangeInput title={'price'} getRanges={getRanges}/></li>
                            <li><InputArrays title={TFilterKey.metal} data={globalFilters.metal}
                                             getInput={getInputArrays}/></li>
                            <li><InputArrays title={TFilterKey.forWhom} data={globalFilters.forWhom}
                                             getInput={getInputArrays}/></li>
                            <li><InputArrays title={TFilterKey.type} data={globalFilters.type}
                                             getInput={getInputArrays}/></li>
                            <li><InputArrays title={TFilterKey.size} data={globalFilters.size}
                                             getInput={getInputArrays}/></li>
                        </ul>

                        {
                            show
                            &&
                            <ul className={'top_products_page_input_2 top_products_page_input_1 flex justify-between'}>
                                <li><InputBooleans name={'diamond'} title={'diamond'} data={globalFilters.diamond}
                                                   getInput={getInputRadio}/></li>

                                <li><InputBooleans name={'certificate'} title={'certificate'}
                                                   data={globalFilters.certificate}
                                                   getInput={getInputRadio}/></li>
                                <li><InputArrays title={TFilterKey.color} data={globalFilters.color}
                                                 getInput={getInputArrays}/></li>
                                <li><InputArrays title={TFilterKey.fineness} data={globalFilters.fineness}
                                                 getInput={getInputArrays}/></li>
                                <li><RangeInput title={'weight'} getRanges={getRanges}/></li>
                            </ul>
                        }
                        <button className='showFilName' onClick={handleSow}> {showFilName} </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Filters;