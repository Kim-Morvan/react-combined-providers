import React, { createContext, useContext } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CombinedProviders } from '../index';

// Test contexts
const ThemeContext = createContext('light');
const UserContext = createContext('guest');

// Test providers
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <UserContext.Provider value="admin">{children}</UserContext.Provider>
);

// Test component
const TestComponent = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  return <div data-testid="test">{`${theme}-${user}`}</div>;
};

describe('CombinedProviders', () => {
  test('combines providers correctly', () => {
    render(
      <CombinedProviders providers={[ThemeProvider, UserProvider]}>
        <TestComponent />
      </CombinedProviders>
    );
    
    expect(screen.getByTestId('test')).toHaveTextContent('dark-admin');
  });

  test('works with no providers', () => {
    render(
      <CombinedProviders>
        <div data-testid="empty">content</div>
      </CombinedProviders>
    );
    
    expect(screen.getByTestId('empty')).toBeInTheDocument();
  });
});