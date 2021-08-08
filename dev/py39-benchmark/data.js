window.BENCHMARK_DATA = {
  "lastUpdate": 1628457113818,
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
          "id": "eb3ff16a88ca806fc132380f5ae3308056740318",
          "message": ":rotating_light: Fix template `mypy` error: `[union-attr]`\n\nExample error log:\n```\nmypy.................................................................................Failed\n  - hook id: mypy\n  - duration: 43.81s\n  - exit code: 1\n\n  tests/test_main.py:13: note: In module imported here:\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py: note: In function \"version_callback\":\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py:30:26: error:\n  Item \"None\" of \"Optional[str]\" has no attribute \"title\"  [union-attr]\n              console.print(f\"{app.info.name.title()} CLI version: {__versio...\n                               ^\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py: note: In function \"main\":\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py:48:29: error:\n  Item \"None\" of \"Optional[str]\" has no attribute \"replace\"  [union-attr]\n          friendly_project_name = app.info.name.replace(\"-\", \" \").title()\n                                  ^\n  Found 2 errors in 1 file (checked 4 source files)\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py: note: In function \"version_callback\":\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py:30:26: error:\n  Item \"None\" of \"Optional[str]\" has no attribute \"title\"  [union-attr]\n              console.print(f\"{app.info.name.title()} CLI version: {__versio...\n                               ^\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py: note: In function \"main\":\n  cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py:48:29: error:\n  Item \"None\" of \"Optional[str]\" has no attribute \"replace\"  [union-attr]\n          friendly_project_name = app.info.name.replace(\"-\", \" \").title()\n                                  ^\n  Found 2 errors in 1 file (checked 4 source files)\n```\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0f8b3bc",
          "timestamp": "2021-08-08T20:59:31Z",
          "tree_id": "ab23bb4ed768fbf900d4a15f6361837314b4661c"
        },
        "date": 1628457111814,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 328.3462275661853,
            "unit": "iter/sec",
            "range": "stddev: 0.00007741260075678962",
            "extra": "mean: 3.0455656744173445 msec\nrounds: 129"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 956.367030815397,
            "unit": "iter/sec",
            "range": "stddev: 0.00005505811129128354",
            "extra": "mean: 1.045623665160646 msec\nrounds: 884"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1987.7600685650907,
            "unit": "iter/sec",
            "range": "stddev: 0.00002419956313223565",
            "extra": "mean: 503.07882516317596 usec\nrounds: 755"
          }
        ]
      }
    ]
  }
}