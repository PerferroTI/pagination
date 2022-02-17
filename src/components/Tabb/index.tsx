import React from 'react';
import { useApi } from '../../hooks/useApi';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import Image from 'next/image';
 
type Repository = {
  nome: string;
  id: string;
  climatizadores: [
    {
      url: string;
      basename: string;
    },
    {
      url: string;
      basename: string;
    },
    {
      url: string;
      basename: string;
    },
    {
      url: string;
      basename: string;
    }
  ];
}

export function Tabb (props) {
  const {data: repositories} = useApi<Repository[]>('climatizadores')

  return (
    <div>
       <ul>
      {repositories?.map(repo => {
        return (
            <div key={repo.id}>
              <TabsUnstyled defaultValue={0} style={{display: 'flex'}}>
                  <h1>{repo.nome}</h1>

                <TabsListUnstyled 
                  style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    width: '4rem',
                    gap: '1rem', 
                    border: 'none',
                    borderRight: '1px solid #000'
                  }}>
                  <TabUnstyled style={{cursor: 'pointer', border: 'none', background: 'transparent'}}>
                    <Image src={repo.climatizadores[0].url} width="50" height="50" alt="Image" objectFit='cover'/>
                  </TabUnstyled>

                  <TabUnstyled style={{cursor: 'pointer', border: 'none', background: 'transparent'}}>
                    <Image src={repo.climatizadores[1].url} width="50" height="50" alt="Image" objectFit='cover'/>
                  </TabUnstyled>

                  <TabUnstyled style={{cursor: 'pointer', border: 'none', background: 'transparent'}}>
                    <Image src={repo.climatizadores[2].url} width="50" height="50" alt="Image" objectFit='cover'/>
                  </TabUnstyled>

                  <TabUnstyled style={{cursor: 'pointer', border: 'none', background: 'transparent'}}>
                    <Image src={repo.climatizadores[3].url} width="50" height="50" alt="Image" objectFit='cover'/>
                  </TabUnstyled>
                </TabsListUnstyled>
              
                <div style={{margin: 'auto'}}>
                  <TabPanelUnstyled value={0}>
                    <Image src={repo.climatizadores[0].url} width="500" height="300" alt="Image" objectFit='contain'/>
                  </TabPanelUnstyled>

                  <TabPanelUnstyled value={1}>
                    <Image src={repo.climatizadores[1].url} width="500" height="300" alt="Image" objectFit='contain'/>
                  </TabPanelUnstyled>

                  <TabPanelUnstyled value={2}>
                    <Image src={repo.climatizadores[2].url} width="500" height="300" alt="Image" objectFit='contain'/>
                  </TabPanelUnstyled>

                  <TabPanelUnstyled value={3}>
                    <Image src={repo.climatizadores[3].url} width="500" height="300" alt="Image" objectFit='contain'/>
                  </TabPanelUnstyled>
                </div>

              </TabsUnstyled>
            </div>
          )
        })}
      </ul>
    </div>
  );
}
