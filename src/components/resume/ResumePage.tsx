import ResumeLayout from '@/components/layout/ResumeLayout';
import Navbar from '@/components/navigation/Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

export default function ResumePage() {
  return (
    <ResumeLayout header={<Navbar />} sidebar={<Sidebar />}>
      <MainContent />
    </ResumeLayout>
  );
}
