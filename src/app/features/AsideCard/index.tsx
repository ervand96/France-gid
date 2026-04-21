"use client"

import Button from "@/app/shared/Button";

export default function AsideCard() {
    return <div className="bg-primary flex flex-col p-[32px] w-[350px] rounded-[10px]">
        <div className="flex flex-col gap-[6px]">
            <span className="text-[14px] font-[400] leading-[143%] text-secondary/50">From</span>
            <h4 className="text-[36px] font-[400] leading-[111%] text-secondary">$1,899<span className="text-[16px] font-[400] leading-[150%] text-primary">/person</span></h4>
            <p className="text-[14px] font-[400] leading-[143%] text-accent">Best price guaranteed</p>
        </div>
        <hr className="my-[24px]" />
        <h5 className="text-[18px] font-[500] leading-[156%] text-secondary mb-[17px]">Price Breakdown</h5>
        <div className="w-full flex justify-between items-center">
            <div className="w-full flex flex-col gap-[12px]">
                <p className="text-[14px] font-[400] leading-[143%] text-secondary/50">Base price</p>
                <p className="text-[14px] font-[400] leading-[143%] text-secondary/50">Accommodations</p>
                <p className="text-[14px] font-[400] leading-[143%] text-secondary/50">Guided tours</p>
            </div>
            <div className="w-full flex flex-col items-end gap-[12px]">
                <p className="text-[14px] font-[400] leading-[143%] text-secondary">$1,699</p>
                <p className="text-[14px] font-[400] leading-[143%] text-secondary">$150</p>
                <p className="text-[14px] font-[400] leading-[143%] text-secondary">$50</p>
            </div>
        </div>
        <hr className="my-[12px]" />
        <div className="w-full flex justify-between items-center">
            <p className="text-[18px] font-[400] leading-[156%] text-secondary">Total</p>
            <p className="text-[18px] font-[400] leading-[156%] text-secondary">$1,899</p>
        </div>
        <div className="flex flex-col gap-[12px] my-[24px]">
            <Button
                text={"Book Now"}
                styles="w-full px-[92px] py-[16px] text-secondary text-[18px] leading-[156%] font-[500] bg-accent border-[2px] border-accent rounded-[6px] hover:bg-accent/50 hover:text-[#fff] transition-all duration-500"
                onClick={() => console.log("aaa")}
            />
            <Button
                text="Contact Us"
                styles="w-full px-[92px] py-[16px] text-secondary text-[18px] leading-[156%] font-[500] border-[2px] border-secondary rounded-[6px] hover:bg-primary hover:border-primary transition-all duration-500"
                onClick={() => console.log("aaa")}
            />
        </div>
        <span className="text-[12px] font-[400] leading-[133%] text-secondary/50">Free cancellation up to 14 days before departure</span>

    </div>
}