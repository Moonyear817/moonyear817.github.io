"""Check complete project and interface coverage for the five primary languages."""

import json
from pathlib import Path

root = Path(__file__).resolve().parent.parent
required = {'zh', 'en', 'ja', 'ko', 'ru'}


def read_export(name, variable):
    source = (root / 'js' / name).read_text()
    return json.loads(source.split('export const ' + variable + ' = ', 1)[1].strip().rstrip(';'))


localized_fields = 0


def check(value, location):
    global localized_fields
    if isinstance(value, dict):
        if {'zh', 'en'} <= value.keys():
            assert required <= value.keys(), 'Missing translation: ' + location
            for language in required:
                assert isinstance(value[language], str) and value[language].strip(), (location, language)
            localized_fields += 1
        else:
            for key, child in value.items():
                check(child, location + '/' + key)
    elif isinstance(value, list):
        for index, child in enumerate(value):
            check(child, location + '/' + str(index))


projects = read_export('project-data.js', 'projects')
check(projects, 'projects')
locales = read_export('locales.js', 'locales')
for language in required:
    assert locales['en'].keys() <= locales[language].keys(), language
    assert len(locales[language]['verses']) == 5, language
    for key in locales['en']:
        value = locales[language][key]
        assert value and (not isinstance(value, str) or value.strip()), (language, key)

print(f'Complete: {len(projects)} project records, {localized_fields} localized fields, '
      f'{len(locales["en"])} interface/reading keys, 5 languages.')
