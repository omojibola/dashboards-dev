import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/page-header';
import { Plus, TrendingUp } from 'lucide-react';

export function SalesPipeline() {
  return (
    <div className='space-y-6'>
      <PageHeader
        title='Sales Pipeline'
        description='Track your sales opportunities and deals'
      >
        <Button>
          <Plus className='h-4 w-4 mr-2' />
          Add Deal
        </Button>
      </PageHeader>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              Qualified Leads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>127</div>
            <p className='text-xs text-muted-foreground'>
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              Proposals Sent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>43</div>
            <p className='text-xs text-muted-foreground'>+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>Deals Closed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>18</div>
            <p className='text-xs text-muted-foreground'>
              +25% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>$284K</div>
            <p className='text-xs text-muted-foreground'>
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pipeline Overview</CardTitle>
          <CardDescription>
            Current deals in your sales pipeline
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='text-center py-8 text-muted-foreground'>
            <TrendingUp className='h-12 w-12 mx-auto mb-4 opacity-50' />
            <p>Sales pipeline content will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
