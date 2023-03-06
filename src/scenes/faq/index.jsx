import {Box, useTheme, Typography} from "@mui/material";
import Header from "../../components/Header";
import { Accordion } from "@mui/material";
import {AccordionSummary} from "@mui/material";
import {AccordionDetails} from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";
import {tokens} from "../../theme";

const FAQ=()=>{
const theme = useTheme();
const colors = tokens(theme.palette.mode);

return <Box m="20px">
  <Header title="FAQ"  subtitle="Frequently Asked Questions Page"/>
  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
        <Typography color={colors.greenAccent[500]} variant="h5"> 
        An Important Question
        </Typography>
    </AccordionSummary>
    <AccordionDetails>
       <Typography >
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quasi ratione alias fugit, aut minima sint amet aliquam iste aspernatur!
         </Typography> 
    </AccordionDetails>
  </Accordion>

  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
        <Typography color={colors.greenAccent[500]} variant="h5"> 
        An Important Question
        </Typography>
    </AccordionSummary>
    <AccordionDetails>
       <Typography >
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quasi ratione alias fugit, aut minima sint amet aliquam iste aspernatur!
         </Typography> 
    </AccordionDetails>
  </Accordion>


  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
        <Typography color={colors.greenAccent[500]} variant="h5"> 
        An Important Question
        </Typography>
    </AccordionSummary>
    <AccordionDetails>
       <Typography >
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quasi ratione alias fugit, aut minima sint amet aliquam iste aspernatur!
         </Typography> 
    </AccordionDetails>
  </Accordion>

  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
        <Typography color={colors.greenAccent[500]} variant="h5"> 
        An Important Question
        </Typography>
    </AccordionSummary>
    <AccordionDetails>
       <Typography >
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quasi ratione alias fugit, aut minima sint amet aliquam iste aspernatur!
         </Typography> 
    </AccordionDetails>
  </Accordion>


  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
        <Typography color={colors.greenAccent[500]} variant="h5"> 
        An Important Question
        </Typography>
    </AccordionSummary>
    <AccordionDetails>
       <Typography >
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quasi ratione alias fugit, aut minima sint amet aliquam iste aspernatur!
         </Typography> 
    </AccordionDetails>
  </Accordion>

</Box>
}
export default FAQ;