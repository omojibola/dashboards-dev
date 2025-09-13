import { DashboardLayout } from '@/components/dashboard-layout';
import { DatabaseTables } from '@/components/database-tables';

export default function DatabaseTablesPage() {
  return (
    <DashboardLayout>
      <DatabaseTables />
    </DashboardLayout>
  );
}
