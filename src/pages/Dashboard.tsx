import CampaignScreen from "../components/screen-components/CampaignScreen";
import { MainHeader } from "../components/screen-components/Headers";
import Sidebar from "../components/screen-components/Sidebar";
import pageStyles from "../styles/pages/dashboard.module.css";

export default function Dashboard() {
  return (
    <main className={pageStyles.page}>
      <Sidebar />
      <section className={pageStyles.section}>
        <MainHeader title="Campaigns" />
        <CampaignScreen />
      </section>
    </main>
  );
}
