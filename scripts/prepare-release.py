"""Version local modules and styles together before pushing a Pages update."""

import hashlib
from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent
files = [root / 'index.html', *sorted(root.glob('*.css')), *sorted((root / 'js').glob('*.js'))]
normalized = {path: re.sub(r'\?v=[A-Za-z0-9_-]+', '', path.read_text()) for path in files}
digest = hashlib.sha256()
for path, text in normalized.items():
    digest.update(path.relative_to(root).as_posix().encode())
    digest.update(text.encode())
version = digest.hexdigest()[:12]

for path, text in normalized.items():
    if path.name == 'index.html':
        text = re.sub(r'((?:src|href)="\./(?:js/[^"?]+\.js|[^/"?]+\.css))"',
                      lambda match: match[1] + '?v=' + version + '"', text)
    elif path.suffix == '.js':
        text = re.sub(r"(from\s+['\"]\./[^'\"?]+\.js)(['\"])",
                      lambda match: match[1] + '?v=' + version + match[2], text)
    path.write_text(text)

print('Release asset version:', version)
