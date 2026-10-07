# 파일을 추가하거나 지운 뒤 사이트 맨 위 폴더에서 `python3 gen/make_sw.py 5` 처럼 실행하면
# sw.js의 저장 목록과 VERSION(pai-thiao-v5)이 새로 만들어진다.
import glob, os, re, sys
v = sys.argv[1] if len(sys.argv) > 1 else None
# 녹음실(record/)과 녹음실 전용 파일은 여행자 기기에 저장하지 않는다
skip = lambda f: f.startswith('record') or f.startswith('assets/vendor/') or f.startswith('assets/record.')
files = ['./', 'manifest.webmanifest', 'favicon.svg'] + [os.path.dirname(d) + '/' for d in sorted(glob.glob('*/index.html')) if not skip(d)]
files += [f for f in sorted(glob.glob('assets/**/*', recursive=True)) if os.path.isfile(f) and not skip(f)]
s = open('sw.js').read()
s = re.sub(r'const FILES = \[.*?\];', 'const FILES = [\n  ' + ',\n  '.join('"' + f + '"' for f in files) + '\n];', s, flags=re.S)
if v: s = re.sub(r"const VERSION = 'pai-thiao-v\d+';", f"const VERSION = 'pai-thiao-v{v}';", s)
open('sw.js', 'w').write(s)
print(len(files), 'files')
