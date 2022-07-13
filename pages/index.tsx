import React from 'react'
import { Container } from '@/components'
import Head from 'next/head'

const HomePage: React.FC = () => {
const title: string = 'chrlwv.tech'

return (
<>

  <Head>
    <title>{title}</title>
  </Head>

  <Container>
    <br />
    <br />
    <br />
    <div className="mb-4">
      <img src="https://japi.rest/discord/v1/user/902937010103275581/avatar?size=256" />
      <br />
      <h2 className="text-3xl font-medium mb-1">chrlwv.tech</h2>
      <div>
        <div className="text-secondary font-mono">
          A multipurpose discord client written in <span
            className="font-bold text-yellow-200 text-lg">javascript</span>.
          Used to be a freelance start-up project but now it's a public client for all around the world users.
        </div>
      </div>
    </div>
    <div>
      <a href='https://discord.com/oauth2/authorize?client_id=902937010103275581&permissions=1916267615&scope=bot'><button
          className="px-4 py-2 rounded-l-xl text-white m-0 bg-green-500 hover:bg-green-600 transition">Invite</button></a>
      <a href='https://discord.com/invite/RPRfpnM6MZ'><button
          className="px-4 py-2 rounded-r-xl text-black bg-neutral-50 hover:bg-neutral-300 transition">Support</button></a>
    </div>
  </Container>
</>
 )
}

export default HomePage