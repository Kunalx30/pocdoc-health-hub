
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search for doctors by name or specialty"
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex gap-2">
          <Filter size={18} /> Filter
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
