import React from 'react';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-next-line
const DESCRIPTION = 'Add a cognitive search and content analytics engine to applications to identify patterns, trends and actionable insights that drive better decision-making.';

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>Discovery Demo</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Discovery Demo" />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header
          mainBreadcrumbs="Discovery"
          mainBreadcrumbsUrl="http://www.ibm.com/watson/developercloud/discovery.html"
          subBreadcrumbs="Discovery Demo"
          subBreadcrumbsUrl="https://discovery-news-demo.mybluemix.net"
        />
        <Jumbotron
          serviceName="Discovery"
          repository="https://github.com/watson-developer-cloud/discovery-nodejs"
          documentation="http://www.ibm.com/watson/developercloud/doc/discovery"
          apiReference="http://www.ibm.com/watson/developercloud/discovery/api"
          version="GA"
          startInBluemix="https://console.ng.bluemix.net/registration/?target=/catalog/services/discovery/"
          description={DESCRIPTION}
        />
        <div id="root">
          {props.children}
        </div>
        <script type="text/javascript" src="js/bundle.js" />
        <script type="text/javascript" src="js/ga.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default Layout;
