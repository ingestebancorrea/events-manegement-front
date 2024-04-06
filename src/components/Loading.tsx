import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

interface Props {
  isLoading: boolean;
}

export const Loading = ({isLoading}:Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ClipLoader
          color="#1976D2"
          loading={isLoading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </Box>
    </Box>
  );
};
