import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import process from "node:process";

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string().min(1),
      email: z.string().email(),
      company: z.string().optional(),
      message: z.string().min(1),
    })
  )
  .handler(async ({ data }) => {
    try {
      const accessKey = process.env.VITE_WEB3FORMS_ACCESS_KEY || import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
        console.error("SERVER-ERROR: Web3Forms access key is missing in server environment.");
        return { success: false, error: "Web3Forms key is missing in server environment." };
      }

      console.log(`SERVER-LOG: Submitting form for ${data.name} (${data.email}) to Web3Forms...`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          "Origin": "https://web3forms.com",
          "Referer": "https://web3forms.com/",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name,
          email: data.email,
          company: data.company || "",
          message: data.message,
          subject: `New Portfolio Message from ${data.name}`,
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        const text = await response.text();
        console.error(`SERVER-ERROR: Web3Forms API returned non-JSON response (Status: ${response.status}):`, text.slice(0, 1000));
        return { 
          success: false, 
          error: `API returned invalid format (Status: ${response.status}). The request might be blocked by a firewall or VPN.`
        };
      }

      const resData = await response.json();
      if (!resData.success) {
        console.error("SERVER-ERROR: Web3Forms API returned failure:", resData);
        return { success: false, error: resData.message || "Web3Forms submission failed" };
      }

      console.log("SERVER-LOG: Web3Forms submission successful!");
      return { success: true };
    } catch (err: any) {
      console.error("SERVER-ERROR: Exception caught in submitContactForm handler:", err);
      return { success: false, error: err.message || "An unexpected server error occurred." };
    }
  });
