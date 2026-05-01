export const rsvpConfig = {
  ownerEmail: "yuvarajpatil79@gmail.com",
  // Paste the Google Form response URL here, ending with /formResponse.
  googleFormActionUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSc4mDPKymY0K5BAOCzmNrltrOZhMxugCiWMGPQDi0OPPz3CaA/formResponse",
  // Use entry IDs from the same Google Form, for example entry.123456789.
  fields: {
    response: "entry.929439497",
    source: "",
    visitorId: "",
  },
} as const

export const isGoogleRsvpConfigured =
  Boolean(rsvpConfig.googleFormActionUrl) &&
  Boolean(rsvpConfig.fields.response)
