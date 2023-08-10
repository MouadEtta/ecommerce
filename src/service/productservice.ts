import { Injectable } from '@angular/core';
    
@Injectable()
export class ProductService {
    getProductsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-jordan-statement-edition-swingman-jersey-purple-lebron-james-unisex_ss5_p-13365085+u-emdpojqbqmxn1jtysvy6+v-mw2labilgzhwzhghijtv.jpg?_hv=2&w=900',
                price: 105,
                category: 'jersey',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'philadephia',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/philadelphia-76ers/philadelphia-76ers-nike-association-edition%C2%A0swingman-jersey-white-furkan-korkmaz-unisex_ss5_p-200375904+pv-1+u-oh3aow2qceudfhk6n87c+v-qkzezk46lixpfc1gw6hw.jpg?_hv=2&w=900',
                price: 110,
                category: 'jersey',
                quantity: 61,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'phoenyx suns',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/phoenix-suns/phoenix-suns-nike-association-edition%C2%A0swingman-jersey-white-devin-booker-unisex_ss5_p-200377225+pv-1+u-u43dcok2xpgogac25qze+v-wfp5ubzqzc5sw6f1c18m.jpg?_hv=2&w=900',
                price: 105,
                category: 'jersey',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'New Orleans pelicans',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/new-orleans-pelicans/new-orleans-pelicans-jordan-brand-statement-edition-swingman-jersey-red-cj-mccollum-unisex_ss5_p-200377992+pv-1+u-bd9dkydaowxszgtrz4dg+v-uwrddlyujgavurxclktt.jpg?_hv=2&w=900',
                price: 105,
                category: 'Jersey',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Los Angeles Lakers',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-nike-icon-swingman-jersey-custom-unisex_ss4_p-13304109+u-1xmntg3lpvxh8ibaurhc+v-201613ec44234ef09d24b51ceeb3cb79.jpg?_hv=2&w=900',
                price: 105,
                category: 'Jersey',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Chicago Bulls',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/chicago-bulls/chicago-bulls-nike-icon-swingman-jersey-custom-unisex_ss4_p-13304098+u-1bnmvuu775wdjk6j9fp8+v-e858b561236249d684c0e5486cb1440a.jpg?_hv=2&w=900',
                price: 120,
                category: 'Jersey',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                name: 'Boston Celtics',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/boston-celtics/boston-celtics-jordan-statement-edition-swingman-jersey-green-jayson-tatum-unisex_ss4_p-13365084+u-1fpm6z601nn5bxb5ab9p+v-3c740b3052264fc4ac40004da35d98ea.jpg?_hv=2&w=900',
                price: 105,
                category: 'Jersey',
                quantity: 5,
                inventoryStatus: 'LOWSTOCK',
                rating: 3
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Miami Heat',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/miami-heat/miami-heat-jordan-statement-edition-swingman-jersey-red-jimmy-butler-unisex_ss4_p-13365072+u-gippfentzzpnbqqfu1dl+v-bac1e1f715ff493abc2ec2007811c3f2.jpg?_hv=2&w=900',
                price: 105,
                category: 'jersey',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 5
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Golden State Warriors',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/golden-state-warriors/golden-state-warriors-jordan-statement-edition-swingman-jersey-blue-jordan-poole-unisex_ss4_p-13363687+u-1h2o2les4pyfzvxt9iwc+v-99490713d1d44ec192d6c17602e7519f.jpg?_hv=2&w=900',
                price: 105,
                category: 'jersey',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 4
            },
            {
                id: '1009',
                code: 'cm230f032',
                name: 'Milwaukee Bucks',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/milwaukee-bucks/milwaukee-bucks-jordan-statement-edition-swingman-jersey-black-jrue-holiday-unisex_ss4_p-13365089+u-5dxkbetl96t3hnq35u97+v-f4872580fe1b458bb3b7cc6b7d45dfbb.jpg?_hv=2&w=900',
                price: 105,
                category: 'jersey',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 3
            },
            {
                id: '1010',
                code: 'plb34234v',
                name: 'LA Clippers',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/la-clippers/los-angeles-clippers-nike-icon-edition-swingman-jersey-blue-kawhi-leonard-unisex_ss4_p-13349390+u-v7kpmmw6tg6omrtvt52a+v-5fca0d9594644bf9b2936fb5980ce628.jpg?_hv=2&w=900',
                price: 105,
                category: 'jersey',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4
            },
            {
                id: '1011',
                code: '4920nnc2d',
                name: 'Detroit Pistons',
                description: 'Product Description',
                image: 'https://images.footballfanatics.com/detroit-pistons/detroit-pistons-nike-association-edition-swingman-jersey-white-killian-hayes-unisex_ss4_p-13348338+u-ihmncun2y7njlbdnelnn+v-9c252a1efb5e4a17bdc9b45dfdedef82.jpg?_hv=2&w=900',
                price: 105,
                category: 'jersey',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 4
            },

       
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Nike Tiempo Legend 10 Elite',
            description: 'Product Description',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/29619a48-5bf8-41a1-ab51-495241edbd97/scarpa-da-calcio-per-terreni-duri-tiempo-legend-10-elite-tF1ln5.png',
            price: 260,
            category: 'football-shoes',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'Nike Phantom GX Elite',
            description: 'Product Description',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8fc44f53-3ed5-4f1b-b7b0-6f4c38c59863/scarpa-da-calcio-per-terreni-duri-phantom-gx-elite-C0D3tn.png',
            price: 260,
            category: 'football-shoes',
            quantity: 61,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
        {
            id: '1002',
            code: 'zz21cz3c1',
            name: 'Nike Phantom Luna Elite',
            description: 'Product Description',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b3db5fe-fe46-4b35-b98b-0a53c34d3f26/scarpa-da-calcio-per-terreni-duri-phantom-luna-elite-QtMBWk.png',
            price: 280,
            category: 'football-shoes',
            quantity: 2,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
        {
            id: '1003',
            code: '244wgerg2',
            name: 'Liverpool FC 2023/24 Match-Away',
            description: 'Product Description',
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d3a7a8d3-276c-4ca4-949a-2c240a708425/maglia-da-calcio-dri-fit-adv-liverpool-fc-2023-24-match-da-away-HVws4H.png',
            price: 150,
            category: 'football-kits',
            quantity: 25,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1004',
            code: 'h456wer53',
            name: 'FC Barcelona 2023/24 Match - Home',
            description: 'Product Description',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6cf7d3b3-6e58-431e-96ba-27f9ca987d19/maglia-da-calcio-dri-fit-adv-fc-barcelona-2023-24-match-da-home-kXR3fZ.png',
            price: 150,
            category: 'football-kits',
            quantity: 73,
            inventoryStatus: 'INSTOCK',
            rating: 4
        },
        {
            id: '1005',
            code: 'av2231fwg',
            name: 'Paris Saint-Germain 2023/24 Match-Home',
            description: 'Product Description',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8031439b-3e98-4c8c-9774-54d1ef2f2b3e/maglia-da-calcio-dri-fit-adv-paris-saint-germain-2023-24-match-da-home-6J7VFC.png',
            price: 150,
            category: 'football-kits',
            quantity: 0,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
        {
            id: '1006',
            code: 'bib36pfvm',
            name: 'Tottenham Hotspur 2023/24 Stadium - Home',
            description: 'Product Description',
            image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ed67a0f-21e1-4ed7-ad61-bb0cde6df0fa/maglia-da-calcio-dri-fit-tottenham-hotspur-2023-24-stadium-da-home-dcZgXc.png',
            price: 95,
            category: 'football-kits',
            quantity: 5,
            inventoryStatus: 'LOWSTOCK',
            rating: 3
        },
       
    ];
    
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 5));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData());
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

  /*  getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    }

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }*/
};