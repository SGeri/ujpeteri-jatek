import { createStyles, Container, Group, Text, Button } from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: "2rem",
    borderTop: `1rem solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text fw={700} className="text-sm md:text-lg">
          Újpéteri kincskeresés
        </Text>
        <Text className="text-sm">Hivatkozások</Text>
        <Group spacing="md" className={classes.links} position="right" noWrap>
          <Link href="/">
            <Button size="sm">Főoldal</Button>
          </Link>
          <Link href="https://www.tomorylajos-muzeum.hu">
            <Button size="sm">Szervezők</Button>
          </Link>
        </Group>
      </Container>
    </div>
  );
}
