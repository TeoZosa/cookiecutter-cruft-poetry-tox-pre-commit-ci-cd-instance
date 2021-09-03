window.BENCHMARK_DATA = {
  "lastUpdate": 1630693484199,
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
        "date": 1630693481170,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 295.3295382386207,
            "unit": "iter/sec",
            "range": "stddev: 0.00033786164925085003",
            "extra": "mean: 3.3860480260935457 msec\nrounds: 115"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.8880337926646,
            "unit": "iter/sec",
            "range": "stddev: 0.00018192154644648502",
            "extra": "mean: 1.17111372969868 msec\nrounds: 825"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1860.2690899218628,
            "unit": "iter/sec",
            "range": "stddev: 0.000015694328981304535",
            "extra": "mean: 537.5566392075048 usec\nrounds: 704"
          }
        ]
      }
    ]
  }
}