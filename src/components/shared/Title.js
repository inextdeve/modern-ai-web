
import { styled} from '@mui/material';
const Typography = styled('p')(() => ({
    my: 3, fontSize: "0.9rem", fontWeight: 600
  }));

const Title = ({children}) => {
    return <Typography>{children}</Typography>
}

export default Title;