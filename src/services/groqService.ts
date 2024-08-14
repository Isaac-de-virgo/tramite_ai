// src/services/groqService.ts

import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
require('dotenv').config();

interface GenerateResponseProps {
    promptUser: string;
}

const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: "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",
});

export const generateResponse = async (props: GenerateResponseProps) => {
    const promptSend = props.promptUser;
    const { text } = await generateText({
        model: groq('llama3-8b-8192'),
        prompt: promptSend,
    });

    return text;
};
