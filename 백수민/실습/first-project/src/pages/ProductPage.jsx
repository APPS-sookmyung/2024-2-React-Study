import React from 'react'
import Product from '../components/Product';

export default function ProductPage() {
    // 반복시켜줄 데이터
    const data = [
        {
            id: 1,
            name: "군산 이성당 군산달",
            price: 11700,
            url: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/8bde6678-c57a-49d3-a161-4230c4bc86d2.jpg",
            alt: "군산 이성당 군산달 이미지",
        },
        {
            id: 2,
            name: "향긋한 골든퀸쌀밥",
            price: 7980,
            url: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/49736b7b-177c-46f3-84ed-0c3c312d3e48.jpg",
            alt: "향긋한 골든퀸쌀밥 이미지",
        },
        {
            id: 3,
            name: "한통 양배추",
            price: 3990,
            url: "https://img-cf.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/shop/data/goods/1653038077839l0.jpeg",
            alt: "한통 양배추 이미지",
        },
    ];
    
    return (
        <div>
            {data.map((d) => 
                <Product
                    key={d.id}
                    name={d.name}
                    price={d.price}
                    url={d.url}
                    alt={d.alt}
                />
            )}
        </div>
    )
}
