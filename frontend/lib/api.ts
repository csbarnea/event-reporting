import type { Event, CreateIncidentRequest } from "./types"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5221"

export async function fetchIncidents(): Promise<Event[]> {
  const response = await fetch(`${API_BASE_URL}/api/incidents`)
  if (!response.ok) { 
    throw new Error("Failed to fetch incidents")
  }
  return response.json()
}

export async function fetchIncident(id: number): Promise<Event> {
  const response = await fetch(`${API_BASE_URL}/api/incidents/${id}`)
  if (!response.ok) {
    throw new Error("Failed to fetch incident")
  }
  return response.json()
}


export async function createIncident(
  data: CreateIncidentRequest,
  photoFile?: File | null
): Promise<Event> {
  const form = new FormData()

  form.append("lat", data.lat.toString())
  form.append("lon", data.lon.toString())
  form.append("alert_code", data.alert_code)
  form.append("description", data.description)

  if (data.tag) form.append("tag", data.tag)
  if (data.reporter_name) form.append("reporter_name", data.reporter_name)
  if (data.reporter_email) form.append("reporter_email", data.reporter_email)
  if (data.reporter_phone) form.append("reporter_phone", data.reporter_phone)

  if (photoFile) {
    form.append("photo", photoFile) // field name = "photo" (backend)
  }

  const response = await fetch(`${API_BASE_URL}/api/incidents`, {
    method: "POST",
    body: form,
  })

  if (!response.ok) {
    const text = await response.text().catch(() => "")
    throw new Error(`Failed to create incident (${response.status}): ${text}`)
  }

  return response.json()
}



// export async function createIncident(data: CreateIncidentRequest): Promise<Event> {
//   const response = await fetch(`${API_BASE_URL}/api/incidents`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//   if (!response.ok) {
//     throw new Error("Failed to create incident")
//   }
//   return response.json()
// }

// export async function createIncident(
//   data: CreateIncidentRequest,
//   photoFile?: File
// ): Promise<Event> {
//   const form = new FormData();

//   form.append("lat", data.lat.toString());
//   form.append("lon", data.lon.toString());
//   form.append("alert_code", data.alert_code);
//   form.append("description", data.description);
//   form.append("tag", data.tag);

//   if (data.reporter_name) form.append("reporter_name", data.reporter_name);
//   if (data.reporter_email) form.append("reporter_email", data.reporter_email);
//   if (data.reporter_phone) form.append("reporter_phone", data.reporter_phone);

//   if (photoFile) {
//     form.append("photo", photoFile);
//   }

//   const response = await fetch(`${API_BASE_URL}/api/incidents`, {
//     method: "POST",
//     body: form,
//   });

//   if (!response.ok) {
//     throw new Error("Failed to create incident");
//   }

//   return response.json();
// }