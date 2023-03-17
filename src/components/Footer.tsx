import { createStyles, Container, Group, Text, Button } from "@mantine/core";

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
        <Group spacing="md" className={classes.links} position="right" noWrap>
          <Button size="sm">Indulás!</Button>
          <Button size="sm">Szervezők</Button>
        </Group>
      </Container>
    </div>
  );
}
