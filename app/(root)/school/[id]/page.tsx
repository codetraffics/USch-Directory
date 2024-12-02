import { client } from '@/sanity/lib/client';
import { SCHOOL_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import markdownit from 'markdown-it';
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/components/View';

const md = markdownit()

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }>}) => {
    const id = (await params).id;

    console.log({id})

    const school = await client.fetch(SCHOOL_BY_ID_QUERY, { id })

    if(!school) return notFound();

    const parsedContent = md.render(school?.info || '');

  return (
    <>
    <section className='blue_container !min-h-[230px]'>
        <p className='tag'>{school.residency}</p>
    <h1 className='heading'>{school.title}</h1>
    <p className='sub-heading !max-w-5xl'>{school.description}</p>
    </section>

    <section className='section_container'>
        <div className='space-y-5 max-w-4xl mx-auto'>
            <div className='flex gap-5'>
            <p className='category-tag'>Region:</p>
                <p className='text-20-medium'>Asunafo South Municipal</p>
                
            </div>

            <div className='flex-between gap-5'>
            <p className='category-tag'>District:</p>
                <p className='text-20-medium'>{school.district}</p>
                
            </div>

            <div className='flex-between gap-5'>
                <p className='text-20-medium'>{school.district}</p>
                <p className='category-tag'>{school.region}</p>
            </div>

            <div className='flex-between gap-5'>
                <p className='text-20-medium'>{school.district}</p>
                <p className='category-tag'>{school.region}</p>
            </div>

            <h3 className='text-30-bold'>School Details</h3>
        
        {parsedContent ? (
            <article 
                className='prose max-w-4xl font-work-sans break-all'
                dangerouslySetInnerHTML = {{ __html: parsedContent }}
            />
        ) : (
            <p className='no-result'>No details provided</p>
        )}
        </div>

        <hr className='divider' />

        {/* Editor selected part */}

        <Suspense fallback={<Skeleton className='view-skeleton' />}>
            <View id={id} />
        </Suspense>
    </section>
    </>
  )
}

export default page