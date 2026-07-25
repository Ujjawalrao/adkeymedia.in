import { useContext } from 'react';
import { AppContext } from './AppContext.jsx';

export default function ContextDemo() {
  const { value, setValue } = useContext(AppContext);

  return (
    <div className="p-4 border rounded mt-4">
      <div className="mb-2">Context value: <b>{value}</b></div>
      <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={() => setValue('Context updated!')}>
        Update Context
      </button>
    </div>
  );
}
