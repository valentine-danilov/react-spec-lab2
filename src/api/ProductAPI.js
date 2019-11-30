const ProductAPI = {
    products: [
        {
            id: 1,
            isPopular: true,
            type: "Guitar",
            description: "This is acoustic Guitar",
            image: "https://cosmomusic.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/F/I/FIGABEATD401_1.jpg"
        },
        {
            id: 2,
            isPopular: false,
            type: "Guitar",
            description: "This is electric Guitar",
            image: "https://www.macronmusic.com.au/assets/full/LVP-400PNKBFD.jpg?1559624304"
        },
        {
            id: 3,
            isPopular: false,
            type: "Guitar",
            description: "This is strange Guitar",
            image: "https://www.marshallmusic.co.za/wp-content/uploads/2018/07/XU-LSG200S-1.jpg"
        },
        {
            id: 4,
            isPopular: false,
            type: "Guitar",
            description: "This is bass Guitar",
            image: "https://www.scmusic.com.au/content/uploads/2019/02/ibanez_sr30th5_nnf_south-coast-music.jpg"
        },
        {
            id: 5,
            isPopular: true,
            type: "Guitar",
            description: "This is another bass Guitar",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ_K8XmoWOe2KWNaX59sKasSJTdEDm_rucN7GgCBymFYZniz9Q"
        },
        {
            id: 6,
            isPopular: true,
            type: "Guitar",
            description: "This is semi acoustic Guitar",
            image: "https://d1aeri3ty3izns.cloudfront.net/media/44/447585/1200/preview.jpg"
        }
    ],
    getAll: function () { return this.products },
    getById: function (id) {
        return this.products.find(product => product.id === id);
    },
    getPopular: function () { return this.products.filter(p => p.isPopular) }
}

export default ProductAPI;