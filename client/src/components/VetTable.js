import React, {useState, useEffect} from "react";

export default function VetTable({ vetData, query }) {
  const q = query.toLowerCase();

  //state variables for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // filter items based on query
  const filteredItems = vetData.filter(
    (val) =>
      query === "" ||
      (Array.isArray(val.name) &&
        val.name.some((name) => name.toLowerCase().includes(q))) ||
      (typeof val.clinicName === "string" &&
        val.clinicName.toLowerCase().includes(q)) ||
      (typeof val.city === "string" && val.city.toLowerCase().includes(q)) ||
      (typeof val.location === "string" &&
        val.location.toLowerCase().includes(q))
  );
  
  // updates the filteredItems array whenever the query prop changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  //get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage  = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
    <div className="overflow-x-auto mt-10">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Names</th>
            <th>City</th>
            <th>Location</th>
            <th>Clinic Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {currentItems.map((vet, index) => {
              return (
                <tr key={index}>
                  <td></td>
                  <td>
                    {vet.name.map((name, index) => (
                      <span key={index}>
                        <p>{name.split(" ").join(" ")}</p>
                      </span>
                    ))}
                  </td>
                  <td>{vet.city}</td>
                  <td>{vet.location}</td>
                  <td>{vet.clinicName}</td>
                  <td>
                    {vet.phone.map((phone, index) => (
                      <span key={index}>
                        <p className="flex gap-2">{phone.split(" ").join(" ")}</p>
                      </span>
                    ))}
                  </td>
                  <td>{vet.email}</td>
                  <td></td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>

    {/* pagination */}

    <div className="flex flex-col items-center mt-8">
      <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing
          <span className="font-semibold text-gray-900"> {indexOfFirstItem + 1} </span>
          to 
          <span className="font-semibold text-gray-900"> {indexOfLastItem < vetData.length ? indexOfLastItem : vetData.length}</span> of <span className="font-semibold text-gray-900">{vetData.length}</span> Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
          <button onClick={handlePrevPage} className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Prev
          </button>
          <button onClick={handleNextPage} className="px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
          </button>
      </div>
    </div>

</>
  );
}

