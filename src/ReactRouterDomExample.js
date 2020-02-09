import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

/*****************----HOMEPAGE----************************* */

const HomePage = (props) => (
  <>
    {/**  we can use push in componentDidMount it works like link but we cannot use link in CDM so this is a good way to use or redirecting....*/}
    <button onClick={() => props.history.push('/topics')}>Topics Button</button>
    <Link to="/topics">Topics</Link>
    <h1>HomePage ...</h1>
  </>
);

/******************----TopucsList----************************ */

const TopicsList = (props) => (
  <>
    <h1>Topics List Page</h1>
    <Link to={`${props.match.url}/13 `}> To Topic 13</Link>
    <Link to={`${props.match.url}/18 `}> To Topic 18</Link>
    <Link to={`${props.match.url}/40 `}> T o Topic 40</Link>
  </>
);

/********************----TopicDetail----********************** */

const TopicDetail = (props) => {
  return (
    <>
      <h1>TopicDetail ...{props.match.params.topiId}</h1>
    </>
  );
};

/********************----MAIN COMP.----********************** */

export const ReactRouterDomExample = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/topics" component={TopicsList} />
        <Route path="/topics/:topiId" component={TopicDetail} />
      </Switch>
    </div>
  );
};

/******
 *
 *  Match allows us to buld nested route structure....
 *  example:
 *          Our topicList renders out bunch of Links to topicDetails...
 *          we don't care about topics routing we just care topiclist...
 *
 */
