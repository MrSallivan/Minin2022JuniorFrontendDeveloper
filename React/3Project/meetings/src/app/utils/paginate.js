const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize
  const fullItemsCopy = JSON.parse(JSON.stringify(items))
  return fullItemsCopy.splice(startIndex, pageSize)
}
export default paginate
