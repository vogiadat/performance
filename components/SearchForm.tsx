import Image from "next/image"
import { Input } from "@/components/ui/input"


const SearchForm = () => {
    const handleSubmitSearch = async (formData: FormData) => {
        "use server"
        const search = formData.get('search')
        console.log({ search })
    }
    return (
        <form action={handleSubmitSearch} className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
            <label className="flex-center relative w-full max-w-3xl">
                <Image
                    src={'/magnifying-glass.svg'}
                    alt="Search Icon"
                    width={32}
                    height={32}
                    className="absolute left-8"
                />
                <Input
                    className="bg-black-400 border-0 h-fit base-regular py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
                    type="text"
                    name="search"
                    placeholder="Search"
                />
            </label>
        </form>
    )
}

export default SearchForm