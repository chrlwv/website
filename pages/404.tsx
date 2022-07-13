import React from 'react'
import { Container } from '@/components'
import Head from 'next/head'

const HomePage: React.FC = () => {
const title: string = 'chrlwv.tech'

return (
<>

  <Head>
    <title>404: {title}</title>
  </Head>

  <Container>
  <section className="px-4 py-24 mx-auto max-w-7xl">
  <div className="w-full mx-auto text-center lg:w-2/3">
    <h1 className="mb-4 text-6xl font-thin text-white">404</h1>
    <p className="mb-3 text-xl font-bold text-gray-300 md:text-2xl">Oh no! We couldn’t find the page you were looking for.</p>
  </div>
</section>

  </Container>
</>
 )
}

export default HomePage