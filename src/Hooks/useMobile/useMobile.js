import {useState, useEffect} from "react";

const useMobile = () => {
const [ mobile, setIsMobile ] = useState(false);

    useEffect(() => {
        const handleSize = () => {
            if(window.innerWidth < 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        window.addEventListener('resize', handleSize);
        return () => {
            window.removeEventListener('resize', handleSize);
        };
    }, [mobile]);
    return mobile
};

export default useMobile;