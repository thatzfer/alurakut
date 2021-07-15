import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';
import { useRouter } from 'next/dist/client/router';

function ProfileSidebar(propriedades){
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style= {{ borderRadius: '8px' }}/>
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
        @{propriedades.githubUser}
        </a>
      </p>
      <hr />


      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsArea(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.area} ({propriedades.item.length})
      </h2>
      <ul>
        {propriedades.item.slice(0, 6).map((itemAtual) => {
          return (
            <li key={itemAtual.id}>
              <a href={itemAtual.url}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  const [comunidades, setComunidades] = React .useState([
  {
    id:'23423423423',
    title: 'Eu odeio acordar cedo',
    image: 'http://alurakut.vercel.app/capa-comunidade-01.jpg',
    url: 'https://instagram.com/thaiismusic'
  },
  {  
    id:'4234234543',
    title: 'THAIIS',
    image: 'data:image/jpeg;base64,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',
    url: 'https://www.youtube.com/watch?v=LktLqBAm8dI',
  },
  {  
    id:'16498578254',
    title: 'Eu amo true crime',
    image: 'data:image/jpeg;base64,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',
    url: 'https://www.modusoperandipodcast.com/'
  },
  {  
    id:'464546454645',
    title: 'Meu querido eu sou cantoura',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdIbece9KaCWdRds2Z4dUUe8A0aXqihgzdkg&usqp=CAU',
    url: 'https://open.spotify.com/artist/6rk3l4BH83MMtX4snVTZM7'
  },
  {  
    id:'476458549',
    title: 'Me contrata por favor',
    image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    url: 'https://linkedin.com/in/ferrazthais'
  },
  {  
    id:'497645954',
    title: 'SE VACINE, MINHA BENÇA',
    image: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    url: 'https://minhavacina.recife.pe.gov.br/'
  },
  ]);
  //const comunidades = comunidades[0];
  const alteradorDeComunidades = comunidades[1];
  console.log('nosso teste', );
  const usuarioAleatorio = 'thatzfer';
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'erikjborges', 
    'marcoscurymoreira', 
    'lauraol', 
    'inglyd', 
    'WelissonLuca', 
    'danielalfb'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style= {{ gridArea: 'profileArea'}}>
        <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>

        <div className="welcomeArea" style= {{ gridArea: 'welcomeArea'}}>   
          <Box>
            <h1 className="title">
              Bem vindo(a), {usuarioAleatorio}
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subtitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e){
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);

              console.log('Campo: ', dadosDoForm.get('title'));
              console.log('Campo: ', dadosDoForm.get('image'));

              const comunidade = {
                id: new Date().toISOString,
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('image'),
              }
              
              //comunidades.push('Alura Stars');
              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
              }}>
              <div>
                <input 
                placeholder="Qual vai ser o nome da sua comunidade?"
                name="title"
                aria-label="Qual vai ser o nome da sua comunidade?"
                type="text"
                />
              </div>
              <div>
                <input 
                placeholder="Coloque uma URL pra usarmos de capa"
                name="image"
                aria-label="Coloque uma URL pra usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style= {{ gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({pessoasFavoritas.length})
            </h2>
            <ul>
                {comunidades.map((itemAtual) => {
                  return (
                  <li key={itemAtual.id}>
                      <a href={itemAtual.url}>
                      <img src={itemAtual.image} />;
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                  )
                })}
              </ul>
          </ProfileRelationsBoxWrapper>  
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                 <li key={itemAtual.title}>
                    <a href={`/users/${itemAtual}`}>
                    <img src={`https://github.com/${itemAtual}.png`} />;
                    <span>{itemAtual}</span>
                  </a>
                 </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>

      </MainGrid>
    </>
  )
}
