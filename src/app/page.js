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
    <Box>
      <Box sx={{margin:'8%' }}>
          <h1 style={{ textAlign: 'center', fontSize: '80px', fontStyle: 'italic' }}> Every Drop </h1>
        <Box sx={{marginTop:'0px'}}>
          <h1 style={{ fontWeight: '100' }}>{blurb}</h1>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Link href={'/learn'}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <CustomButton Icon={LocalLibraryIcon} />
            <h2>Learn More</h2>
          </Box>
        </Link>
        <Link href={'/take-action'}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <CustomButton Icon={WaterDropIcon} />
            <h2>Take Action</h2>
          </Box>
        </Link>
        <Link href={'/rainwater-calculator'}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <CustomButton Icon={CalculateIcon} />
            <h2>Rainwater Calculator</h2>
          </Box>
        </Link>
      </Box>
    </Box>

  );
}
















const blurb = "Water is life, but for millions, access to safe, reliable water is far from guaranteed. This website shines a light on the pressing issue of water scarcity—a growing challenge affecting communities worldwide. Explore insights into the causes and consequences of water shortages, discover strategies to conserve this precious resource, and join the movement to create sustainable solutions for a more equitable future. Together, we can secure the water supply for generations to come."