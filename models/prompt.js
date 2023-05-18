import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is require.d'],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],
    }
})