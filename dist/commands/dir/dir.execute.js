var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { spawn } from 'child_process';
import { CommandExecuter } from '../../core/executor/command.executer.js';
import { StreamHandler } from '../../core/handlers/stream.handler.js';
import { PromptService } from '../../core/prompt/prompt.service.js';
import { DirBuilder } from './dir.builder.js';
export class DirExecutor extends CommandExecuter {
    constructor(logger) {
        super(logger);
        this.promptService = new PromptService();
    }
    prompt() {
        return __awaiter(this, void 0, void 0, function* () {
            let path = yield this.promptService.input('Путь', 'input');
            return { path };
        });
    }
    build({ path }) {
        const args = new DirBuilder().detailedOutput().output();
        return { command: 'ls', args: args.concat(path) };
    }
    spawn({ command, args }) {
        return spawn(command, args);
    }
    processStream(stream, logger) {
        const handler = new StreamHandler(logger);
        handler.processOutput(stream);
    }
}
