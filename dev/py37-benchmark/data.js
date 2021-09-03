window.BENCHMARK_DATA = {
  "lastUpdate": 1630693473415,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "a2b2ffc3b58195f5f5c01068f0982ddb0c010c35",
          "message": ":bug: Defer to `base_configs` for `nbqaxdoctest`\n\nviz.:\n- `wheel`,\n- `wheel_pip517`\n- `parallel_show_output`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@406b564",
          "timestamp": "2021-09-03T18:15:33Z",
          "tree_id": "6697de58497f32354c70e4d9708fe78e32aa6fd8"
        },
        "date": 1630693470544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 311.39306819231535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000688803378343953",
            "extra": "mean: 3.2113752750026 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 908.5776279407462,
            "unit": "iter/sec",
            "range": "stddev: 0.0000373649660403922",
            "extra": "mean: 1.1006214210517806 msec\nrounds: 836"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1883.965514967188,
            "unit": "iter/sec",
            "range": "stddev: 0.000023432854424618736",
            "extra": "mean: 530.7952783930955 usec\nrounds: 722"
          }
        ]
      }
    ]
  }
}