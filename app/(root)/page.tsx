import SearchForm from "@/components/SearchForm";
import SchoolCard, { SchoolCardType } from "@/components/SchoolCard";
import { SCHOOLS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";


export default async function Home({ searchParams }: {
  searchParams: Promise<{query?: string }>
}) {

    const query = (await searchParams).query;
    const params = { search: query || null };
    const { data: schools } = await sanityFetch({
      query: SCHOOLS_QUERY,
      params
    })

    return (
    <>
      <section className="blue_container">
        <h1 className="heading">Find Your School, <br /> Connect with Administrators</h1>
        <p className="sub-heading !max-w-3xl">Search for Senior High Schools with their Location, Gender and Residency and Connect with School Administrators</p>
      
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Schools'}
        </p>

        <ul className="mt-7 card_grid">
          {schools?.length > 0 ? (
            schools.map((school: SchoolCardType) => (
              <SchoolCard key={school?._id} school={school} />
            ))
          ): (
            <p className="no-results">No schools found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
