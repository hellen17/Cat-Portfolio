import React from "react";

export default function VetTable({ vetData, query }) {
  const q = query.toLowerCase();

  return (
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
          {vetData
            .filter(
              (val) =>
                query === "" ||
                (Array.isArray(val.name) &&
                  val.name.some((name) =>
                    name.toLowerCase().includes(q)
                  )) ||
                (typeof val.clinicName === "string" &&
                  val.clinicName.toLowerCase().includes(q)) ||
                (typeof val.city === "string" &&
                  val.city.toLowerCase().includes(q)) ||
                (typeof val.location === "string" &&
                  val.location.toLowerCase().includes(q))
            )
            .map((vet, index) => {
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
  );
}

