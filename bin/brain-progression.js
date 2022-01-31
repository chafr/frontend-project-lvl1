#!/usr/bin/env node

import { startGame } from '../src/index.js';
import initQuestionAnswer from '../src/games/brain-progression.js';

startGame(initQuestionAnswer);
