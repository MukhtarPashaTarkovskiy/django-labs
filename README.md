# django-labs / WEB-TUTORIAL

Репозиторий с выполненными лабораторными работами **№1–№9** по Python/Django.

## Структура репозитория

- `lab1/` — лабораторная 1 (Python-скрипты)
- `lab2/` — лабораторная 2
- `lab3/` … `lab9/` — лабораторные 3–9 (Django-проект *blog* внутри соответствующей папки)
- `reports/` — отчёты в формате `.docx`:
  - `Lab1.docx` … `Lab9.docx`

## Как запустить лабораторные 3–9 (Django)

> Во всех Django-лабораторных структура одинаковая: файл `manage.py` лежит внутри `labN/blog/`.

1) Перейдите в нужную лабораторную (пример для lab9):
```bash
cd lab9/blog
```

2) (Рекомендуется) создать виртуальное окружение:
```bash
python -m venv .venv
```

3) Активировать окружение:

**Windows (PowerShell):**
```powershell
.\.venv\Scripts\Activate.ps1
```

**Windows (CMD):**
```bat
.\.venv\Scripts\activate.bat
```

4) Установить зависимости:

Если в проекте есть `requirements.txt`:
```bash
pip install -r requirements.txt
```

Если `requirements.txt` нет (типовой вариант для учебных работ):
```bash
pip install django
```

5) Запустить сервер:
```bash
python manage.py runserver
```

Открыть в браузере:
- http://127.0.0.1:8000/

## Важно

- В репозиторий **не добавляются** виртуальные окружения (`.venv/`) и базы данных (`db.sqlite3`, `db_blog`), чтобы не публиковать пользователей/данные и не раздувать размер проекта.
- Вся демонстрация результатов и пошаговое выполнение — в отчётах из папки `reports/`.

## Ссылка для сдачи

https://github.com/MukhtarPashaTarkovskiy/django-labs
