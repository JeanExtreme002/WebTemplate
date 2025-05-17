import Head from 'next/head';

import { config } from '@/lib';

export default function Header() {
  const title = config.website.title + ' | ' + config.website.subtitle;

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover'
        ></meta>
      </Head>
    </>
  );
}
