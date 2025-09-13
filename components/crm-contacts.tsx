import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/page-header';
import { Plus, Users } from 'lucide-react';

export function CrmContacts() {
  return (
    <div className='space-y-6'>
      <PageHeader
        title='CRM Contacts'
        description='Manage your customer relationships and contacts'
      >
        <Button>
          <Plus className='h-4 w-4 mr-2' />
          Add Contact
        </Button>
      </PageHeader>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              Total Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>2,847</div>
            <p className='text-xs text-muted-foreground'>+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              Active Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>1,234</div>
            <p className='text-xs text-muted-foreground'>+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              New This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>156</div>
            <p className='text-xs text-muted-foreground'>
              +12% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Management</CardTitle>
          <CardDescription>
            View and manage your customer contacts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='text-center py-8 text-muted-foreground'>
            <Users className='h-12 w-12 mx-auto mb-4 opacity-50' />
            <p>Contact management interface will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
