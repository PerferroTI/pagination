
import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Tab, Tabs} from "@mui/material";
import Image from "next/image";
import Link from 'next/link'
import {AppBar} from "@mui/material";
import Foto from '../../../public/vercel.svg'
import styles from "./styles.module.scss";
import { ImageTab } from "../Abas/ImageTab";
import TabContext from '@mui/lab/TabContext';



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



interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {/* {value === index && (
        <Box >
          <Typography>{children}</Typography>
        </Box>
      )} */}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export function Prod() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} >
          <ImageTab
            image1={Foto}
            image2={Foto}
            image3={Foto}
            image4={Foto}
            image5={Foto}
          >
            <span>
              <span>{'title'}</span>
              <span>{"Ideal para médio e pequenos ambientes como: padarias, escritórios e salões de beleza."}</span>
              bvazaoDeAr="13.000 M³/h"
              dimensoes="1,05 x 1,20 x 1,00"
              abertura="0,62 x 0,63"
              detalhes=
                "Hélice direto no motor, painel digital com controlador de velocidade e controle remoto"
            </span>
            <AppBar/>
          </ImageTab>
        </TabPanel>
    </>
  );
}


