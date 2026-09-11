#!/usr/bin/env node

/**
 * Publishing repository builds consume the reviewed Field Notes archive.
 * Live refresh belongs to the private source repository/worker and must not
 * be reimplemented here: doing so would overwrite the archive with an
 * unreviewed snapshot or publish remote credentials.
 */
console.error(
  [
    "Field Notes refresh is unavailable in the publishing repository.",
    "Refresh the persistent archive in the source repository first, then run the full source build.",
    "The full source build must produce client/public/data/field-notes.json and its local image derivatives.",
    "This standalone script intentionally does not fetch CompanyCam or overwrite the saved archive.",
  ].join("\n"),
);
process.exitCode = 1;