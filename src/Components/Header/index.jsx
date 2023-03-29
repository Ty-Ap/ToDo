
import { Link } from 'react-router-dom';
import { Header, Navbar, Group } from '@mantine/core';
import useHeaderStyle from '../../Themes/Themes';



const HeaderComponent = () => {
  const { classes } = useHeaderStyle();

  return (
    <Header>
      <Navbar className={classes.navbar}>
      <Group>
        <Link className={classes.link} to="/" default >
          Home
        </Link>
        <Link className={classes.link} to="/settings">
          Settings
        </Link>
      </Group>
      </Navbar>
    </Header>
  );
};

export default HeaderComponent;
