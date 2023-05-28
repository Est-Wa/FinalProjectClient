
import { Box, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';


function IconComponent({ status }) {
    switch (status) {
        case 'great':
            return <SentimentSatisfiedAltIcon sx={{  width: '50px', height: '50px' }} />
        case 'ok':
            return <SentimentSatisfiedIcon sx={{  width: '50px', height: '50px' }} />
        case 'pass':
            return <SentimentDissatisfiedIcon sx={{  width: '50px', height: '50px' }} />
        case 'fail':
            return <SentimentVeryDissatisfiedIcon sx={{  width: '50px', height: '50px' }} />
        default:
            return <StarIcon sx={{ color: '#cccccc', width: '50px', height: '50px' }} />
    }
}

export default function stars(props) {
    let status = []
    status = props.status;
    return <Box>{status.map((s, i) => <IconComponent key={i} status={s} />)}</Box> 
}