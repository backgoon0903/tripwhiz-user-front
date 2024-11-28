import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProduct } from "../../types/product.ts";
import { getOne } from "../../api/productAPI.ts";
import { cartStore } from "../../store/CartStore.ts";

const initialState: IProduct = {
    pno: 0,
    pname: "",
    price: 0,
    pdesc: "",
    cno: 0,
    scno: 0,
    tno: 0,
    delflag: false,
    uploadFileNames: [],
};

const imageUrl = 'http://10.10.10.169/ddb4aafb-6645-480c-b634-35e7b8046ef9_c2_m1_01.jpg';

function ProductReadComponent() {
    const navigate = useNavigate();
    const { pno } = useParams();

    const addToCart = cartStore((state) => state.addToCart);

    const [product, setProduct] = useState<IProduct>(initialState);

    const moveToCart = () => {
        addToCart(product);
        console.log("Added to cart:", product);
        navigate("/cart");
    };

    useEffect(() => {
        if (!pno) {
            console.warn("Invalid product number");
            return;
        }

        const pnoNum = Number(pno);
        if (isNaN(pnoNum)) {
            console.error("Invalid product number:", pno);
            return;
        }

        getOne(pnoNum)
            .then((result) => {
                setProduct(result);
            })
            .catch((err) => {
                console.error("Failed to fetch product:", err);
            });
    }, [pno]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-white p-6">
            {/* 이미지 */}
            <div className="w-full flex justify-center mb-6">
                <img
                    src={imageUrl}
                    alt={product.pname}
                    className="w-80 h-80 object-cover rounded-lg"
                />
            </div>

            {/* 상품 이름 */}
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{product.pname}</h2>

            {/* 상품 설명 */}
            <p className="text-lg text-gray-600 mb-4">{product.pdesc}</p>

            {/* 가격 */}
            <div className="text-center mb-6">
                <span className="text-2xl font-semibold text-amber-500">
                    {product.price.toLocaleString()} 원
                </span>
            </div>

            {/* 카테고리 정보 */}
            {product.cno && (
                <div className="text-center mb-6">
                    <span className="text-lg text-gray-500">Category ID: {product.cno}</span>
                </div>
            )}

            {/* 버튼 */}
            <div className="flex justify-center gap-6">
                <button
                    type="button"
                    className="bg-amber-400 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-500 focus:outline-none transition duration-300"
                    onClick={moveToCart}
                >
                    Add to Cart
                </button>
                <button
                    type="button"
                    className="bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-400 focus:outline-none transition duration-300"
                    onClick={() => navigate("/product/list")}
                >
                    Back
                </button>
            </div>
        </div>
    );
}

export default ProductReadComponent;
