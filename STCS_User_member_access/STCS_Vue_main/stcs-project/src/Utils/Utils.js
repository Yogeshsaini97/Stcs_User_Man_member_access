export async function fetchData (url) {
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer ' +
        'eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxMTdkZjU5ZjU2NzA0OTEyYmYzNjc0NjQ0NmFhOTI2NTlhYmZhNjIxODdiNjU0NTdlMTUzNWRkYzRkOWUwNyIsImNsaWVudF9pZCI6ImlkLTNlNGVjN2VkLTRiNWYtMzhiZi1lNDcwLWE1MTA4YmMzNWRjMCIsImlhdCI6MTY5MTQwODk3MywiZXhwIjoxNjkxNDA5NTczLCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZy53cml0ZSBDX0ludm9pY2UuZXZlcnl0aGluZy5yZWFkIENfTWlsZXN0b25lLmV2ZXJ5dGhpbmcud3JpdGUgQ19TdGFrZWhvbGRlci5ldmVyeXRoaW5nLndyaXRlIENfQXNzaWduZWR0b215Um9sZS5ldmVyeXRoaW5nIENfUHJvamVjdC5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nIENfU3Rha2Vob2xkZXIuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZyBDX01pbGVzdG9uZS5ldmVyeXRoaW5nLnJlYWQgQ19BcHByb3ZhbC5ldmVyeXRoaW5nIENfQXBwcm92YWwuZXZlcnl0aGluZy5yZWFkIENfRENDLmV2ZXJ5dGhpbmcud3JpdGUgQ19Eb2N1bWVudC5ldmVyeXRoaW5nLndyaXRlIENfQXNzaWduZWR0b21lLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nLnJlYWQgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcucmVhZCBDX0Fzc2lnbmVkdG9tZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nIENfQXBwcm92YWwuZXZlcnl0aGluZy53cml0ZSBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy5yZWFkIENfRG9jdW1lbnQuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy5yZWFkIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uQWRkcmVzcy5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLndyaXRlIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uQWRkcmVzcy5ldmVyeXRoaW5nLndyaXRlIENfTWlsZXN0b25lLmV2ZXJ5dGhpbmcgQ19Bc3NpZ25lZHRvbXlSb2xlLmV2ZXJ5dGhpbmcud3JpdGUgQ19EQ0MuZXZlcnl0aGluZyBDX0RDQy5ldmVyeXRoaW5nLnJlYWQgQ19JbnZvaWNlLmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcud3JpdGUgQ19Bc3NpZ25lZHRvbWUuZXZlcnl0aGluZyBDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLndyaXRlIENfU3Rha2Vob2xkZXIuZXZlcnl0aGluZy5yZWFkIENfQXNzaWduZWR0b215Um9sZS5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcucmVhZCBDX0ludm9pY2UuZXZlcnl0aGluZyBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcgQ19Eb2N1bWVudC5ldmVyeXRoaW5nIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyJ9.habWq2G6s4ospZ5UoGAl-IbIQe3AkAPbr-2iBJMSpVPJmuxA6OjJYhguzho1jWJp0V-0NVpDdoqjj36GSFX1iJmHgsNgcKcqtAUn6qwLqNQdSQtKTRTeJ4j5b0WDKQLfdG4YCMdv4zacYyl5zkxtcW6Sfi2eQrvfpwl7-dR8ZNKGNjfgLQOlF2p7rGbvSXY_65qJdjbn0sZE6TYULI6FHu_SYx8BaIjYxRj3e5SZu9idCQjAycGRtZO4tI7WJHfRqdMrEvZX2jiwJEed4x7ZLlGvG3SMIRbjNb3GpuDE_xb8qB3zpFvsJkQ522PJgjDDnGt74LebWH4WFE77s6zOQw',
      'Content-Type': 'application/json'
    }
  })

  response = await response.json()

  return response
}

export function ChangeDateFormat (date) {
  const originalDate = new Date(date)
  const options = { year: 'numeric', month: 'short', day: 'numeric' }

  const formattedDate = originalDate.toLocaleDateString('en-US', options)
  return formattedDate
}

export function formatTimeTo12HourFormat (dateString) {
  const date = new Date(dateString)
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const amOrPm = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12 || 12
  const formattedMinutes = minutes.toString().padStart(2, '0')

  const formattedTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`
  return formattedTime
}

export function GiveDayandmonthseperate (inputDate) {
  // Convert the input date string to a Date object
  const dateObj = new Date(inputDate)

  // Get the day of the month in the format "dd"
  const day = String(dateObj.getDate()).padStart(2, '0')

  // Get the month abbreviation (e.g., "Jul") and the year in 2-digit format (e.g., "'23")
  const monthAbbreviation = new Intl.DateTimeFormat('en', {
    month: 'short'
  }).format(dateObj)
  const yearTwoDigits = new Intl.DateTimeFormat('en', {
    year: '2-digit'
  }).format(dateObj)

  // Construct the formatted date string
  const formattedDate = `${monthAbbreviation} '${yearTwoDigits}`

  return { day, formattedDate }
}

export function find_num_of_risksnissues (apiGot) {
  no_of_Risks = 0
  no_of_Issues = 0

  console.log(apiGot)
  apiGot.items.forEach(element => {
    if (element.type == 'Issue') {
      no_of_Issues++
    } else if (element.type == 'Risk') {
      no_of_Risks++
    }
  })
}
