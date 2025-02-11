"use server"


import Filters from "@/components/Filters"
import ResourceCard from "@/components/ResourceCard"
import SearchForm from "@/components/SearchForm"
import { getResources } from "@/sanity/actions"

const HomePage = async () => {

  const resources = await getResources({
    category: '',
    query: '',
    page: '1'
  })

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

      <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        {/* <Header
          query={searchParams?.query || ''}
          category={searchParams?.category || ''}
        /> */}

        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                id={resource._id}
                {...resource}
              />
            ))
          ) : (
            <p className="body-regular text-white-400">
              No resources found
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

export default HomePage