import React, {useEffect, useState} from 'react';
import Filters from "src/components/filters/filters";
import {products} from "src/data/products";
import ProductBadge from "../../components/productBadge";
import {ProductsTypes} from "src/data/products";
import {TFiltersTypes} from "src/components/filters/filters";


export type THandleFilters = {
    handleFilters: (myFilters: TFiltersTypes) => void
}

const ProductsPage = () => {
    const URL = window.location.href;
    const searchParams = new URLSearchParams(URL)
    const metal = searchParams.get('metal');
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
    });
    const [filteredProducts, setFilteredProducts] = useState<ProductsTypes[]>([...products])
    const navigatedFilters = {
        metal
    }

    useEffect(() => {
        console.log(filters)
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
                console.log(filters)
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
        if(metal) {
            setFilters({
                ...filters,
                metal: [metal]
            })
        }
    }, [])

    const handleFilters = (myFilters: TFiltersTypes) => {
        setFilters({...filters, ...myFilters})
    }

    return (
        <div>
            <Filters handleFilters={handleFilters}/>
            <div className="bg_grey">
                <div className="container">
                    <div className="collection flex dir-col">
                        <div className="badge_collection flex flex-wrap">
                            {
                                filteredProducts.length
                                    ? filteredProducts.map(product => <ProductBadge key={product.productID} {...product}/>)
                                    : "No products found, please change filters"
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
