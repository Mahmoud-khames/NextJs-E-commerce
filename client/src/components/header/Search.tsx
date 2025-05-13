
import { Search } from 'lucide-react';


export default function SearchInput({search}:{search:string}) {

  return (
    <div className="flex items-center justify-between w-auto h-[38px] p-4  bg-[#F5F5F5]">
      <input
        type="text"
        placeholder={search}
        className="w-full text-gray-900 text-sm rounded-lg focus:outline-0 block p-1.5"
      />
        <Search  color='black' className='w-6 h-6'/>
    </div>
  );
}
