import { AppBar, Box } from "@mui/material";
import Link from "next/link";

export default function CustomAppBar() {

    return (
        <AppBar>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginX:'15px' }}>
                <Link href={"/"}>
                    <h1>Home</h1>
                </Link>
                <Link href={"/learn"}>
                    <h1>Learn More</h1>
                </Link>
                <Link href={"/take-action"}>
                    <h1>Take Action</h1>
                </Link>
                <Link href={"/rainwater-calculator"}>
                    <h1>Rainwater Calculator</h1>
                </Link>
            </Box>
        </AppBar>
    )
}