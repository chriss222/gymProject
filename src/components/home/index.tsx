import { SelectedPage } from '@/shared/types'
import React from 'react';
import Button from '@/shared/Button';
import gymHomeLogo from '@/assets/gymHomeLogo.png';
import dumbell from '@/assets/dumbell.png';
import coloredDumbell from '@/assets/coloredDumbell.png';
import forbes from '@/assets/forbes.png';
import gatorade from '@/assets/gatorade.png';
import hydrate from '@/assets/hydrate.png';
import run from '@/assets/run.png';
import redbull from '@/assets/redbull.png';
import ufc from '@/assets/ufc.png';
import nike from '@/assets/nike.png';
import { useMediaQuery } from '@/hooks/useMediaQuery.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id="home"
            className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
        >
            <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 gap-60'>
                <div className='z-10 mt-32 md:basis-[40%]'>
                    <div className='md:-mt-20'>
                        <img alt="home-page-logo" className='m-auto' src={gymHomeLogo}></img> 
                        <p className='mt-8 md:text-start'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum mauris non sem dictum mollis. Vestibulum at magna tortor. Fusce tempus feugiat est sit amet luctus. Vivamus fermentum nunc at mollis rutrum. Quisque rhoncus, magna a aliquet dignissim, leo urna aliquam orci, sed vulputate lacus lorem vel nulla. Aliquam at orci tempus, scelerisque urna eget, pellentesque neque. Aliquam nec purus placerat, consequat ligula a, gravida leo. 
                        </p>
                    </div>
                    <div className='mt-8 flex items-center gap-8 md:justify-start'>
                        <Button setSelectedPage={setSelectedPage}>
                            Join Now
                        </Button>
                        <AnchorLink
                            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </div>
                </div>
                <div className='flex basis-[20%] justify-center md:ml-40 md:mt-16 md:justify-end'>
                    <div>
                        <img alt="homepage-image" className='max-md:hidden' src={hydrate} />
                    </div>
                </div>
            </div>
            {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6'>
                        <div className='flex items-center justify-between gap-8 flex-row'>
                            <img className="max-w-[150px]" src={redbull} />
                            <img className="max-w-[150px]" src={forbes} />
                            <img className="max-w-[150px]" src={gatorade} />
                            <img className="max-w-[150px]" src={ufc} />
                            <img className="max-w-[150px]" src={nike} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home