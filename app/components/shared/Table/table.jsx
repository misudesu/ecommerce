'use client'
import Image from 'next/image';
import { useState } from 'react';

// Sample data
const tableData = [
  { id: 1, name: 'John', age: 25, gender: 'Male' },
  { id: 2, name: 'Alice', age: 30, gender: 'Female' },
  { id: 3, name: 'Bob', age: 28, gender: 'Male' },
  { id: 4, name: 'Eve', age: 35, gender: 'Female' },
  { id: 5, name: 'Charlie', age: 22, gender: 'Male' },
  { id: 6, name: 'David', age: 40, gender: 'Male' },
];

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(3);

  // Filtering data based on search term
  const filteredData = tableData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.age.toString().includes(searchTerm.toLowerCase()) ||
      row.gender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting data
  const sortedData = sortBy
    ? filteredData.sort((a, b) => {
        const comparison =
          a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0;
        return sortOrder === 'asc' ? comparison : -comparison;
      })
    : filteredData;

  // Pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log(`Deleting row with id ${id}`);
  };

  const handleUpdate = (id) => {
    // Handle update logic here
    console.log(`Updating row with id ${id}`);
  };

  return (
    <div className="container mx-auto">
     
      <div className="overflow-x-auto">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-md p-1 mb-2 mx-auto"
      />
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => {
                  setSortBy('name');
                  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                }}
              >
                Name
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => {
                  setSortBy('age');
                  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                }}
              >
                Age
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                onClick={() => {
                  setSortBy('gender');
                  setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                }}
              >
                Gender
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentRows.map((row) => (
              <tr key={row.id}>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                   
                    {row.name}
                    </td>
                <td className="px-6 py-4 whitespace-nowrap">{row.age}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleUpdate(row.id)}
                    className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="mt-4">
        <ul className="flex justify-center">
          {[...Array(Math.ceil(filteredData.length / rowsPerPage)).keys()].map(
            (number) => (
              <li
                key={number}
                onClick={() => paginate(number + 1)}
                className={`${
                  currentPage === number + 1
                    ? 'border border-gray-300 bg-gray-200'
                    : 'border border-gray-300 hover:bg-gray-100'
                } cursor-pointer mx-1 px-3 py-1`}
              >
                {number + 1}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Table;
