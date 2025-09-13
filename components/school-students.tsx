import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/page-header';
import { Plus, GraduationCap } from 'lucide-react';

export function SchoolStudents() {
  return (
    <div className='space-y-6'>
      <PageHeader
        title='Student Management'
        description='Manage student records and academic information'
      >
        <Button>
          <Plus className='h-4 w-4 mr-2' />
          Add Student
        </Button>
      </PageHeader>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>1,847</div>
            <p className='text-xs text-muted-foreground'>+3% from last term</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              Active Enrollment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>1,734</div>
            <p className='text-xs text-muted-foreground'>94% attendance rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              New Admissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>89</div>
            <p className='text-xs text-muted-foreground'>This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              Graduation Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>96%</div>
            <p className='text-xs text-muted-foreground'>+2% from last year</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student Records</CardTitle>
          <CardDescription>
            View and manage student information and academic records
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='text-center py-8 text-muted-foreground'>
            <GraduationCap className='h-12 w-12 mx-auto mb-4 opacity-50' />
            <p>Student management interface will be displayed here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
