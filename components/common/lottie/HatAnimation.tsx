import React, {useEffect, useRef, useState} from 'react';
import {LottiePlayer} from "lottie-web";
import styled from "styled-components";

const HatAnimation = () => {
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
                path: '../../static/hat.json',
            });
            return () => animation.destroy();
        }
    },[lottie]);

    return (
        <Hat>
        <div ref={ref} />
        </Hat>
    );
};

export default HatAnimation;

const Hat = styled.div`
    width: 100px;
    height: 0px;
    float: right;
`