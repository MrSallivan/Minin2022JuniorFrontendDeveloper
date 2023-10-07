import React from "react"

const TableHeader = () => {
  const handleSort = (item) => {
    if (currentSort.iter === item) {
      onSort({
        ...currentSort,
        order: currentSort.order === "asc" ? "desc" : "asc"
      })
    } else {
      onSort({ iter: item, order: "asc" })
    }
  }

  return (
    <thead>
      <tr>
        <th onClick={() => handleSort("name")} scope="col" role="button">
          Имя
        </th>
        <th scope="col">Качества</th>
        <th
          onClick={() => handleSort("profession.name")}
          scope="col"
          role="button"
        >
          Провфессия
        </th>
        <th
          onClick={() => handleSort("completedMeetings")}
          scope="col"
          role="button"
        >
          Встретился, раз
        </th>
        <th onClick={() => handleSort("rate")} scope="col" role="button">
          Оценка
        </th>
        <th onClick={() => handleSort("bookmark")} scope="col" role="button">
          Избранное
        </th>
        <th />
      </tr>
    </thead>
  )
}

export default TableHeader
