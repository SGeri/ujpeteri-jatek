import Link from "next/link";
import {
  createStyles,
  Header as HeaderBase,
  Container,
  Button,
  Text,
} from "@mantine/core";

const ORGANIZERS_LINK = "http://muzeum18ker.hu";
const MIN_HEADER_HEIGHT = 80;

const useStyles = createStyles((theme) => ({
  inner: {
    height: MIN_HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.fn.largerThan("md")]: {
      paddingLeft: 240,
      paddingRight: 240,
    },

    [theme.fn.largerThan("lg")]: {
      paddingLeft: 300,
      paddingRight: 300,
    },
  },

  button: {
    "&:hover": {
      backgroundColor: theme.colors.blue[6],
    },
  },
}));

export default function Header() {
  const { classes } = useStyles();

  return (
    <HeaderBase height={MIN_HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <Link href="/">
          <Text fw={700} className="text-base md:text-2xl">
            Újpéteritelep - Kincskeresés
          </Text>
        </Link>
        <Link href={ORGANIZERS_LINK}>
          <Button radius="xl" sx={{ height: 30 }}>
            Szervezők
          </Button>
        </Link>
      </Container>
    </HeaderBase>
  );
}
