import Page from '../../../layouts/app';
import Header from '../../../components/header';

export default () => (
  <Page>
    <Header />

    <div className="content">
      <div className="container">
        Erooi wordt gebruikt als email proxy. Wanneer klanten hun email niet goed hebben opgezet worden emails namens erooi verstuurd.
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
