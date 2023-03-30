import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import AuthProvider from '../../Context/Auth/';
import testUsers from '../../Context/Auth/lib/users';
import SettingsProvider from '../../Context/Settings';

const renderApp = () => {
  return render(
    <AuthProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </AuthProvider>
  );
};

describe('App integration tests', () => {
  test('login with valid credentials', async () => {
    const { username, password } = Object.values(testUsers)[0];
    renderApp();

    const usernameInput = screen.getByText('username:');
    const passwordInput = screen.getByText('password:');
    const loginButton = screen.getByText('login');

    userEvent.type(usernameInput, username);
    userEvent.type(passwordInput, password);
    fireEvent.click(loginButton);

    await waitFor(() => screen.findByText(`Welcome, ${username}!`));

    expect(screen.getByText(`Welcome, ${username}!`)).toBeInTheDocument();
    expect(screen.getByText('logout')).toBeInTheDocument();
  });

  test('login with invalid credentials', () => {
    renderApp();

    const usernameInput = screen.getByLabelText('username:');
    const passwordInput = screen.getByLabelText('password:');
    const loginButton = screen.getByText('login');

    userEvent.type(usernameInput, 'invalid-username');
    userEvent.type(passwordInput, 'invalid-password');
    fireEvent.click(loginButton);

    expect(screen.queryByText('Welcome,')).not.toBeInTheDocument();
    expect(screen.getByText('login')).toBeInTheDocument();
  });

  test('logout', async () => {
    const { username, password } = Object.values(testUsers)[0];
    renderApp();

    const usernameInput = screen.getByLabelText('username:');
    const passwordInput = screen.getByLabelText('password:');
    const loginButton = screen.getByText('login');

    userEvent.type(usernameInput, username);
    userEvent.type(passwordInput, password);
    fireEvent.click(loginButton);

    await waitFor(() => screen.findByText(`Welcome, ${username}!`));

    const logoutButton = screen.getByText('logout');
    userEvent.click(logoutButton);

    expect(screen.queryByText(`Welcome, ${username}!`)).not.toBeInTheDocument();
    expect(screen.getByText('login')).toBeInTheDocument();
  });
});
