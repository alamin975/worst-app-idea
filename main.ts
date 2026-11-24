import { writeFileSync, mkdirSync } from "node:fs";

// One sentence, max 240 chars: the worst app idea ever pitched —
// a notification app whose only job is notifying you about notifications.
const ENTRY =
  "Notifly is the app that sends you a push notification every time your phone is about to send you a push notification, so you never miss a notification about a notification.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8"); // explicit utf8 encoding
}

writeEntry();
