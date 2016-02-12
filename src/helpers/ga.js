import ga from 'react-ga';
import qs from 'qs';
import config from '../config';

ga.initialize(config.gaTrackingID, {
  debug: __DEVELOPMENT__
});

export default function logPageView() {

  const {pathname, query} = this.state.location;

  const qstring = qs.stringify(query);

  ga.pageview(pathname + (qstring ? '?' + qstring : ''));
}
