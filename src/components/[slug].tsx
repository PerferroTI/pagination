import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image";
import Link from "next/link";
import { api } from "../api/api"


import { useRouter } from 'next/router'
import Head from "next/head";
import { climatizadores } from "../utils/datas";

type Episode = {
  id: string;
  nome: string;
  climatizadores: [
    {
      url: string;
      basename: string;
      id: string;
    }
  ];
}

type EpisodeProps = {
  episode: Episode;
}

export function Episode({ episode }: EpisodeProps ) {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <div >
      <Head>
        <title>{episode.nome} | Pocastr</title>
      </Head>

      <div >
        <Link href="/">
          <a target="_blank">voltar</a>
        </Link>
        
        <Image
          width={160}
          height={160}
          src={climatizadores[0].climatizadores[0].url}
          objectFit="cover"
          alt="Trabalhos"
        />

          <Image
          width={160}
          height={160}
          src={climatizadores[0].climatizadores[0].url}
          objectFit="cover"
          alt="Trabalhos"
        />
  
      </div>

      <header>
        <h1>{episode.nome}</h1>
      </header>

      <div
      
        dangerouslySetInnerHTML={{
          __html:
          episode.nome
        }} 
      />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('climatizadores')

  const paths = data.map(episode => ({
    params: {
      slug: episode.id
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await api.get(`/climatizadores`);

  const episode = {
    id: data.id,
    nome: data.nome,
    climatizadores: [
      {
      url: data.url,
      basename: data.basename,
      id: data.id
      }
    ]
  }

  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}