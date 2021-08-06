window.BENCHMARK_DATA = {
  "lastUpdate": 1628292830134,
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
          "id": "21a056a20e74f1fda2c2056fcb705259a7764c09",
          "message": ":arrow_up: Update `poetry.lock` lockfile\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ec3211f",
          "timestamp": "2021-08-06T23:25:56Z",
          "tree_id": "a012880cf98a31bafee961ddc1a4bbe224e9c1ad"
        },
        "date": 1628292827891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1067.976382271365,
            "unit": "iter/sec",
            "range": "stddev: 0.000019892982654043827",
            "extra": "mean: 936.3502944449077 usec\nrounds: 540"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1571.1798289264182,
            "unit": "iter/sec",
            "range": "stddev: 0.00001763777609389427",
            "extra": "mean: 636.4643827456063 usec\nrounds: 1275"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12527.285729825537,
            "unit": "iter/sec",
            "range": "stddev: 0.000004454213917878414",
            "extra": "mean: 79.82575168850458 usec\nrounds: 1776"
          }
        ]
      }
    ]
  }
}