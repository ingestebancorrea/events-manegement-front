import { useEffect, useState } from "react";
import { EventCard } from "../components/EventCard";
import { useFetchData } from "../hooks/useFecthData";
import eventEmpty from "../assets/empty-event.png";
import { Box, Typography } from "@mui/material";
import { Loading } from "../components/Loading";
import { useAppDispatch } from '../store/hooks';
import { setEvent } from "../store/event/eventSlice";
import { AppLayout } from "../layout/AppLayout";

export const Home = () => {
  const { fetchData, data } = useFetchData();
  const dispatch = useAppDispatch();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    fetchData('/events');
  }, []);

  useEffect(() => {
    dispatch(setEvent(data));
  }, [data, dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showLoading) {
    return <Loading isLoading={showLoading} />;
  }

  return (
    <AppLayout>
      {data.length > 0 ? (
        <Box sx={{ flexGrow: 1 }}>
          <EventCard />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={eventEmpty} width={500} height={400} alt="No hay eventos" />
          <Typography variant="h5">
            No hay eventos para visualizar.
          </Typography>
        </Box>
      )}
    </AppLayout>
  );
};
