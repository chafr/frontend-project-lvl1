#!/usr/bin/env node

import { startGame } from '../src/index.js';
import initQuestionAnswer from '../src/games/brain-calc.js';

startGame(initQuestionAnswer);
