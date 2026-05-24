export const emailAddress = "maloomanmohan810@gmail.com";

const emailSubject = "Portfolio inquiry";
const emailBody = [
  "Hi Manmohan,",
  "",
  "I visited your portfolio and would like to discuss a potential opportunity.",
  "",
  "Project / Role:",
  "Timeline:",
  "Budget / Compensation:",
  "",
  "Best regards,",
  "",
].join("\n");

export const emailHref = `mailto:${emailAddress}?subject=${encodeURIComponent(
  emailSubject,
)}&body=${encodeURIComponent(emailBody)}`;
