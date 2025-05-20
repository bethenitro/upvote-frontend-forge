
import React from 'react';
import { useApp } from '@/context/AppContext';
import { Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { user } = useApp();

  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-4">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
        <Menu size={20} />
      </Button>
      
      <div className="flex-1 ml-4">
        <h1 className="text-lg font-medium md:hidden">UpvoteHub</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon">
          <Bell size={18} />
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <p className="text-sm font-medium">{user?.username}</p>
            <p className="text-xs text-gray-500">{user?.credits.toFixed(2)} credits</p>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={user?.profileImage} alt={user?.username || 'User'} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
