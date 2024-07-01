"use server"


import Filters from "@/components/Filters"
import SearchForm from "@/components/SearchForm"
import { getResources } from "@/sanity/actions"

const HomePage = async () => {

  const resources = await getResources({
    category: '',
    query: '',
    page: '1'
  })

  console.log(resources)

  return (
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>
            JavaScript Mastery Resources
          </h1>
        </div>
        <SearchForm
        />
      </section>

      <Filters />
    </main>
  )
}

export default HomePage