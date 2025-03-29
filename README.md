# multinature-api-collection

## Installation Guide

1. Install bruno from this website https://www.usebruno.com/
2. Open Bruno and select Open Collection
3. Select the `api-collection` folder from the repo
4. ***Expected Project Structure***

   The root folder of the repository is `api-collection/`, and it should contain the following:

   ```
   api-collection/
   ├── .git/
   ├── .gitattributes
   ├── git_filters/
   │   └── filter_bru_clean.js
   ├── addresses/
   │   └── AddressesCreate.bru
   └── ...
   ```

5. Configure the filter to ignore changes in `meta.seq` in Git
   Run these commands **from the root of the repo** (`api-collection/`):

   ```bash
   git config filter.bru_clean.clean "node git_filters/filter_bru_clean.js"
   git config filter.bru_clean.smudge "cat"
   ```

   **NOTE:** This is **only required once per machine** (local user config).

6. Reprocess files so Git uses the filter

   This is important to ensure Git applies the cleaning filter retroactively:

   ```bash
   git rm --cached -r .
   git add .
   ```

   **NOTE:** This does **not delete any files** from disk, it just temporarily removes them from Git’s index and adds them again **using the `clean` filter**.

7. Final verification

   1. Modify a `.bru` file that contains a `meta.seq` field
   2. Run:

   ```bash
   git add <api/fileModified.bru>
   git diff --cached
   ```

   The `meta.seq` field should **no longer appear** in the diff.

8. Done
