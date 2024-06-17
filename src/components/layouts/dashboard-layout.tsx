import { MobileNavigation, Navigation } from '../navigation';
import './dashboard-layout.styles.scss';

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-layout">
        <aside className="dashboard-layout__sidebar">
          <Navigation />
        </aside>
        <aside className="dashboard-layout__mobile-sidebar">
          <MobileNavigation />
        </aside>
        <div className="dashboard-layout__content">{children}</div>
      </div>
    </div>
  );
};
