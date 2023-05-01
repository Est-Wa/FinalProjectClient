
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';


function IconComponent({ status }) {
    switch (status) {
        case 'great':
            return <StarIcon sx={{ color: 'green', width: '50px', height: '50px' }} />
        case 'ok':
            return <StarIcon sx={{ color: 'yellow', width: '50px', height: '50px' }} />
        case 'pass':
            return <StarIcon sx={{ color: 'orange', width: '50px', height: '50px' }} />
        case 'fail':
            return <StarIcon sx={{ color: 'red', width: '50px', height: '50px' }} />
        default:
            return <StarIcon sx={{ color: '#cccccc', width: '50px', height: '50px' }} />
    }
}

export default function stars(props) {
    let status = []
    status = props.status;
    return status.map(s => <IconComponent status={s} />)
}