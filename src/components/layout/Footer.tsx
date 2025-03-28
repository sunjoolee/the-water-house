import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return <div className="w-screen h-auto bg-black text-white flex flex-col gap-8 px-4 py-8">
        <Links />
        <ContactInfo />
        <CopyWrite />
    </div >;
};

export default Footer;


const Links = () => {
    return <div className="flex flex-col justify-start">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <p>Instagram</p>
        <p>Terms and Conditions 이용약관</p>
        <p>Privacy Policy 개인정보정책</p>
    </div>
}

const ContactInfo = () => {
    return <div className="flex flex-col justify-start">
        <p>+82-2-1234-1234</p>
        <p>info@thewaterhouse.kr</p>
        <p>서울특별시 종로구 삼청로 35-83, 더 워터하우스</p>
    </div>
}

const CopyWrite = () => {
    return <div className="flex flex-col justify-start">
        <p>2020 LOG HOTEL GROUP Inc. All rights reserved.</p>
        <div className="flex justify-center items-center">
            <Image src="/layout/logo.png" alt="logo" width={100} height={100} />
        </div>
    </div >
}

