import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainSection = () => {

    useGSAP(() => {
        gsap.to('.main-section-bg', {
            yPercent: 30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.main-section-container',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });

        gsap.to('.main-section-contents', {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.main-section-container',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            },
        });
    }, []);

    return <section className="main-section-container w-screen h-screen relative overflow-hidden">
        <div className="main-section-bg w-screen h-full bg-[url('/main/section1_main_bg.png')] bg-no-repeat bg-center bg-cover absolute top-0 left-0" />
        {/* <div className="main-section-pannel w-screen h-screen bg-black opacity-0 z-5" /> */}

        <div className="main-section-contents w-screen h-full z-10 flex flex-col gap-4">
            <Description />
        </div>
    </section >;
};

export default MainSection;

const Description = () => {
    return (
        <div className="text-white flex flex-col gap-4 pt-[300px]">
            <p>
                더 워터하우스<br />
                물, 가장 자연스러운 움직임<br />
            </p>
            <p>
                가장 자연스러운 서울의 모습이 남아있는 북촌 <br />
                한옥마을에 인왕산의 사계절을 자연스럽게 <br />
                품은 집을 짓다.
            </p>
            <p>
                더 워터하우스는 흐르는 물처럼 잔잔하고 유연한<br />
                정취 속에서 나만의 흐름을 찾을 수 있는 곳입니다.장소의 본질을 고민한 더 워터하우스는 여러 창작자들의 조화로운 감각으로 엮은 영감의 공간을 선보입니다.
            </p>
        </div>
    );
}
