import { Component, For } from 'solid-js';
import { createViewportObserver } from '@solid-primitives/intersection-observer';
import { createSignal } from 'solid-js';
import Users from './users';
import 'animate.css';
import 'uno.css';

const App: Component = () => {
    return (
        <>
            <section class="bg-[#252a58] w-full h-screen flex flex-col justify-center ds:px-7">
                {() => {
                    const [isVisible, setVisible] = createSignal<boolean>(false);
                    const [intersectionObserver] = createViewportObserver();
                    return (
                        <div
                            class="w-full flex justify-center"
                            classList={{
                                'animate__animated animate__fadeInUp': isVisible(),
                            }}
                            use:intersectionObserver={(e) => {
                                // I set the signal only one time when it's false to prevent infinity animations on this section
                                if (!isVisible()) {
                                    setVisible(e.isIntersecting);
                                }
                            }}
                        >
                            <p class="text-[#cfffe4] text-center font-black ds:text-3xl ds:leading-[2.7rem] xl:w-8/12 xl:text-5xl xl:leading-[4rem]">
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

            <section class="relative bg-gray-700 w-full h-auto">
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
                            <div class="bg-[#cfffe4] ds:px-7 ds:py-14 ds:grid ds:gap-y-6 xl:grid xl:grid-cols-2 xl:gap-x-4 xl:px-10 xl:py-24 w-full">
                                <div
                                    classList={{
                                        'bg-[#252a58] rounded-3xl w-full ds:h-[12rem] xl:h-[30rem] animate__animated animate__fadeInUp':
                                            isVisible(),
                                    }}
                                ></div>

                                <div
                                    classList={{
                                        'bg-[#252a58] rounded-3xl w-full ds:h-[26rem] xl:h-[30rem] animate__animated animate__fadeInUp':
                                            isVisible(),
                                    }}
                                ></div>

                                <div
                                    classList={{
                                        'bg-[#252a58] rounded-3xl w-full ds:h-[8rem] xl:hidden animate__animated animate__fadeInUp':
                                            isVisible(),
                                    }}
                                ></div>
                            </div>
                        </>
                    );
                }}
            </section>

            <section class="relative bg-[#252a58] ds:px-7 ds:py-6 xl:px-10 xl:py-10 w-full h-auto">
                <For each={ Users }>
                    {
                        ( element ) => {
                            const [ isVisible, setVisible ] = createSignal<boolean>(false);
                            const [ intersectionObserver ] = createViewportObserver();
                            return(
                                <>
                                    {/* This is only a flag */}
                                    <div class="relative h-48 w-full flex items-center my-10">
                                        <div
                                            class="flag absolute top-36 w-full"
                                            use:intersectionObserver={(e) => {
                                                // I set the signal only one time when it's false to prevent infinity animations on this section
                                                if (!isVisible()) {
                                                    setVisible(e.isIntersecting);
                                                }
                                            }}
                                        ></div>
                                        <div
                                            classList={{
                                                'hidden': !isVisible(),
                                                'flex px-10 items-center w-full bg-[#cfffe4] rounded-3xl h-full animate__animated animate__fadeInUp': isVisible(),
                                            }}
                                        >
                                            <div class="rounded-full bg-[#252a58] min-w-32 min-h-32"></div>
                                            <div class="font-semibold text-3xl pl-8 truncate">{ element.username }</div>
                                        </div>
                                    </div>
                                </>
                            );
                        }
                    }
                </For>
            </section>
        </>
    );
};

export default App;
