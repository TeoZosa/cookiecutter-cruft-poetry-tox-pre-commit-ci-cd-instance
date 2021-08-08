window.BENCHMARK_DATA = {
  "lastUpdate": 1628455235506,
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
          "id": "d578f81d1ba6ea92f508b126d0cca905e2f264e4",
          "message": ":recycle: Specify project name in Typer instance instantiation\n\nUsing as single source of truth.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@87b1ede",
          "timestamp": "2021-08-08T20:31:49Z",
          "tree_id": "2302296d71a7a406beac5ef1e26904ebd8225aba"
        },
        "date": 1628455233599,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1259.3317710867452,
            "unit": "iter/sec",
            "range": "stddev: 0.000016265444229586582",
            "extra": "mean: 794.0719220774095 usec\nrounds: 616"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1845.211408679848,
            "unit": "iter/sec",
            "range": "stddev: 0.000014367162829251542",
            "extra": "mean: 541.9433216681916 usec\nrounds: 1486"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14369.785824946111,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037746972682269035",
            "extra": "mean: 69.59045960615423 usec\nrounds: 2030"
          }
        ]
      }
    ]
  }
}