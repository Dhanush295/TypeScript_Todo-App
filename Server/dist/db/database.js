"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TODO = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define mongoose schemas
const todoSchema = new mongoose_1.default.Schema({
    title: String,
    description: String
});
exports.TODO = mongoose_1.default.model('Todos', todoSchema);
