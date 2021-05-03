window.BENCHMARK_DATA = {
  "lastUpdate": 1620000165008,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "07c0524d45454e76bc92cd27306128bbccc7ff47",
          "message": ":green_heart: Fix `mypy` error\n\ni.e.,\n```\nmypy.................................................................................Failed\n- hook id: mypy\n- duration: 9.74s\n- exit code: 1\n\ntests/test_main.py: note: In member \"test_typeguard_enabled\" of class \"TestRuntimeTypechecking\":\ntests/test_main.py:102:30: error: Argument 1 to \"version_callback\" has\nincompatible type \"str\"; expected \"Optional[bool]\"  [arg-type]\n                version_callback(\"True\")\n                                 ^\nFound 1 error in 1 file (checked 4 source files)\nSuccess: no issues found in 3 source files\n```\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2e9cc65",
          "timestamp": "2021-05-02T23:58:19Z",
          "tree_id": "6bf514bf5e85fedf109f96670d704710b2cc3f0b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/07c0524d45454e76bc92cd27306128bbccc7ff47"
        },
        "date": 1620000159009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 958.8381369924024,
            "unit": "iter/sec",
            "range": "stddev: 0.00024906129856693476",
            "extra": "mean: 1.0429288963585768 msec\nrounds: 357"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1347.1330786123785,
            "unit": "iter/sec",
            "range": "stddev: 0.00024983599695670676",
            "extra": "mean: 742.3171592149272 usec\nrounds: 1275"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10646.161649375932,
            "unit": "iter/sec",
            "range": "stddev: 0.000036555822918803845",
            "extra": "mean: 93.93056699065048 usec\nrounds: 1642"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "07c0524d45454e76bc92cd27306128bbccc7ff47",
          "message": ":green_heart: Fix `mypy` error\n\ni.e.,\n```\nmypy.................................................................................Failed\n- hook id: mypy\n- duration: 9.74s\n- exit code: 1\n\ntests/test_main.py: note: In member \"test_typeguard_enabled\" of class \"TestRuntimeTypechecking\":\ntests/test_main.py:102:30: error: Argument 1 to \"version_callback\" has\nincompatible type \"str\"; expected \"Optional[bool]\"  [arg-type]\n                version_callback(\"True\")\n                                 ^\nFound 1 error in 1 file (checked 4 source files)\nSuccess: no issues found in 3 source files\n```\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2e9cc65",
          "timestamp": "2021-05-02T23:58:19Z",
          "tree_id": "6bf514bf5e85fedf109f96670d704710b2cc3f0b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/07c0524d45454e76bc92cd27306128bbccc7ff47"
        },
        "date": 1620000159009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 958.8381369924024,
            "unit": "iter/sec",
            "range": "stddev: 0.00024906129856693476",
            "extra": "mean: 1.0429288963585768 msec\nrounds: 357"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1347.1330786123785,
            "unit": "iter/sec",
            "range": "stddev: 0.00024983599695670676",
            "extra": "mean: 742.3171592149272 usec\nrounds: 1275"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10646.161649375932,
            "unit": "iter/sec",
            "range": "stddev: 0.000036555822918803845",
            "extra": "mean: 93.93056699065048 usec\nrounds: 1642"
          }
        ]
      }
    ]
  }
}