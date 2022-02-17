import { Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import { ImageTabPanel } from "../ImageTabPanel";
import Image from 'next/image'
import React from "react";
import Foto from '../../../../public/vercel.svg'

function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

// Component redenrizado dentro do TabPanel para exibir as imagens
type ImageTabProps = {
    image1?: any;
    image2?: any;
    image3?: any;
    image4?: any;
    image5?: any;
    image6?: any;
    image7?: any;
    children?: any;
    id?: string;
  };
  
export function ImageTab({
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    children, //tenho que achar algum lugar pra por o childrten sem dar erro
  }: ImageTabProps) {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div >
          {/* estilizar essa parte */}
        <Tabs
          orientation="vertical"
          variant="standard"
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
        //   className={styles.tabs}
          
        >
          <Tab
            icon={<Image src={Foto} width="50" height="50" alt="Image" />}
            {...a11yProps(0)}
          />
      
        </Tabs>
        
        <ImageTabPanel value={value} index={0} />
      </div>
    );
  }
  