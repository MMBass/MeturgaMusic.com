import { Box, Typography } from "@mui/material";

function NoMatchPage({ className }) {

    return (
        <div className={className}>
            <Typography variant="h2" className="page-h2">404</Typography>
            <Typography variant="h3" className="page-h3">Nothing Here</Typography>
        </div>
    );
};

export default NoMatchPage;