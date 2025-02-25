import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fetch from "node-fetch";

// Access the environment variable
const navigatorApiBaseUrl = process.env.NAVIGATOR_API_BASE_URL;

if (!navigatorApiBaseUrl) {
  throw new Error('NAVIGATOR_API_BASE_URL is not defined in the environment variables.');
}

// Initialize the MCP server with metadata
const server = new McpServer({
  name: "Anthony",
  version: "1.0.0",
  description: "AI Agent powered by Google Gemini, Chat API, and RAG API.",
});

/**
 * Tool: agent-query
 * Description: Sends a query to the Navigator API's /api/v1/agent/query endpoint.
 */
server.tool(
  "agent-query",
  "Send a query to the Navigator API /api/v1/agent/query endpoint.",
  {
    applicationId: z.string().uuid().describe("<Required> Application UUID."),
    modelId: z.number().int().min(1).max(32767).describe("<Required> Model ID."),
    prompt: z.string().min(1).describe("<Required> Prompt for the query."),
    sender: z.enum(["UI", "API", "Mobile", "Bot", "IntegrationTest", "UnitTest"]).describe("<Required> Sender."),
    senderId: z.string().min(1).describe("<Required> Sender ID."),
    userId: z.string().uuid().describe("<Required> User UUID."),
  },
  async ({ applicationId, modelId, prompt, sender, senderId, userId }) => {
    const endpoint = `${navigatorApiBaseUrl}/agent/query`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationId,
          modelId,
          prompt,
          sender,
          senderId,
          userId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to query Navigator API: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(data, null, 2),
          },
        ],
      };
    } catch (error) {
      console.error("Error in agent-query tool:", error);
      return { content: [{ type: "text", text: "Error querying Navigator API." }] };
    }
  }
);

/**
 * Tool: chat
 * Description: Initiates a chat session and retrieves the response from the Chat API.
 */
server.tool(
  "chat",
  "Initiate a chat session and fetch a response from the Chat API.",
  {
    applicationId: z.string().uuid().describe("<Required> Application UUID."),
    modelId: z.number().int().min(1).max(32767).describe("<Required> Model ID."),
    prompt: z.string().min(1).describe("<Required> Prompt for the chat."),
    sender: z.enum(["UI", "API", "Mobile", "Bot", "IntegrationTest", "UnitTest"]).describe("<Required> Sender."),
    senderId: z.string().min(1).describe("<Required> Sender ID."),
    userId: z.string().uuid().describe("<Required> User UUID."),
  },
  async ({ applicationId, modelId, prompt, sender, senderId, userId }) => {
    const initiateChatEndpoint = `${navigatorApiBaseUrl}/chat/initiatechat`;

    try {
      // Initiate Chat Session
      const initiateResponse = await fetch(initiateChatEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationId,
          modelId,
          prompt,
          sender,
          senderId,
          userId,
        }),
      });

      if (!initiateResponse.ok) {
        throw new Error(`Failed to initiate chat: ${initiateResponse.statusText}`);
      }

      const { sessionId } = await initiateResponse.json() as { sessionId: string };

      // Retrieve Chat Response
      const getResponseEndpoint = `${navigatorApiBaseUrl}/chat/getresponse/${sessionId}`;
      const fetchResponse = await fetch(getResponseEndpoint, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!fetchResponse.ok) {
        throw new Error(`Failed to fetch chat response: ${fetchResponse.statusText}`);
      }

      const chatData = await fetchResponse.json();
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(chatData, null, 2),
          },
        ],
      };
    } catch (error) {
      console.error("Error in chat tool:", error);
      return { content: [{ type: "text", text: "Error occurred during the chat process." }] };
    }
  }
);

/**
 * Tool: rag-query
 * Description: Executes a RAG query and returns the result.
 */
server.tool(
  "rag-query",
  "Perform a RAG query and return the AI-generated answer.",
  {
    prompt: z.string().min(1).describe("<Required> Prompt for the RAG query."),
  },
  async ({ prompt }) => {
    const ragQueryEndpoint = `${navigatorApiBaseUrl}/rag/query`;

    try {
      const response = await fetch(ragQueryEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`Failed to perform RAG query: ${response.statusText}`);
      }

      const ragData = await response.json() as { answer: string; references: any[] };
      return {
        content: [
          {
            type: "text",
            text: `Answer: ${ragData.answer}\n\nReferences: ${JSON.stringify(ragData.references, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      console.error("Error in rag-query tool:", error);
      return { content: [{ type: "text", text: "Error occurred during the RAG query." }] };
    }
  }
);

// Main function to establish server connection
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("\n[Agent Ready]");
}

main().catch((error) => {
  console.error("Fatal error in agent:", error);
  process.exit(1);
});
