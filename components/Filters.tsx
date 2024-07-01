import FilterItem from './FilterItem'

const links = ['all', 'next 13', 'frontend', 'backend', 'full stack']

const Filters = () => {
    return (
        <ul className='text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-x-2xl'>
            {links.map(link => <FilterItem key={link} link={link} />)}
        </ul>
    )
}

export default Filters