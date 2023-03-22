import { SelectedPage } from '@/shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface Props {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    const pageHref = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
            className={`${selectedPage === pageHref ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href={`#${pageHref}`}
            onClick={() => setSelectedPage(pageHref)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link