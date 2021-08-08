window.BENCHMARK_DATA = {
  "lastUpdate": 1628456969670,
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
        "date": 1628456967626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.23588407943413,
            "unit": "iter/sec",
            "range": "stddev: 0.0005398400367905093",
            "extra": "mean: 3.481459161012951 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 845.9968218744807,
            "unit": "iter/sec",
            "range": "stddev: 0.00011842011848823357",
            "extra": "mean: 1.1820375374274972 msec\nrounds: 521"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1783.6880638270918,
            "unit": "iter/sec",
            "range": "stddev: 0.00005932534651679641",
            "extra": "mean: 560.6361450075491 usec\nrounds: 731"
          }
        ]
      }
    ]
  }
}