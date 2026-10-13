// This test is meant to go dark: it demonstrates a dark light on light-report.
import { test } from 'node:test';
import assert from 'node:assert/strict';
test('one plus one is three (it is not, so this light is dark)', () => assert.equal(1 + 1, 3));
