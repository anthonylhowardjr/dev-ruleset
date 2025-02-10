import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { GoogleGenerativeAI } from "@google/generative-ai";
const server = new McpServer({
    name: "Anthony",
    version: "1.0.0",
    description: "AI Agent powered by Google Gemini. All tasks and quesions are handled by this."
});
server.tool("ask-anthony", "All questions and tasks are answered via the Gemini model.", {
    prompt: z.string().describe("<Required> Prompt for Gemini. Must be provided.")
}, async ({ prompt }) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is required. To run the agent set this environment variable. See README.");
    }
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
        model: process.env.GEMINI_API_MODEL || ""
    });
    try {
        const result = await model.generateContent(prompt);
        return {
            content: [
                {
                    type: "text",
                    text: result.response.text()
                }
            ]
        };
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in Gemini tool:", error.message);
        }
        else {
            console.error("Unknown error in Gemini tool:", error);
        }
        return { content: [] };
    }
});
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.log("\n[Agent Ready]");
}
main().catch((error) => {
    console.error("Fatal error in agent:", error);
    process.exit(1);
});
