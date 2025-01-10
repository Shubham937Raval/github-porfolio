'use server';
import { logVisitor } from "../visitor-logger";
import os from "os"; // Correct import

// Resolve the IP dynamically
function getIpAddress() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    for (const iface of interfaces[interfaceName]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "127.0.0.1"; // Default fallback
}

async function test(req, res) {
  const ip = getIpAddress();
  const visitorData = {
    ip: ip,
    userAgent: req.headers["user-agent"], // Get user-agent from headers
    timestamp: new Date().toISOString(),
    duration: 120,
  };

  console.log("Visitor Data:", visitorData);
  await logVisitor(visitorData);
}

export async function handler(req, res) {
  if (req.method === "POST") {
    await test(req, res);
    return res.status(200).json({ message: "Visitor logged successfully" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
