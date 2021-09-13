window.BENCHMARK_DATA = {
  "lastUpdate": 1631548351298,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "ad221c71292383e6aae28abbc19a0c81b5cc77ac",
          "message": "Merge pull request #218 from TeoZosa/dependabot/pip/sphinx-4.2.0",
          "timestamp": "2021-09-13T14:23:20Z",
          "tree_id": "accf806f68780b5fbcde42ab43d478f61f3d6517"
        },
        "date": 1631548205073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 275.9997957602276,
            "unit": "iter/sec",
            "range": "stddev: 0.00017330986848431",
            "extra": "mean: 3.623191086955518 msec\nrounds: 115"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 811.6494239130284,
            "unit": "iter/sec",
            "range": "stddev: 0.00008984067833755805",
            "extra": "mean: 1.2320590276266299 msec\nrounds: 724"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1639.17419816212,
            "unit": "iter/sec",
            "range": "stddev: 0.000037090158412681666",
            "extra": "mean: 610.0632874292575 usec\nrounds: 748"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "4cd8aeb5be3eb408ab23973e23b88de76067eeb1",
          "message": "Merge pull request #219 from TeoZosa/dependabot/pip/tox-gh-actions-2.7.0",
          "timestamp": "2021-09-13T14:41:50Z",
          "tree_id": "691e2f5561f50e01326d92c3220b8eb8475b5502"
        },
        "date": 1631548348432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.08707377436264,
            "unit": "iter/sec",
            "range": "stddev: 0.0005329924501426243",
            "extra": "mean: 3.4954392968788994 msec\nrounds: 128"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 841.441706606225,
            "unit": "iter/sec",
            "range": "stddev: 0.00020291332051857537",
            "extra": "mean: 1.1884364563212415 msec\nrounds: 767"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1709.0078210395313,
            "unit": "iter/sec",
            "range": "stddev: 0.00010809792688713365",
            "extra": "mean: 585.1348295127954 usec\nrounds: 698"
          }
        ]
      }
    ]
  }
}