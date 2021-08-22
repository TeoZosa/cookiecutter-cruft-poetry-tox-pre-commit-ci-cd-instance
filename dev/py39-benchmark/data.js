window.BENCHMARK_DATA = {
  "lastUpdate": 1629667423172,
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
          "id": "422f2448dbf1865ddee856d5f32c477b49888f9e",
          "message": ":art: Enforce boilerplate-first dependency declaration ordering\n\nThis makes it easier to follow along. Additionally, since new\nproject-specific dependencies added via the `poetry add` command are\nadded to the end of the `tool.poetry.dependencies` section, they will\nnow automatically be grouped with other project-specific dependencies.\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4c51dd1",
          "timestamp": "2021-08-22T21:14:46Z",
          "tree_id": "b66fa613c043057e1efc6137bb98263c4840fa92"
        },
        "date": 1629667420865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 298.04849873408233,
            "unit": "iter/sec",
            "range": "stddev: 0.0002632636894095885",
            "extra": "mean: 3.3551586545389576 msec\nrounds: 110"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 827.6773684058335,
            "unit": "iter/sec",
            "range": "stddev: 0.00014169522366204294",
            "extra": "mean: 1.2082002458591714 msec\nrounds: 785"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1752.738806731072,
            "unit": "iter/sec",
            "range": "stddev: 0.00010478914156992462",
            "extra": "mean: 570.5356646179587 usec\nrounds: 814"
          }
        ]
      }
    ]
  }
}