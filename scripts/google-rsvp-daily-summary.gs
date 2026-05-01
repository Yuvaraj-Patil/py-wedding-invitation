const OWNER_EMAIL = "yuvarajpatil79@gmail.com";
const SHEET_NAME = "Form Responses 1";
const RESPONSE_COLUMN_HEADER = "Response";
const FINAL_REPORT_DATE = new Date(2026, 4, 10, 23, 59, 59);

function sendDailyRsvpSummary() {
  const now = new Date();

  if (now > FINAL_REPORT_DATE) {
    deleteDailyRsvpSummaryTriggers();
    return;
  }

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getSheets()[0];
  const rows = sheet.getDataRange().getValues();

  if (rows.length < 2) {
    sendSummaryEmail(now, 0, 0, 0, 0);
    return;
  }

  const headers = rows[0].map(String);
  const timestampIndex = headers.indexOf("Timestamp");
  const responseIndex = headers.indexOf(RESPONSE_COLUMN_HEADER);

  if (timestampIndex === -1 || responseIndex === -1) {
    throw new Error('Expected Google Form columns named "Timestamp" and "Response".');
  }

  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrowStart = new Date(todayStart);
  tomorrowStart.setDate(tomorrowStart.getDate() + 1);

  let todayAccept = 0;
  let todayDecline = 0;
  let totalAccept = 0;
  let totalDecline = 0;

  rows.slice(1).forEach((row) => {
    const submittedAt = row[timestampIndex] instanceof Date
      ? row[timestampIndex]
      : new Date(row[timestampIndex]);
    const response = String(row[responseIndex] || "").toLowerCase();
    const isAccept = response.includes("accept");
    const isDecline = response.includes("decline");

    if (!isAccept && !isDecline) {
      return;
    }

    if (isAccept) {
      totalAccept += 1;
    } else {
      totalDecline += 1;
    }

    if (submittedAt >= todayStart && submittedAt < tomorrowStart) {
      if (isAccept) {
        todayAccept += 1;
      } else {
        todayDecline += 1;
      }
    }
  });

  sendSummaryEmail(now, todayAccept, todayDecline, totalAccept, totalDecline);
}

function sendSummaryEmail(now, todayAccept, todayDecline, totalAccept, totalDecline) {
  const timezone = Session.getScriptTimeZone();
  const reportDate = Utilities.formatDate(now, timezone, "dd MMM yyyy");
  const subject = `Wedding RSVP count - ${reportDate}`;
  const body = [
    `Wedding RSVP count for ${reportDate}`,
    "",
    "Today:",
    `Accept: ${todayAccept}`,
    `Decline: ${todayDecline}`,
    "",
    "Total so far:",
    `Accept: ${totalAccept}`,
    `Decline: ${totalDecline}`,
    "",
    "This daily report is configured to stop after 10 May 2026.",
  ].join("\n");

  MailApp.sendEmail(OWNER_EMAIL, subject, body);
}

function installDailyRsvpSummaryTrigger() {
  deleteDailyRsvpSummaryTriggers();

  ScriptApp.newTrigger("sendDailyRsvpSummary")
    .timeBased()
    .everyDays(1)
    .atHour(23)
    .create();
}

function deleteDailyRsvpSummaryTriggers() {
  ScriptApp.getProjectTriggers().forEach((trigger) => {
    if (trigger.getHandlerFunction() === "sendDailyRsvpSummary") {
      ScriptApp.deleteTrigger(trigger);
    }
  });
}
