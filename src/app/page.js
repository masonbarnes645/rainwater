import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import Link from "next/link";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CalculateIcon from '@mui/icons-material/Calculate';
import CustomButton from "./components/CustomButton";



export default function Home() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <img src="/drieduplandscape.jpg" height={'550px'} />
        <h2>{blurb}</h2>
      </Box>
      <Box>
        <Link href={'/rainwater-calculator'}>
          <CustomButton Icon={CalculateIcon} />
        </Link>
        <Link href={'/learn'}>
          <CustomButton Icon={LocalLibraryIcon} />
        </Link>
        <Link href={'/take-action'}>
          <CustomButton Icon={WaterDropIcon} />
        </Link>
      </Box>
    </>
  );
}
















const blurb = "Water is life, but for millions, access to safe, reliable water is far from guaranteed. This website shines a light on the pressing issue of water scarcity—a growing challenge affecting communities worldwide. Explore insights into the causes and consequences of water shortages, discover strategies to conserve this precious resource, and join the movement to create sustainable solutions for a more equitable future. Together, we can secure the water supply for generations to come."