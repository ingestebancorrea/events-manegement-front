import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import eventImage from '../assets/event.jpg';
import Typography from '@mui/material/Typography';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { formatDate } from '../helpers/formatDate';

export const DetailsCard = () => {
    const { event } = useAppSelector((state) => state.event);

    return (
        <Box sx={{ display: "flex", width: "60%", paddingX: 1, gap: 2, flexWrap: "wrap" }}>
            <Card key={event.id}>
                <Box sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        alt="event"
                        height="240"
                        src={eventImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {event.name}
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: 'flex-start' }}>
                            <Typography variant="body2" color="text.secondary">
                                {event.description}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                            <EventIcon sx={{ marginRight: 1 }} />
                            <Typography variant="body1" color="text.third">
                                {formatDate(event.date)}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                            <LocationOnIcon sx={{ marginRight: 1 }} />
                            <Typography variant="body1" color="text.third">
                                {event.location && event.location.name}
                            </Typography>
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
};
