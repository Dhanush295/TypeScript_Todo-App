"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const database_1 = require("../db/database");
router.get('/home', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield database_1.TODO.find({});
    res.json(todo);
}));
router.post("/todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoData = req.body;
        const newTodo = new database_1.TODO(todoData);
        yield newTodo.save();
        res.status(201).json({ message: "TODO item created successfully", todo: newTodo });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.delete('/todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = req.params.id;
        const deletedTodo = yield database_1.TODO.findByIdAndDelete(todoId);
        if (deletedTodo) {
            res.status(200).json({ message: 'Todo deleted successfully' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}));
exports.default = router;
