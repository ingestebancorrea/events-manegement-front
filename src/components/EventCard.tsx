import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EventIcon from '@mui/icons-material/Event';
import eventImage from '../assets/event.jpg';
import { Box } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { useAxiosPost } from '../hooks/usePostAxios';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../helpers/formatDate';


export const EventCard = () => {
    const { events } = useAppSelector((state) => state.event);
    const navigate = useNavigate();
    const { postData } = useAxiosPost();

    const onSubmit = async (eventId: string) => {
        postData(`/events/${eventId}/attendances`);
    }

    return (
        <Box sx={{ display: "flex", paddingLeft: 4, gap: 2, flexWrap: "wrap" }}>
            {
                events.map((eventItem, index) => (
                    <Card key={index} sx={{ width: 310, height: 340 }}>
                        <CardMedia
                            component="img"
                            alt="event"
                            height="140"
                            src={eventImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {eventItem.name}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: 'flex-start' }}>
                                <Typography variant="body2" color="text.secondary">
                                    {eventItem.description}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                                <EventIcon sx={{ marginRight: 1 }} />
                                <Typography variant="body1" color="text.third">
                                    {formatDate(eventItem.date)}
                                </Typography>
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: "flex-end" }}>
                                <Button size="small" onClick={() => onSubmit(eventItem.id!)}>Asistir</Button>
                                <Button size="small" onClick={() => navigate(`/event/${eventItem.id}`)}>Ver detalles</Button>
                            </Box>
                        </CardActions>
                    </Card>
                ))}
        </Box>
    );
};
