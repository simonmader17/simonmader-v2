import { ChevronDownIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react";

function Header() {
    const [chevronDownIconOpacity, setChevronDownIconOpacity] = useState(1);

    useEffect(() => {
        const onScroll = () => {
            setChevronDownIconOpacity((100 - window.scrollY) / 100);
            console.log((100 - window.scrollY) / 100)
        }

        window.addEventListener("scroll", onScroll);
    }, [chevronDownIconOpacity])

    return (
        <div className="bg-hero-brick-wall bg-fixed bg-headerFooter min-h-screen w-screen flex flex-col items-center justify-center">
            <div className="sticky top-0">
                <img className="mx-auto relative h-20" src="/images/pepejam3.gif" />
                <p className="text-4xl pl-1 mb-4 mt-0 font-Graph35">Simon.</p>
            </div>
            <ChevronDownIcon className="w-12 text-green-500 fixed bottom-0 animate-bounce transition duration-500 ease-out" style={{ opacity: chevronDownIconOpacity }} />
        </div>
    )
}

export default Header;