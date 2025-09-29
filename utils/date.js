function convertDate(date) {
  const day = date.getDate()
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]
  const month = monthNames[date.getMonth()]
  return { day, month }
}

module.exports = convertDate
