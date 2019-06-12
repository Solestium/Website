import Page from '../../../layouts/app';
import Header from '../../../components/header';

export default () => (
  <Page>
    <Header />

    <div className="content">
      <div className="container">
        Fortizar is een persoonlijk domeinnaam voor projecten. Ook wordt onder dit domein Harbor gehost.
      </div>
    </div>

    <style jsx>{`
      .content {
        color: #676767;
        padding-top: 1rem;
        font-size: 1.1rem;
        letter-spacing: 1px;
      }
    `}</style>
  </Page>
)
