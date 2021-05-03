window.BENCHMARK_DATA = {
  "lastUpdate": 1620000138455,
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
        "date": 1620000135824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1090.7600020322398,
            "unit": "iter/sec",
            "range": "stddev: 0.00004414347786428802",
            "extra": "mean: 916.7919598599682 usec\nrounds: 573"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1603.1620711796459,
            "unit": "iter/sec",
            "range": "stddev: 0.000018847204703650712",
            "extra": "mean: 623.7672522180965 usec\nrounds: 1352"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11796.79929224184,
            "unit": "iter/sec",
            "range": "stddev: 0.000006420849888917103",
            "extra": "mean: 84.76875593345473 usec\nrounds: 1770"
          }
        ]
      }
    ]
  }
}