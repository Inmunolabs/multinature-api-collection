# multinature-api-collection

## Installation Guide

1. Install bruno from this website https://www.usebruno.com/
2. Open Bruno and select Open Collection
3. Select the `api-collection` folder from the repo
4. **_Expected Project Structure_**

   The root folder of the repository is `api-collection/`, and it should contain the following:

   ```
   api-collection/
   ├── .git/
   │   └── hooks/
   ├── scripts/
   │   └── clean_bru_fields.js
   ├── addresses/
   │   └── AddressesCreate.bru
   └── ...
   ```

5. In _.git/hooks_ folder (_api-collection/.git/hooks_) add the `pre-commmit` file (from _api-collection/scripts/_) to cleans the `meta.seq` fields

   The script (_api-collection/scripts/clean_bru_fields.js_) checks all ``.bru`` files; cleans the `meta.seq` fields to be committed using regular expressions and saves the cleaned file without affecting other parts.

6. Done
