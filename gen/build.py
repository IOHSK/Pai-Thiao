# 구간 내용(파이썬)을 lessons.js 형식으로 바꾼다. 보기의 오답은 같은 과의 다른 표현에서 고른다.
import json, sys
def U(th, r, k, en, ko, n=None):
    d = {'th': th, 'r': r, 'k': k, 'm': [en, ko]}
    if n: d['n'] = list(n)
    return d
def lesson(guide, units, intro, tip, choose, speak, fill, note, today, final=False, chooseTitle=None, fillTitle=None):
    ch = []
    for c in choose:
        t, i, why = c[0], c[1], c[2]
        others = [j for j in range(len(units)) if j != i]
        pick = c[3] if len(c) > 3 else [others[(i) % len(others)], others[(i + 1) % len(others)]]
        if t == 'h':
            ch.append({'type': 'hear', 'say': units[i]['th'], 'opts': [units[i]['r']] + [units[j]['r'] for j in pick], 'a': 0, 'why': list(why)})
        else:
            ch.append({'type': 'mean', 'say': units[i]['th'], 'opts': [units[i]['m']] + [units[j]['m'] for j in pick], 'a': 0, 'why': list(why)})
    fl = []
    for f in fill:
        d = {'say': f[0], 'parts': f[1], 'a': f[2], 'opts': f[3]}
        if len(f) > 4: d['m'] = list(f[4])
        fl.append(d)
    d = {'guide': guide, 'units': units, 'intro': list(intro), 'tip': list(tip), 'choose': ch, 'speak': speak, 'fill': fl, 'note': list(note), 'today': today}
    if final: d['final'] = True
    if chooseTitle: d['chooseTitle'] = chooseTitle
    if fillTitle: d['fillTitle'] = fillTitle
    return d
def emit(n, lessons, path):
    out = f"// {n}번째 구간 수업 내용. build.py로 만들었다. 형식은 stretch-1-lessons.js 맨 위 설명과 같다.\nwindow.PT_LESSONS = window.PT_LESSONS || {{}};\nPT_LESSONS[{n}] = " + json.dumps({i + 1: l for i, l in enumerate(lessons)}, ensure_ascii=False, indent=1) + ";\n"
    open(path, 'w').write(out)
