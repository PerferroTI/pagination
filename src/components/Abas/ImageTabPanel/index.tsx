import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Image from 'next/image'
import Foto from '../../../../public/vercel.svg'

export function ImageTabPanel(props) {
    const { children, image, value, index, ...other } = props;
  
    return (
      <div
        role="imagetabpanel"
        hidden={value !== index}
        id={`image-tabpanel-${index}`}
        aria-labelledby={`image-tab-${index}`}
        {...other}
        // className={styles.imageTabPanelContainer}
      >
        {value === index && (
          <Box p={3}>
               {/* estilizar essa parte */}
            <Image  src={Foto} width={"100"} height={"100"} alt="" />
          </Box>
        )}
      </div>
    );
  }
  
  ImageTabPanel.propTypes = {
    image: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };