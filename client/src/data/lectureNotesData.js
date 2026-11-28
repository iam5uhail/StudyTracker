// Central Repository of Core Java Lecture Notes
// Keyed by permanent topic numbers (1 to 141) with full detailed notes and class examples

import { notesPart1 } from './notes/notesPart1.js';
import { notesPart2 } from './notes/notesPart2.js';
import { notesPart3 } from './notes/notesPart3.js';
import { notesPart4 } from './notes/notesPart4.js';
import { notesPart5 } from './notes/notesPart5.js';

export const topicNotes = {
  ...notesPart1,
  ...notesPart2,
  ...notesPart3,
  ...notesPart4,
  ...notesPart5
};

// Complete lookup dictionary mapping by topic numbers, topic keys, and sprint task IDs
export const lectureNotesData = {};

// 1. Populate numeric and topic-X lookup keys
for (let i = 1; i <= 141; i++) {
  if (topicNotes[i]) {
    lectureNotesData[i] = topicNotes[i];
    lectureNotesData[`topic-${i}`] = topicNotes[i];
  }
}

// 2. 47-Day Sprint Plan Day-Slot Mapping (3 Lectures / Day, 2 on Day 47)
// Maps d1-j1, d1-j2, d1-j3 ... exactly to each consecutive topic
const orderedTopicNums = Object.keys(topicNotes)
  .map(Number)
  .filter(n => n !== 121) // 121 is special bridge topic; syllabus maps 140 standard topics
  .sort((a, b) => a - b);

let topicPointer = 0;
for (let day = 1; day <= 47; day++) {
  const count = (day === 47) ? 2 : 3;
  for (let slot = 1; slot <= count; slot++) {
    if (topicPointer < orderedTopicNums.length) {
      const num = orderedTopicNums[topicPointer];
      lectureNotesData[`d${day}-j${slot}`] = topicNotes[num];
      topicPointer++;
    }
  }
}

// Ensure 121 is also accessible directly by key
lectureNotesData[121] = topicNotes[121];
lectureNotesData["topic-121"] = topicNotes[121];

/**
 * Universal resolver for any lecture note by topic number, task object, or taskId
 */
export function getLectureNote(param, taskObj) {
  if (!param && !taskObj) return null;

  const targetObj = (param && typeof param === 'object') ? param : taskObj;

  // 1. Direct number check
  if (typeof param === 'number' && topicNotes[param]) {
    return topicNotes[param];
  }

  // 2. Check target object's topic number
  if (targetObj) {
    if (targetObj.num && topicNotes[targetObj.num]) {
      return topicNotes[targetObj.num];
    }
    if (targetObj.topicNum && topicNotes[targetObj.topicNum]) {
      return topicNotes[targetObj.topicNum];
    }
    // Inspect title for topic number e.g. "25. Constructor"
    if (targetObj.title) {
      const match = targetObj.title.match(/^(\d+)[\.\s]/);
      if (match) {
        const n = parseInt(match[1], 10);
        if (topicNotes[n]) return topicNotes[n];
      }
    }
  }

  // 3. String lookup
  if (typeof param === 'string') {
    // "topic-25" or "25"
    const m = param.match(/^topic-(\d+)$/i) || param.match(/^(\d+)$/);
    if (m) {
      const n = parseInt(m[1], 10);
      if (topicNotes[n]) return topicNotes[n];
    }

    // Direct lookup in lectureNotesData
    if (lectureNotesData[param]) {
      return lectureNotesData[param];
    }
  }

  return null;
}

export default lectureNotesData;
