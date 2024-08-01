import Sidebar from "../components/screen-components/Sidebar";
import pageStyles from "../styles/pages/dashboard.module.css";

export default function Dashboard() {
  return (
    <main className={pageStyles.page}>
      <Sidebar />
    </main>
  )
}
