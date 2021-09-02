import os
import sys

REMOVE_PATHS = [
    " docs/source/akm ",
    " docs/source/adr.md ",
    " .github/workflows/publish_log4brains.yml ",
]

for path in REMOVE_PATHS:
    path = path.strip()
    if path and os.path.exists(path):
        if os.path.isdir(path):
            os.rmdir(path)
        else:
            os.unlink(path)
