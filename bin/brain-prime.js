#!/usr/bin/env node

import { startGame } from '../src/index.js';
import initQuestionAnswer from '../src/games/brain-prime.js';

startGame(initQuestionAnswer);
