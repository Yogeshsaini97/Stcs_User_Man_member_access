export async function fetchData (url) {
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer ' +
        'eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJhMTk1Yzg0NTdmZmRiOGJlMTMxMmY0ZTg1NTI2Yzk1MzRiOTNhNDU0NWQxZWFhNmExYThmOTk0NTVjODdhODciLCJjbGllbnRfaWQiOiJpZC0zZTRlYzdlZC00YjVmLTM4YmYtZTQ3MC1hNTEwOGJjMzVkYzAiLCJpYXQiOjE2OTE0MTU3MjksImV4cCI6MTY5MTQxNjMyOSwic3ViIjoiMjAxMjQiLCJ1c2VybmFtZSI6InRlc3QiLCJpc3MiOiJsb2NhbGhvc3QiLCJzY29wZSI6IkNfUHJvamVjdFNjaGVkdWxlLmV2ZXJ5dGhpbmcud3JpdGUgQ19JbnZvaWNlLmV2ZXJ5dGhpbmcucmVhZCBDX01pbGVzdG9uZS5ldmVyeXRoaW5nLndyaXRlIENfU3Rha2Vob2xkZXIuZXZlcnl0aGluZy53cml0ZSBDX0Fzc2lnbmVkdG9teVJvbGUuZXZlcnl0aGluZyBDX1Byb2plY3QuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX1N0YWtlaG9sZGVyLmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5BZGRyZXNzLmV2ZXJ5dGhpbmcgQ19NaWxlc3RvbmUuZXZlcnl0aGluZy5yZWFkIENfQXBwcm92YWwuZXZlcnl0aGluZyBDX0FwcHJvdmFsLmV2ZXJ5dGhpbmcucmVhZCBDX0RDQy5ldmVyeXRoaW5nLndyaXRlIENfRG9jdW1lbnQuZXZlcnl0aGluZy53cml0ZSBDX0Fzc2lnbmVkdG9tZS5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZy5yZWFkIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLnJlYWQgQ19Bc3NpZ25lZHRvbWUuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3QuZXZlcnl0aGluZyBDX0FwcHJvdmFsLmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcucmVhZCBDX0RvY3VtZW50LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy53cml0ZSBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZy53cml0ZSBDX01pbGVzdG9uZS5ldmVyeXRoaW5nIENfQXNzaWduZWR0b215Um9sZS5ldmVyeXRoaW5nLndyaXRlIENfRENDLmV2ZXJ5dGhpbmcgQ19EQ0MuZXZlcnl0aGluZy5yZWFkIENfSW52b2ljZS5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLndyaXRlIENfQXNzaWduZWR0b21lLmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy53cml0ZSBDX1N0YWtlaG9sZGVyLmV2ZXJ5dGhpbmcucmVhZCBDX0Fzc2lnbmVkdG9teVJvbGUuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdC5ldmVyeXRoaW5nLnJlYWQgQ19JbnZvaWNlLmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nIENfRG9jdW1lbnQuZXZlcnl0aGluZyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifQ.iOaeZnbcIMkf8AM4mf_cnWKEC_Hdp1O04TODtEcaC8hI6-Rl1eJTqYv7mWyE_4FtFHkafcJvED-4EE9ENUPNwFDFtqw55prnMZhthkM5tMpVcYwZCaGEzB_eFAl-cQREph_0wQvTdP9EuyqfaB0HeRXzzUBU6G2T2fc3jX-K3Am_xIKsKJ_ANHpiEld2J7BtoBGVKKDPQ8oE_-1hH0uAcsuil_CSQ-BQoktUNNYIyWASBILsN8f60JB5ftQs773QYpK3CNtTDaX2bYVkokJgtGSlKe9zD6m1jg1Pum7IJjna_gcuiNyIFmCMN-85OQpFZkUCNRwrlxDo5wzxxu52GA',
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
