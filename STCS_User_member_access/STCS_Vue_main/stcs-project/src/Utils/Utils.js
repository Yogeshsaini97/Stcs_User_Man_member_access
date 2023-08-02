export async function fetchData (url) {
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer ' +
        'eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIyNjIzZTA2Y2U0OTFhYmRlNTM2MjI0Y2E1N2RlMzE0MWM0YTY3MjFlNzExZjNmOWVjNTdkZThlNTI4MTljNGYiLCJjbGllbnRfaWQiOiJpZC0zZTRlYzdlZC00YjVmLTM4YmYtZTQ3MC1hNTEwOGJjMzVkYzAiLCJpYXQiOjE2OTA5OTE1NDksImV4cCI6MTY5MDk5MjE0OSwic3ViIjoiMjAxMjQiLCJ1c2VybmFtZSI6InRlc3QiLCJpc3MiOiJsb2NhbGhvc3QiLCJzY29wZSI6IkNfUHJvamVjdFNjaGVkdWxlLmV2ZXJ5dGhpbmcud3JpdGUgQ19JbnZvaWNlLmV2ZXJ5dGhpbmcucmVhZCBDX01pbGVzdG9uZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nLndyaXRlIENfU3Rha2Vob2xkZXIuZXZlcnl0aGluZy53cml0ZSBDX0Fzc2lnbmVkdG9teVJvbGUuZXZlcnl0aGluZyBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX1N0YWtlaG9sZGVyLmV2ZXJ5dGhpbmcgQ19NaWxlc3RvbmUuZXZlcnl0aGluZy5yZWFkIENfQXBwcm92YWwuZXZlcnl0aGluZyBDX0FwcHJvdmFsLmV2ZXJ5dGhpbmcucmVhZCBDX0RDQy5ldmVyeXRoaW5nLndyaXRlIENfRG9jdW1lbnQuZXZlcnl0aGluZy53cml0ZSBDX0Fzc2lnbmVkdG9tZS5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZy5yZWFkIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLnJlYWQgQ19Bc3NpZ25lZHRvbWUuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3QuZXZlcnl0aGluZyBDX0FwcHJvdmFsLmV2ZXJ5dGhpbmcud3JpdGUgQ19Eb2N1bWVudC5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLndyaXRlIENfTWlsZXN0b25lLmV2ZXJ5dGhpbmcgQ19Bc3NpZ25lZHRvbXlSb2xlLmV2ZXJ5dGhpbmcud3JpdGUgQ19EQ0MuZXZlcnl0aGluZyBDX0ludm9pY2UuZXZlcnl0aGluZy53cml0ZSBDX0RDQy5ldmVyeXRoaW5nLnJlYWQgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcud3JpdGUgQ19Bc3NpZ25lZHRvbWUuZXZlcnl0aGluZyBDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nIENfU3Rha2Vob2xkZXIuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdC5ldmVyeXRoaW5nLnJlYWQgQ19Bc3NpZ25lZHRvbXlSb2xlLmV2ZXJ5dGhpbmcucmVhZCBDX0ludm9pY2UuZXZlcnl0aGluZyBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcgQ19Eb2N1bWVudC5ldmVyeXRoaW5nIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyJ9.heKlPDBYra8ja_qSeSkP4s4GF8tNN3jl2CYcXxbLMbocu1vi7c3HMw2r9Gc2QH5QpNniVL9phTKlO1uRraKbw_goO3R-Xv_4SguVeqU4HYC03ebRrDO4z77313rPPV_uzGWfugWiYN2f4bxKNFk0GlM5gwWPBn96XmNiFfH0qYfevtjh7fJNcpuJyaNqowVtLmSsWA-9vtYoqKXNsaYkay6jG08RPQbpBbhWJWf2rLdtjMt-72HfwV9Z6A4XmOqFK_kpFi79W1B2tyTEaotk-LWGkgDkLmVefpCeCGMxV_01PUJM1Kj_BQIiwTV5hjsLviBlz86YtYBib7sPj7lMIA',
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
