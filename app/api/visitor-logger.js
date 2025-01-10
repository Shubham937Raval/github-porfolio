import { db } from "./database/db";
import { visitors } from "./database/schema";


export async function logVisitor({ ip, userAgent, timestamp, duration }) {
  try {
    await db.insert(visitors).values({ ip, userAgent, timestamp, duration });
    console.log("Visitor data logged successfully.");
  } catch (e) {
    console.error("Error in insert:", e);
  }
}
