import Page from '../../../layouts/app';
import Header from '../../../components/header';

export default () => (
  <Page>
    <Header subtitle="Gkdp" />

    <div className="content">
      <div className="container">
        Wordt gebruikt als ssh tunnel. Hierdoor kan eenvoudig en veilig een verbinding worden opengezet om lokale projecten toegankelijk te maken voor iedereen op het internet.
      </div>
    </div>

    <Footer />
  </Page>
)
