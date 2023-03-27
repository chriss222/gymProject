import React from 'react';
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import { BenefitType, SelectedPage } from '@/shared/types';
import HeadingMessage from '@/shared/HeadingMessage.js';
import Benefit from './Benefit';
import run from "@/assets/run.png";
import Button from '@/shared/Button';
import { motion } from "framer-motion";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est. Mattis rhoncus urna neque viverra justo nec ultrices dui." 
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est. Mattis rhoncus urna neque viverra justo nec ultrices dui." 
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est. Mattis rhoncus urna neque viverra justo nec ultrices dui." 
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

export const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className='mx-auto min-h-full md:m-[75px]'
        >
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                <div className='md:my-5 md:w-3/5'>
                    <HeadingMessage>
                        Lorem ipsum dolor sit amet
                    </HeadingMessage>
                    <p className='my-5 text-sm'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est.
                    </p>
                </div>

                <div className='md:flex items-center justify-between gap-8 mt-5'>
                    {
                        benefits.map((benefit: BenefitType, i: number) => 
                            <Benefit 
                                key={i}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                setSelectedPage={setSelectedPage}
                            />
                        )
                    }
                </div>

                <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
                    <img src={run} className="mx-auto"  />
                    <div>
                        <div className='relative'>
                            <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-coloredDumbell'>
                                <div>
                                    <HeadingMessage>
                                        Quam adipiscing vitae proin sagittis nisl rhoncus mattis.
                                    </HeadingMessage>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='my-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies mi quis hendrerit dolor magna eget est. Mattis rhoncus urna neque viverra justo nec ultrices dui. Erat velit scelerisque in dictum non consectetur. Faucibus pulvinar elementum integer enim neque volutpat ac. Enim sit amet venenatis urna cursus eget nunc scelerisque. Porta nibh venenatis cras sed felis. Est ultricies integer quis auctor elit sed vulputate mi. Bibendum est ultricies integer quis auctor elit sed.
                            </p>
                            <p className='mb-5'>
                                Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Ut venenatis tellus in metus vulputate eu scelerisque. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Varius duis at consectetur lorem donec massa. Neque volutpat ac tincidunt vitae. Nunc aliquet bibendum enim facilisis gravida neque. 
                            </p>
                        </div>
                        <div className='relative mt-16'>
                            <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-dumbell'>
                                <Button
                                    setSelectedPage={setSelectedPage}
                                >
                                    JOIN NOW
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
