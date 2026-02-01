'use client';

import { useState } from 'react';
import AddItemForm from './AddItemForm';
import ItemsList from './ItemsList';

export default function DashboardContent() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Sidebar: Add Form */}
      <div className="lg:col-span-1">
        <div className="sticky top-28">
          <AddItemForm onItemAdded={handleRefresh} />
        </div>
      </div>
      
      {/* Main Area: Items List */}
      <div className="lg:col-span-2">
        <ItemsList refreshTrigger={refreshKey} />
      </div>
    </div>
  );
}
