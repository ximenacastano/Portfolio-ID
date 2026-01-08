import React from 'react';
import { Route, Switch } from 'wouter';
import Layout from './components/Layout';
import Home from './components/Home';
import MicroCoursePage from './components/MicroCoursePage';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/portfolio/project-micro-course" component={MicroCoursePage} />
        {/* Fallback to Home for unknown routes */}
        <Route component={Home} />
      </Switch>
    </Layout>
  );
};

export default App;