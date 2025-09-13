import { DashboardLayout } from '@/components/dashboard-layout';
import { DatabaseOverview } from '@/components/database-overview';

export default function DatabaseOverviewPage() {
  return (
    <DashboardLayout>
      <DatabaseOverview />
    </DashboardLayout>
  );
}
