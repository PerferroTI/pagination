import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';


 
type Repository = {
  nome: string;

  climatizadores: [
    {
      url: string;
      basename: string;
    }
  ];
}

export default function index(props) {
  const {data: repositories} = useApi<Repository[]>('http://localhost:5000/climatizadores')
  
  return (
    <ul>
      {repositories?.map(repo => {
        return (
          <>
            <div>
              <TabsUnstyled defaultValue={0}>
                <TabsListUnstyled>
                  <TabUnstyled>{repo.nome}</TabUnstyled>
                  <TabUnstyled>{repo.nome}</TabUnstyled>
                  <TabUnstyled>{repo.nome}</TabUnstyled>
                </TabsListUnstyled>

              <TabPanelUnstyled value={0}>First content</TabPanelUnstyled>
              <TabPanelUnstyled value={1}>Second content</TabPanelUnstyled>
              <TabPanelUnstyled value={2}>Third content</TabPanelUnstyled>
              </TabsUnstyled>
            </div>
          </>
        )
      })}
      
    </ul>
  );
}



{/* <li key={repo.nome}>
              <strong>{repo.climatizadores[0].url}</strong>
              <p>{repo.nome}</p>
              <Image src={repo.climatizadores[0].url} alt={repo.nome} width={200} height={150} />
            </li> */}