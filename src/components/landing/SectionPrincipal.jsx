import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import comercio from "../../assets/card3.png";
import people from "../../assets/people.jpg";
import tarjetas from "../../assets/card2.png";
import { Box } from "@mui/system";

export default function SectionPrincipal() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#1a1d58",
      }}
    >
      <Card sx={{ maxWidth: 345, border: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={comercio}
            alt="comercio"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Todos aceptan Country Wallet.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Country Wallet es aceptado en mas del 90% de locales de Argentina.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, border: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={people}
            alt="transferencias"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Transfiere al instante.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Realiza transferencias a todos tus amigos de manera fácil, rápida
              y segura.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, border: 1 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={tarjetas} alt="card" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Paga tus servicios de manera sencilla.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              En cuestión de segundos ingresa a tu Country Wallet, adhiere tus
              servicios, y paga al instante.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
