export async function fetchData(url) {


  let response = await fetch(url, {
      method: 'GET'
      ,
      headers: {
        Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJmMWNjOGNhMzM4NDY3NGM4ZTQ4OTZhOWJiMDY0YzdkNDViMWQ5MTQ4ZjM5ZmU4MmVkMjQ5MWRjYjI2MzkxM2YiLCJjbGllbnRfaWQiOiJpZC0zZTRlYzdlZC00YjVmLTM4YmYtZTQ3MC1hNTEwOGJjMzVkYzAiLCJpYXQiOjE2OTA4ODAxODIsImV4cCI6MTY5MDg4MDc4Miwic3ViIjoiMjAxMjQiLCJ1c2VybmFtZSI6InRlc3QiLCJpc3MiOiJsb2NhbGhvc3QiLCJzY29wZSI6IkNfUHJvamVjdFNjaGVkdWxlLmV2ZXJ5dGhpbmcud3JpdGUgQ19JbnZvaWNlLmV2ZXJ5dGhpbmcucmVhZCBDX01pbGVzdG9uZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nLndyaXRlIENfU3Rha2Vob2xkZXIuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX01pbGVzdG9uZS5ldmVyeXRoaW5nLnJlYWQgQ19TdGFrZWhvbGRlci5ldmVyeXRoaW5nIENfQXBwcm92YWwuZXZlcnl0aGluZyBDX0FwcHJvdmFsLmV2ZXJ5dGhpbmcucmVhZCBDX0RvY3VtZW50LmV2ZXJ5dGhpbmcud3JpdGUgQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZy5yZWFkIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcgQ19BcHByb3ZhbC5ldmVyeXRoaW5nLndyaXRlIENfRG9jdW1lbnQuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy53cml0ZSBDX01pbGVzdG9uZS5ldmVyeXRoaW5nIENfSW52b2ljZS5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdFNjaGVkdWxlLmV2ZXJ5dGhpbmcgQ19TdGFrZWhvbGRlci5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcucmVhZCBDX0ludm9pY2UuZXZlcnl0aGluZyBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcgQ19Eb2N1bWVudC5ldmVyeXRoaW5nIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyJ9.o_-a4pZ0GfIRtvG4IEajLytHczbevWfUstCmUL_4Dqrxx24vA_n--X-oAFDUy0jDX7MI4-MXKEsj9s5dTT_5UyM_LDFggUjYI2xLnWmAb44JBNciihytPQc3eziWavpaN_mvMtGKoDDx5GwYtuQ44b_8ebyDal2Z72EI-W1jqyJvm5IMOWJTrIpdFMBv7YdL7U-5Vy7B4ACiAKmUrQD9XrRUyAzK-mbrpdIdaiLe0iYJFxHwPP2_Pii9yEo_X48SgJ2yxwbgqL7rfZuwGxGncl2Za1SY1OVtyvQ1-8DVYgTdFG3jIsgoycTUWZM1eUCjlGSrJ_Bu1MgTX4LSAqXKrg",
        'Content-Type': 'application/json'
      }
    })
       
    response=await response.json();
 


return response;    
}


export  function ChangeDateFormat(date)
{
  const originalDate = new Date(date);
  const options = { year: "numeric", month: "short", day: "numeric" };
  
  const formattedDate = originalDate.toLocaleDateString("en-US", options);
  return formattedDate;
}


export function formatTimeTo12HourFormat(dateString) {
const date = new Date(dateString);
const hours = date.getHours();
const minutes = date.getMinutes();

const amOrPm = hours >= 12 ? "PM" : "AM";
const formattedHours = hours % 12 || 12;
const formattedMinutes = minutes.toString().padStart(2, "0");

const formattedTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;
return formattedTime;
}


export function GiveDayandmonthseperate(inputDate) {
// Convert the input date string to a Date object
const dateObj = new Date(inputDate);

// Get the day of the month in the format "dd"
const day = String(dateObj.getDate()).padStart(2, '0');

// Get the month abbreviation (e.g., "Jul") and the year in 2-digit format (e.g., "'23")
const monthAbbreviation = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObj);
const yearTwoDigits = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(dateObj);

// Construct the formatted date string
const formattedDate = `${monthAbbreviation} '${yearTwoDigits}`;

return {day, formattedDate};
}


export function find_num_of_risksnissues(apiGot){
  no_of_Risks=0;
  no_of_Issues=0;

  console.log(apiGot)
  apiGot.items.forEach(element => {

    if (element.type == "Issue") {
      no_of_Issues++;
    }
    else if (element.type == "Risk") {
      no_of_Risks++;
    }


  });
}










