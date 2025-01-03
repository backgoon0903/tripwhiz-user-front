import React from "react";
import { useNavigate } from "react-router-dom";
import { cartStore } from "../../store/CartStore";
import { createOrder } from "../../api/orderAPI";

const OrderInfo: React.FC = () => {
    const cartItems = cartStore((state) => state.cartItems);
    const spno = cartStore((state) => state.spno);
    const pickupdate = cartStore((state) => state.pickUpDate);
    const navigate = useNavigate();

    const formatDateForServer = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    };

    const formatNumberWithCommas = (num: number): string =>
        num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const pickUpDate = formatDateForServer(new Date(pickupdate));

    const handlePayment = async () => {
        if (!spno || !pickUpDate || cartItems.length === 0) {
            alert("지점, 픽업 날짜, 또는 장바구니 항목이 모두 있어야 결제를 진행할 수 있습니다.");
            return;
        }

        const email = cartItems[0]?.email;
        if (!email) {
            alert("이메일 정보가 누락되었습니다.");
            return;
        }

        try {
            console.log("주문 요청 데이터:", { email, spno, pickUpDate });

            const response = await createOrder(email, spno, pickUpDate);
            console.log("주문 생성 응답:", response);

            alert("결제가 완료되었습니다!");
            navigate("/payment");
        } catch (error) {
            console.error("결제 중 오류 발생:", error);
            alert("결제에 실패했습니다. 다시 시도해 주세요.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-6">주문 내역</h1>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold mb-1">지점 번호</label>
                    <input
                        type="text"
                        value={spno || ""}
                        readOnly
                        className="w-full px-4 py-2 border rounded-md bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">픽업 날짜</label>
                    <input
                        type="text"
                        value={pickUpDate || ""}
                        readOnly
                        className="w-full px-4 py-2 border rounded-md bg-gray-100"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">상품 내역</label>
                    <textarea
                        value={cartItems
                            .map((item) => `상품명: ${item.pname} 수량: ${item.qty}`)
                            .join("\n")}
                        readOnly
                        className="w-full px-4 py-2 border rounded-md bg-gray-100 min-h-[100px] resize-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1">결제 금액</label>
                    <input
                        type="text"
                        value={`${formatNumberWithCommas(
                            cartItems.reduce((total, item) => total + item.price * item.qty, 0)
                        )}원`}
                        readOnly
                        className="w-full px-4 py-2 border rounded-md bg-gray-100"
                    />
                </div>
                <button
                    onClick={handlePayment}
                    className="w-full py-2 bg-[#1d2d5f] text-white font-bold rounded-md hover:bg-[#16224d] transition"
                >
                    결제하기
                </button>
            </div>
        </div>
    );
};

export default OrderInfo;
