window.BENCHMARK_DATA = {
  "lastUpdate": 1628457092978,
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
        "date": 1628457090952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 310.1684292116117,
            "unit": "iter/sec",
            "range": "stddev: 0.00008499992265605509",
            "extra": "mean: 3.2240547580609897 msec\nrounds: 124"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 913.1671878840552,
            "unit": "iter/sec",
            "range": "stddev: 0.000033088119345078185",
            "extra": "mean: 1.0950897198980063 msec\nrounds: 789"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1863.6710784531008,
            "unit": "iter/sec",
            "range": "stddev: 0.000024814180844765127",
            "extra": "mean: 536.5753708159854 usec\nrounds: 747"
          }
        ]
      }
    ]
  }
}