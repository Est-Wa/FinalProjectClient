
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/StarBorder';


function IconComponent({ status }) {

    switch (status) {
        case 'success':
            return <StarIcon sx={{ color: '#ccff99', width: '50px', height: '50px' }} />
        case 'error':
            return <StarIcon sx={{ color: '#ff9999', width: '50px', height: '50px' }} />
        case 'warning':
            return <StarIcon sx={{ color: '#ffff33', width: '50px', height: '50px' }} />
        default:
            return <StarIcon sx={{ color: '#cccccc', width: '50px', height: '50px' }} />
    }
}

export default function stars(props) {
    let status = []
    status = props.status;
    return status.map(s => <IconComponent status={s} />)

}