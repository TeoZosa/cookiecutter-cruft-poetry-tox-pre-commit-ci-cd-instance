window.BENCHMARK_DATA = {
  "lastUpdate": 1628457502243,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "8d08f8ecbe27b2acff808300cc6ad7eff8fe575d",
          "message": ":rotating_light: Fix template `mypy` error: `[union-attr]`\n\nExample error log:\n```\nmypy.................................................................................Failed\n  - hook id: mypy\n  - duration: 43.81s\n  - exit code: 1\n\n  tests/test_main.py:13: note: In module imported here:\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py: note: In function \"version_callback\":\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py:30:26: error:\n  Item \"None\" of \"Optional[str]\" has no attribute \"title\"  [union-attr]\n              console.print(f\"{app.info.name.title()} CLI version: {__versio...\n                               ^\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py: note: In function \"main\":\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py:48:29: error:\n  Item \"None\" of \"Optional[str]\" has no attribute \"replace\"  [union-attr]\n          friendly_project_name = app.info.name.replace(\"-\", \" \").title()\n                                  ^\n  Found 2 errors in 1 file (checked 4 source files)\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py: note: In function \"version_callback\":\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py:30:26: error:\n  Item \"None\" of \"Optional[str]\" has no attribute \"title\"  [union-attr]\n              console.print(f\"{app.info.name.title()} CLI version: {__versio...\n                               ^\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py: note: In function \"main\":\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py:48:29: error:\n  Item \"None\" of \"Optional[str]\" has no attribute \"replace\"  [union-attr]\n          friendly_project_name = app.info.name.replace(\"-\", \" \").title()\n                                  ^\n  Found 2 errors in 1 file (checked 4 source files)\n```\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@714eb29",
          "timestamp": "2021-08-08T21:03:51Z",
          "tree_id": "fbfc793da8ced5b4b12ba1a5553adaa54864f688"
        },
        "date": 1628457499666,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.92464148390394,
            "unit": "iter/sec",
            "range": "stddev: 0.00004261222404150782",
            "extra": "mean: 3.2902893135532763 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 875.0188976571987,
            "unit": "iter/sec",
            "range": "stddev: 0.000026100165645188234",
            "extra": "mean: 1.14283246073591 msec\nrounds: 764"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1826.477886319051,
            "unit": "iter/sec",
            "range": "stddev: 0.000018721723822289306",
            "extra": "mean: 547.5018380952458 usec\nrounds: 735"
          }
        ]
      }
    ]
  }
}