import { Box } from "@mui/material"
import { AppLayout } from "../layout/AppLayout"
import { useEffect } from "react";
import { useFetchData } from "../hooks/useFecthData";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setEventDetails } from "../store/event/eventSlice";
import { DetailsCard } from "../components/DetailsCard";
import { NearbyEventsMap } from "../components/NearbyEventsMap";

export const Details = () => {
  const { fetchData, data } = useFetchData();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    fetchData(`/events/${id}`);
  }, []);

  useEffect(() => {
    dispatch(setEventDetails(data));
  }, [data, dispatch]);

  return (
    <AppLayout>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
        <DetailsCard />

        <Box sx={{ height: 20 }}></Box>

        <Box sx={{ width: "60%" }}>
          <NearbyEventsMap  id={id}/>
        </Box>
      </Box>
    </AppLayout>
  )
}
