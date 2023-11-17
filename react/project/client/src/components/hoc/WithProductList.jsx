import React from 'react';

// Higher Order Component
export const WithProductList = (WrappedComponent, productList) => {
    return () => {
        return <WrappedComponent productList={productList} />
    }
}
