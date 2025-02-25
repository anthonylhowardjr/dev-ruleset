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
server.tool("generate-commit-message", "Generates commit messages using the custom API.", {
    prompt: z.string().describe("<Required> Prompt for generating commit message. Must be provided.")
}, async ({ prompt }) => {
    const apiUrl = "https://aip-api.test.rp.foc.zone/swagger/index.html#/Chat";
    const version = "v1"; // Replace with the actual version if different
    try {
        // Initiate chat request
        const initiateResponse = await fetch(`${apiUrl}/post_api_${version}_chat_initiatechat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });
        if (!initiateResponse.ok) {
            throw new Error("Failed to initiate chat session");
        }
        const initiateData = await initiateResponse.json();
        const sessionId = initiateData.SessionId;
        // Fetch chat response
        const fetchResponse = await fetch(`${apiUrl}/get_api_${version}_chat_getresponse_${sessionId}`, {
            method: "GET"
        });
        if (!fetchResponse.ok) {
            throw new Error("Failed to fetch chat response");
        }
        const fetchData = await fetchResponse.json();
        const commitMessage = fetchData.response.text;
        return {
            content: [
                {
                    type: "text",
                    text: commitMessage
                }
            ]
        };
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error in generate-commit-message tool:", error.message);
        }
        else {
            console.error("Unknown error in generate-commit-message tool:", error);
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
