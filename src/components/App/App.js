import React, { useSelect } from 'react';
import './App.css';

const App = () => {
  const fetchConvo = async (url) => {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
  };

  useSelect(() => {
    fetchConvo('https://slack.com/api/conversations.history')
  }, []);

  return (
    <main>
      <h1>Job Posts from Developer Slack Workspaces</h1>
    </main>
  );
}

export default App;
