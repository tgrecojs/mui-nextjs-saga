import Link from 'next/link'
import { connect } from 'react-redux'
import LinkComp from '../source/shared/Link/component'
import Counter from './counter'
import Clock from './clock'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link'
import ProTip from '../source/shared/ProTip/component';

const Typog = () => (
  <Typography variant="body2" color="textSecondary" align="center">
  {'Built with love by the '}
  <LinkComp color="inherit" href="/">
    Material-UI
  </LinkComp>
  {' team.'}
</Typography>
)
function Page ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title
}) {
  return (
    <Container>
      <Typog />
      <h1>{title}</h1>
      <ProTip />
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </Container>
  )
}

export default connect(state => state)(Page)
