"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const FilterItem = ({ link }: { link: string }) => {
    const params = useSearchParams()
    const isActive = params.get('category') === link

    return (
        <li>
            <Link href={{ query: { category: link } }} className={`whitespace-nowrap rounded-lg px-8 py-2.5 capitalize ${isActive && 'gradient_blue-purple'}`}>{link}</Link>
        </li>
    )
}

export default FilterItem