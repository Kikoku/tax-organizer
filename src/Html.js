import React, {PropTypes} from 'react';
import {renderToString} from 'react-dom/server';
import serialize from 'serialize-javascript'
import DocumentMeta from 'react-document-meta';

const thirdpartyAssets = [
  'http://fonts.googleapis.com/css?family=Open+Sans:400,600',
  'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css',
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'
]

const Html = ({assets, component, store}) => (
  <html lang="en-us">
    <head>
    {DocumentMeta.renderAsReact()}
      <link rel="shortcut icon" href="/favicon.ico" />
      {Object.keys(assets.styles).map((style, i) =>
        <link
          href={assets.styles[style]}
          key={i}
          rel="stylesheet"
        />
      )}
      {thirdpartyAssets.map((asset, i) => (
      <link href={asset}
        key={i}
        rel="stylesheet"
      />)
      )}
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{
        __html: component ? renderToString(component) : ''
        }}
      />
      <script dangerouslySetInnerHTML={{
        __html: `window.__INITIAL_STATE__ = ${serialize(store.getState())};`
        }}
      />
      <script src={assets.javascript.main} />
    </body>
  </html>
);

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object
}

export default Html;
