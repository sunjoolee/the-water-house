
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxScrollWithDim() {
    useGSAP(() => {
        // dim effect
        gsap.fromTo(
            '.main-section-dim',
            { opacity: 0 },
            {
                opacity: 0.5,
                scrollTrigger: {
                    trigger: '.main-section-contents',
                    start: 'top top',
                    end: '+=100',
                    scrub: true,
                },
            }
        );
        // scroll contents
        gsap.fromTo(
            '.main-section-contents',
            { opacity: 0 },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.main-section-contents',
                    start: 'top top',
                    end: '+=500',
                    scrub: true,
                },
            }
        );

        // fixed contents
        ScrollTrigger.create({
            trigger: '.main-section-contents',
            start: 'top top',
            end: '+=500',
            pin: true,
            scrub: true,
            markers: true,
        });

        // contents scroll complete, then move background
        gsap.to('.main-section-bg', {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: '.main-section-contents',
                start: 'bottom bottom',
                end: '+=50%',
                scrub: true,
            },
        });
    }, []);

    return (
        <section className="relative h-[300vh]">
            {/* background image */}
            <div
                className="main-section-bg fixed top-0 left-0 w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/main/section1_main_bg.png')" }}
            ></div>

            {/* dim layer */}
            <div className="main-section-dim fixed top-0 left-0 w-full h-screen bg-black opacity-0 z-1 pointer-events-none transition-opacity"></div>

            {/* fixed + scroll contents */}
            <div className="main-section-contents relative z-10 h-[200vh] opacity-0 text-white pt-[300px]">
                <Description className="pt-[300px]" />
                <Description />
            </div>
        </section >
    );
}


const Description = ({ className }: { className?: string }) => {
    return (
        <div className={`text-white flex flex-col gap-4 ${className}`}>
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
