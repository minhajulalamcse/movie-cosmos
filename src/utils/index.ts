export const toHoursAndMinutes = (totalMinutes: number | null): string => {
  if (totalMinutes === null) {
    return ''
  }
  const minutes = totalMinutes % 60
  const hours = Math.floor(totalMinutes / 60)

  return `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m`
}
const padTo2Digits = (num: number): string => {
  return num.toString().padStart(2, '0')
}

export const getYearFromDate = (date: string): string => {
  const dt = new Date(date)
  return dt.getFullYear().toString()
}

export const getGenderInTextForm = (id: number): string => {
  if (id === 0) {
    return 'Not specified'
  }
  if (id === 1) {
    return 'Female'
  }
  if (id === 2) {
    return 'Male'
  }
  return 'Other'
}

export const getAgeFromBirthDate = (date: string): number => {
  const today = new Date()
  const birthDate = new Date(date)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

export const getFormattedDate = (date: string): string => {
  const givenDate = new Date(date)
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  return `${monthNames[givenDate.getMonth()]} ${givenDate.getDay()}, ${givenDate.getFullYear()}`
}
