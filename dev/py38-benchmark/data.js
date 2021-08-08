window.BENCHMARK_DATA = {
  "lastUpdate": 1628457531601,
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
        "date": 1628457529002,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 291.3151289561581,
            "unit": "iter/sec",
            "range": "stddev: 0.0007059501760512712",
            "extra": "mean: 3.4327087768603204 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 825.6817873921874,
            "unit": "iter/sec",
            "range": "stddev: 0.00042538894610103943",
            "extra": "mean: 1.2111203314274073 msec\nrounds: 700"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1589.5005505352608,
            "unit": "iter/sec",
            "range": "stddev: 0.0003151792900119838",
            "extra": "mean: 629.1284389069586 usec\nrounds: 843"
          }
        ]
      }
    ]
  }
}