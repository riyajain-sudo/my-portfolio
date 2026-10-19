import test from "node:test";
import assert from "node:assert/strict";
import { submitContact } from "../routes/contact.js";

const valid = { name: "Synthetic Person", email: "test@example.org", message: "Synthetic message content." };
function response() {
  return { statusCode: 200, status(code) { this.statusCode = code; return this; }, json(body) { this.body = body; return this; } };
}

test("malformed body shapes and invalid field types are rejected", () => {
  for (const body of [null, [], 5, { ...valid, email: 7 }, { ...valid, message: "x".repeat(4001) }]) {
    const res = response();
    submitContact({ body }, res);
    assert.equal(res.statusCode, 400);
  }
});

test("valid synthetic contact gets explicit non-delivery response with no content echoed or logged", () => {
  const output = [];
  const originalLog = console.log;
  console.log = (...args) => output.push(args.join(" "));
  try {
    const res = response();
    submitContact({ body: valid }, res);
    assert.equal(res.statusCode, 503);
    assert.equal(res.body.code, "DEMO_ONLY");
    assert.match(res.body.message, /not sent or stored/i);
    assert.equal(JSON.stringify(res.body).includes(valid.email), false);
    assert.equal(output.join(" ").includes(valid.email), false);
    assert.equal(output.join(" ").includes(valid.message), false);
  } finally {
    console.log = originalLog;
  }
});
