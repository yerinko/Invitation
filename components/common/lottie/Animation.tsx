import React, {useEffect, useRef, useState} from 'react';
import {LottiePlayer} from "lottie-web";

const Animation = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [lottie, setLottie] = useState<LottiePlayer | null>(null);

    useEffect(() => {
        import('lottie-web').then((Lottie) => setLottie(Lottie.default));
    },[]);

    useEffect(() => {
        if(lottie && ref.current) {
            const animation = lottie.loadAnimation({
                container: ref.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '../../static/christmas.json',
            });
            return () => animation.destroy();
        }
    },[lottie]);

    return (
        <div ref={ref} />
    );
};

export default Animation;