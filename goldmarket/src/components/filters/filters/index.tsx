import React, {useEffect, useState} from 'react';
import RangeInput from "../rangeInputs";
import {products, ProductsTypes} from "src/data/products";
export {globalFilters} from 'src/data/index'
import ProductBadge from "../productBadge";
import InputArrays from "../input";
import InputBooleans from "../inputBooleans";
import './index.css';
import { globalFilters } from 'src/data';

type TMinMaxTypes = {
    min: string | number,
    max: string | number
}

type TFiltersTypes = {
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

const Filters = () => {
    const [filteredProducts, setFilteredProducts] = useState<ProductsTypes[]>([])
    const [filters, setFilters] = useState<TFiltersTypes>({
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
    const [settings, setSettings] = useState([]);

    useEffect(() => {
        const filteredAllProducts = products.filter(product => {
            const currentPrice = product.prices.currentPrice;
            if (filters.priceRanges.min) {
                if (filters.priceRanges.min > currentPrice) {
                    return false;
                }
            }

            if (filters.priceRanges.max) {
                if (filters.priceRanges.max < currentPrice) {
                    return false;
                }
            }

            const currentWeights = [];
            const productWeights = product.weight;
            if (filters.weightRanges.min) {
                productWeights.forEach(currentWeight => {
                    if (filters.weightRanges.min < currentWeight) {
                        currentWeights.push(currentWeight)
                    }
                })
                if (!currentWeights.length) {
                    return false;
                }
            }

            if (filters.weightRanges.max) {
                productWeights.forEach(currentWeight => {
                    if (filters.weightRanges.max > currentWeight) {
                        currentWeights.push(currentWeight)
                    }
                })
                if (!currentWeights.length) {
                    return false;
                }
            }

            if (filters.size.length) {
                const currentSizes = [];
                product.size.forEach(currentSize => {
                    if (filters.size.includes(currentSize)) {
                        currentSizes.push(currentSize)
                    }
                })
                if(!currentSizes.length) {
                    return false;
                }
            }

            if (filters.fineness.length) {
                const currentFinenesses = [];
                product.fineness.forEach(currentFineness => {
                    if (filters.fineness.includes(currentFineness)) {
                        currentFinenesses.push(currentFineness)
                    }
                })
                if(!currentFinenesses.length) {
                    return false;
                }
            }

            if (filters.metal.length) {
                if (!filters.metal.includes(product.metal)) {
                    return false;
                }
            }

            if (filters.forWhom.length) {
                if (!filters.forWhom.includes(product.forWhom)) {
                    return false;
                }
            }

            if (filters.color.length) {
                if (!filters.color.includes(product.color)) {
                    return false;
                }
            }

            if (filters.type.length) {
                if (!filters.type.includes(product.type)) {
                    return false;
                }
            }

            if (filters.stone) {
                if (!product.stone) {
                    return false;
                }
            }

            if (filters.certificate) {
                if (!product.certificate) {
                    return false;
                }
            }

            return product;
        })
        setFilteredProducts(filteredAllProducts)
    }, [filters])

    useEffect(() => {
        setFilteredProducts(products)
    }, [])

    const [show, setShow] = useState(false)
    const showFilName = !show ? ' +  SHOW ALL FILTERS' : ' x  HIDE FILTERS'
    const handleSow = (): void => {
        setShow(!show)
    }

    const getRanges = (min: string, max: string, name: string): void => {
        setFilters({
            ...filters, [ name ]: {
                min, max
            }
        })
    }

    const getInputArrays = (value: boolean, title: string, name: string) => {
        if (value) {
            // @ts-ignore
            const myTitle = [...filters[ title ]]
            setFilters({
                ...filters,
                [ title ]: [...myTitle, name]
            })
            // @ts-ignore
            setSettings(prev => [...prev, name])
        } else {
            // @ts-ignore
            const myTitle = [...filters[ title ]]
            setFilters({
                ...filters,
                [ title ]: [...myTitle].filter(el => el !== name)
            })
            setSettings(prev => prev.filter(el => el !== name))
        }
    }

    const getInputRadio = (id: string, title: string) => {
        if (id === 'yes') {
            setFilters({
                ...filters,
                [ title ]: true
            })
        } else if (id === 'no') {
            setFilters({
                ...filters,
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
            <div className="bg_grey">
                <div className="container">
                    <div className="collection flex dir-col">
                        <div className="badge_collection flex flex-wrap">
                            {
                                filteredProducts.length
                                    ? filteredProducts.map(product => <ProductBadge {...product}/>)
                                    : "No products found, please change filters"
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters;