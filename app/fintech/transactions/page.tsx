import { DashboardLayout } from '@/components/dashboard-layout';
import { FintechTransactions } from '@/components/fintech-transactions';

export default function FintechTransactionsPage() {
  return (
    <DashboardLayout>
      <FintechTransactions />
    </DashboardLayout>
  );
}
