import React from 'react';
import Todo from './components/Todo';
import { AppProvider } from './hooks/form';

export default class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <Todo />
      </AppProvider>
    );
  }
}