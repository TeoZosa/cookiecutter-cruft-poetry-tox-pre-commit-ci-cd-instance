window.BENCHMARK_DATA = {
  "lastUpdate": 1630693503514,
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
        "date": 1630693500368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 317.2926080320747,
            "unit": "iter/sec",
            "range": "stddev: 0.000026238397820098212",
            "extra": "mean: 3.151664976383286 msec\nrounds: 127"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 902.81533509968,
            "unit": "iter/sec",
            "range": "stddev: 0.00002150628898172569",
            "extra": "mean: 1.1076462274420602 msec\nrounds: 809"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1934.6195832076355,
            "unit": "iter/sec",
            "range": "stddev: 0.00001332970045684658",
            "extra": "mean: 516.897486554944 usec\nrounds: 744"
          }
        ]
      }
    ]
  }
}