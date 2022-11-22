import type { Component } from 'solid-js';
import { createViewportObserver } from '@solid-primitives/intersection-observer';
import { createSignal } from 'solid-js';
import 'animate.css';
import 'uno.css';

const App: Component = () => {
    return (
        <>
            <section class="bg-gray-600 w-full h-screen flex flex-col justify-center">
                {() => {
                    const [isVisible, setVisible] = createSignal<boolean>(false);
                    const [intersectionObserver] = createViewportObserver();
                    return (
                        <div
                            class="text-left ml-20"
                            classList={{
                                'animate__animated animate__fadeInLeft': isVisible(),
                            }}
                            use:intersectionObserver={(e) => {
                                // I set the signal only one time when it's false to prevent infinity animations on this section
                                if (!isVisible()) {
                                    setVisible(e.isIntersecting);
                                }
                            }}
                        >
                            <p class="font-medium text-white text-4xl mb-2">
                                SolidJS Primitives
                            </p>
                            <p class="text-2xl text-white">
                                Examples using{' '}
                                <a href="https://github.com/solidjs-community/solid-primitives/tree/main/packages/intersection-observer">
                                    Intersection Observer
                                </a>{' '}
                                & <a href="https://animate.style/">Animate.css</a>
                            </p>
                        </div>
                    );
                }}
            </section>

            <section class="relative bg-gray-700 w-full h-screen">
                {() => {
                    const [intersectionObserver] = createViewportObserver();
                    const [isVisible, setVisible] = createSignal<boolean>(false);
                    return (
                        <>
                            {/* This is only a flag */}
                            <div
                                class="flag absolute top-14 w-full"
                                use:intersectionObserver={(e) => {
                                    // I set the signal only one time when it's false to prevent infinity animations on this section
                                    if (!isVisible()) {
                                        setVisible(e.isIntersecting);
                                    }
                                }}
                            ></div>
                            <div class="grid grid-cols-2 p-14 w-full h-full">
                                <div
                                    classList={{
                                        'bg-cyan-500 w-full h-full rounded-3xl animate__animated animate__fadeInUp':
                                            isVisible(),
                                    }}
                                ></div>

                                <div class="ml-4 w-full h-full grid">
                                    <div
                                        classList={{
                                            'bg-cyan-400 rounded-3xl w-full mb-2 animate__animated animate__fadeInUp':
                                                isVisible(),
                                        }}
                                    ></div>

                                    <div
                                        classList={{
                                            'bg-cyan-300 rounded-3xl w-full mt-2 animate__animated animate__fadeInUp':
                                                isVisible(),
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </>
                    );
                }}
            </section>

            <section class="relative bg-neutral-800 w-full h-[70vh] flex flex-col items-center justify-center">
                {() => {
                    const [isVisible, setVisible] = createSignal<boolean>(false);
                    const [intersectionObserver] = createViewportObserver();
                    return (
                        <>
                            {/* This is only a flag */}
                            <div
                                class="flag absolute top-36 w-full"
                                use:intersectionObserver={(e) => {
                                    // I set the signal only one time when it's false to prevent infinity animations on this section
                                    if (!isVisible()) {
                                        setVisible(e.isIntersecting);
                                    }
                                }}
                            ></div>
                            <div class="text-white font-medium text-3xl mb-12">
                                Lorem Ipsu
                            </div>
                            <div
                                class="flex justify-around w-full h-1/2"
                                classList={{
                                    'animate__animated animate__zoomIn': isVisible(),
                                }}
                            >
                                <div class="bg-cyan-300 w-1/4 rounded-3xl h-64"></div>
                                <div class="bg-cyan-300 w-1/4 rounded-3xl h-64"></div>
                                <div class="bg-cyan-300 w-1/4 rounded-3xl h-64"></div>
                            </div>
                        </>
                    );
                }}
            </section>
        </>
    );
};

export default App;
