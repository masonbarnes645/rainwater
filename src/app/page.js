import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{display:'flex', flexDirection:'row'}}>
        <img src="/drieduplandscape.jpg" height={'550px'} />
        <h2>{blurb}</h2>
      </Box>
      <Box>
        <button style={{borderRadius:'10px'}}>Rainwater Collection Calculator</button>
        <button style={{borderRadius:'10px'}}>Learn More about Water Scarcity</button>
        <button style={{borderRadius:'10px'}}>Take Action</button>
      </Box>
    </>
  );
}
















const blurb = "Water is life, but for millions, access to safe, reliable water is far from guaranteed. This website shines a light on the pressing issue of water scarcity—a growing challenge affecting communities worldwide. Explore insights into the causes and consequences of water shortages, discover strategies to conserve this precious resource, and join the movement to create sustainable solutions for a more equitable future. Together, we can secure the water supply for generations to come."