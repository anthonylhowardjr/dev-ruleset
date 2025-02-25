import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Create server instance
const server = new McpServer({
  name: "gemini",
  version: "1.0.0",
});

server.tool("gemini", "All coding questions should be answered here",
  {
    prompt: z.string().describe("Prompt for the tool"),
  },
  async ({ prompt }) => {
    const genAI = new GoogleGenerativeAI('Placeholder');

    const model = genAI.getGenerativeModel({
      model: "tunedModels/engineeringagent-kz2tf4jvrlw6",
    });

    const result = await model.generateContent(prompt);
    console.log(result.response);

  return {
    content: [
      {
        type: "text",
        text: result.response.text(),
      },
    ],
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
