import { createStyles } from "@mantine/core";

const useHeaderStyle = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.blue[3],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
  },
  navbar: {
    backgroundColor: theme.colors.blue[7],
    height: '100%',
  },
  link: {
    textDecoration: 'none',
    color: theme.colors.blue[3],
    marginLeft: theme.spacing.md,
  },
}));

export default useHeaderStyle;