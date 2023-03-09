import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Text,
} from "@mantine/core";
import HeroImage from "@images/hero_bg.jpg";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  hero: {
    position: "relative",
    backgroundImage: `url(${HeroImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  container: {
    height: 700,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export default function Hero() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>Újpéteritelep kincskeresés</Title>
        <Text className={classes.description} size="xl" mt="xl">
          A kincskereső játékunkban a játékosoknak feladványok megoldásával kell
          megtalálniuk a kerület kincsét. A legszerencsésebb játékosok értékes
          nyereményeket nyerhetnek. Ajánljuk egyaránt időseknek és fialoknak is!
        </Text>

        <Link href="/start">
          <Button
            variant="gradient"
            size="xl"
            radius="xl"
            className={classes.control}
          >
            Lássunk hozzá!
          </Button>
        </Link>

        <Text color="red" mt="lg">
          Fontos: Háttér cseréje a táblára a helyszínre, ahonnan a játékot
          kezdeni lehet
        </Text>
      </Container>
    </div>
  );
}
