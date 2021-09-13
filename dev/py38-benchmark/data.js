window.BENCHMARK_DATA = {
  "lastUpdate": 1631545953079,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "fcc7727ab446133104b7dbbe095d3320c4b52f42",
          "message": "Merge pull request #329 from TeoZosa/dependabot/pip/hypothesis-6.21.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c25f26a",
          "timestamp": "2021-09-13T14:20:45Z",
          "tree_id": "accf806f68780b5fbcde42ab43d478f61f3d6517"
        },
        "date": 1631545950222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.68573854391155,
            "unit": "iter/sec",
            "range": "stddev: 0.0003440003390234757",
            "extra": "mean: 3.476015199993526 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 885.9440048870525,
            "unit": "iter/sec",
            "range": "stddev: 0.00016745773432790044",
            "extra": "mean: 1.1287395077835514 msec\nrounds: 835"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1783.5887092864893,
            "unit": "iter/sec",
            "range": "stddev: 0.00007695811161149421",
            "extra": "mean: 560.6673751596253 usec\nrounds: 781"
          }
        ]
      }
    ]
  }
}