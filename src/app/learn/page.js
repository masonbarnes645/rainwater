import { Box, Typography } from "@mui/material";

export default function Learn() {
    return (
        <Box sx={{ margin: '5%', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
                Understanding Water Scarcity
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
                {learn1}
            </Typography>
            <Box 
                component="img" 
                src="drieduplandscape.jpg" 
                alt="A dried-up landscape" 
                sx={{ height: '350px', width: '50%', objectFit: 'cover', borderRadius: '8px' }}
            />
            <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
                {learn2}
            </Typography>
        </Box>
    );
}


const learn1 = `Water scarcity is the condition in which there are insufficient water resources to meet the demands of a population. This pressing issue arises from both natural and human factors. Droughts and changing rainfall patterns, driven by climate change, are shrinking available water supplies. Meanwhile, human activities such as overuse, pollution, and poor resource management exacerbate the problem. Alarmingly, over two billion people around the world live in regions experiencing high water stress, highlighting the urgent need to address this challenge.

Water scarcity stems from a variety of causes. Climate change is a significant factor, altering weather patterns and increasing the frequency of extreme weather events.`

const learn2 = ` Rising global temperatures are not only reducing freshwater supplies but also making it harder for ecosystems to recover from prolonged dry periods. Mismanagement of water resources is another major contributor. Groundwater and surface water are being depleted faster than they can be replenished, especially in areas where agriculture and industry rely heavily on water-intensive practices. Pollution further complicates the issue, as agricultural runoff, industrial waste, and untreated sewage contaminate freshwater sources, rendering them unsafe for use. At the same time, population growth drives up demand for water for drinking, food production, and sanitation, intensifying the strain on already limited supplies.

The impacts of water scarcity ripple across all aspects of life.Health is one of the most immediate areas of concern. Without access to clean water, communities are at greater risk of waterborne diseases such as cholera and dysentery. Food security also suffers, as limited water availability restricts agricultural output, leading to hunger and malnutrition in affected regions. Economically, industries dependent on water face disruptions in productivity, which can destabilize local economies. Environmentally, the overextraction of water depletes rivers, lakes, and aquifers, causing habitat destruction and a loss of biodiversity.

Addressing water scarcity requires a multi-faceted approach.`

