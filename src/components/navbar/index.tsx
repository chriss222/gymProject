import React from 'react';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import Button from '../../shared/Button';
import gymLogo from "@/assets/gymLogo.png";

const navLinks: Array<string> = ["Home", "Benefits", "Classes", "Contact Us"]

interface Props {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

export const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img className="max-w-[100px]" src={gymLogo} />
                        {isAboveMediumScreens ? 
                        (<div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                {navLinks.map((page: string, i: number) => (
                                    <Link 
                                        key={i}
                                        page={page}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                ))}
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign In</p>
                                <Button setSelectedPage={setSelectedPage}>Become a Member</Button>
                            </div>
                        </div>)
                        : (
                            <button 
                                className='rounded-full bg-secondary-500 p-2'
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className='h-6 w-6 text-white' />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                    <div className='flex justify-end p-12'>
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className='h-6 w-6 text-gray-400'></XMarkIcon>
                        </button>
                    </div>
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        {navLinks.map((page: string, i: number) => (
                            <Link 
                                key={i}
                                page={page}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        ))}
                    </div>
                </div>
            )}

        </nav>
    )
}