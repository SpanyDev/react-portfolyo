import { IconHeart } from "@tabler/icons-react";

const Footer = () => {
    return (
        <div className="flex items-center justify-around  w-full p-4">
            <div className="flex items-center justify-center">
                <h1 style={{ fontFamily: "Heebo, sans-serif", fontWeight: 400 }} className="text-black mr-1">Created with</h1>
                <IconHeart color="red" />
                <h1 style={{ fontFamily: "Heebo, sans-serif", fontWeight: 400 }} className="text-black ml-1">by <span><a href="https://github.com/SpanyDev" className="text-blue-500">Spany</a></span></h1>
            </div>
        </div>
    )
};

export default Footer;
