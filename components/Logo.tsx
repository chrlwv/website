import React from 'react'

const Logo: React.FC = () => {
  const title: string = 'chrlwv.tech'

  return (
    <>
      <img className='separator' src='https://japi.rest/discord/v1/user/902937010103275581/avatar?size=32' /><h1 className="text-2xl font-bold text-gray-400 dark:text-slate-100">{title}</h1>
    </>
  )
}

export { Logo }
