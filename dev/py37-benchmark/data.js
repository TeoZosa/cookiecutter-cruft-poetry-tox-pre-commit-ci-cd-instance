window.BENCHMARK_DATA = {
  "lastUpdate": 1629667440905,
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
        "date": 1629667438668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 263.29697979125035,
            "unit": "iter/sec",
            "range": "stddev: 0.0004439402840891899",
            "extra": "mean: 3.7979926727333884 msec\nrounds: 110"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 772.6416122530703,
            "unit": "iter/sec",
            "range": "stddev: 0.0001261689321596916",
            "extra": "mean: 1.2942611220277647 msec\nrounds: 631"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1551.708104609129,
            "unit": "iter/sec",
            "range": "stddev: 0.000047822259142327894",
            "extra": "mean: 644.4511032903946 usec\nrounds: 668"
          }
        ]
      }
    ]
  }
}