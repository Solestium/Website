import Page from '../../../layouts/app'
import Header from '../../../components/header'
import Footer from '../../../components/footer'

const Erooi = () => (
  <Page>
    <Header subtitle="Erooi" />

    <div className="content">
      <div className="container">
        Erooi wordt gebruikt als email proxy. Wanneer klanten hun email niet
        goed hebben opgezet worden emails namens erooi verstuurd.
      </div>
    </div>

    <Footer />
  </Page>
)

export default Erooi
