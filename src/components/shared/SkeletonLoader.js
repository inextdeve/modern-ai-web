import {Skeleton} from "@mui/material";

const SkeletonLoader = () => {
    return <Skeleton variant="rectangular" width={"100%"} height={"100%"} sx={{minHeight: "200px"}} />
}

export default SkeletonLoader