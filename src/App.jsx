import { useEffect, useState } from "react";
import "./App.css";
import { keyframes } from "@emotion/react";
import ContentLoader from "react-content-loader";
import Skeleton from "@mui/material/Skeleton";
import { Avatar, Box, Typography } from "@mui/material";
import SkeletonTable from "./SkeletonTable";
import TableContent from "./Table";
function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true)
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      setLoading(false);
    }, 3000);
    // setLoading(true);
    return () => clearTimeout(timer);
  });

  const increaseWidth = keyframes`
  0% {
    width:40%;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 40%;
  }
`;
  const increaseSize = keyframes`
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
`;

  return (
    <div>
      {loading ? (
        // <Box width={476} height={124} >
        //   <Box display="flex" alignItems="center">

        // <Skeleton variant="circular"  sx={{
        //       mr:1,
        //       bgcolor: "gray",
        //       animation: `${increaseSize} 2s ease-in-out infinite`,
        //     }}>
        //         <Avatar />
        //       </Skeleton>
        //   <Skeleton
        //     variant="rounded"
        //     width={40}
        //     height={10}
        //     sx={{
        //       bgcolor: "gray",
        //       animation: `${increaseWidth} 2s ease-in-out infinite`,
        //     }}
        //   />
        //           </Box>

        //   <Skeleton
        //     variant="rounded"
        //     width={100}
        //     height={10}
        //     sx={{
        //       my: 2,
        //       bgcolor: "gray",
        //       animation: `${increaseWidth} 2s ease-in-out infinite`,
        //     }}
        //   />
        //   <Skeleton
        //     variant="rounded"
        //     width={100}
        //     height={10}
        //     sx={{
        //       my: 2,
        //       bgcolor: "gray",
        //       animation: `${increaseWidth} 2s ease-in-out infinite`,
        //     }}
        //   />
        // </Box>

        <SkeletonTable />
      ) : (
        // <div>
        //   <h1>hello</h1>
        //   <h1>line2</h1>
        // </div>
        <TableContent />
      )}
      <Box sx={{ mt: 2, backgroundColor: "white", padding: 2 }}>
        {loading ? (
          <Box width={476} height={124}>
            <Box display="flex" alignItems="center">
              <Skeleton
                variant="circular"
                sx={{
                  mr: 1,
                  bgcolor: "gray",
                  animation: `${increaseSize} 2s ease-in-out infinite`,
                }}
              >
                <Avatar />
              </Skeleton>
              <Skeleton
                variant="rounded"
                width={40}
                height={10}
                sx={{
                  bgcolor: "gray",
                  animation: `${increaseWidth} 2s ease-in-out infinite`,
                }}
              />
            </Box>

            <Skeleton
              variant="rounded"
              width={100}
              height={10}
              sx={{
                my: 2,
                bgcolor: "gray",
                animation: `${increaseWidth} 2s ease-in-out infinite`,
              }}
            />
            <Skeleton
              variant="rounded"
              width={100}
              height={10}
              sx={{
                my: 2,
                bgcolor: "gray",
                animation: `${increaseWidth} 2s ease-in-out infinite`,
              }}
            />
          </Box>
        ) : (
          // <SkeletonTable/>
          <Box
            width={476}
            height={124}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "flex-start",
              flexDirection: "row",
            }}
            textAlign="left"
          >
            <Box display="flex" alignItems="center">
              <Skeleton
                variant="circular"
                sx={{
                  mr: 1,
                  bgcolor: "gray",
                }}
              >
                <Avatar />
              </Skeleton>
            </Box>
            <Box>
              <Typography>Total Users</Typography>
              <Typography>10,000</Typography>
              <Typography>Active Users 8200</Typography>
            </Box>
            {/* <h1>line2</h1> */}
          </Box>
          // <TableContent/>
        )}
      </Box>
    </div>
  );
}

export default App;
