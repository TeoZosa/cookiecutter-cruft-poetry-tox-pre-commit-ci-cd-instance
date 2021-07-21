window.BENCHMARK_DATA = {
  "lastUpdate": 1626876212832,
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
          "id": "d4152bcdc2e2d948fbb4d2f6a5355dc08c5e944b",
          "message": "Merge pull request #121 from TeoZosa/dependabot/pip/pylint-2.9.5",
          "timestamp": "2021-07-21T13:56:25Z",
          "tree_id": "4fd12739fb563c23a68abc65dcbad2a73d0fa2b9"
        },
        "date": 1626876211483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1220.279270472621,
            "unit": "iter/sec",
            "range": "stddev: 0.00001721445251159772",
            "extra": "mean: 819.4845427577364 usec\nrounds: 573"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1742.2534585885342,
            "unit": "iter/sec",
            "range": "stddev: 0.000028073941295916287",
            "extra": "mean: 573.9693011200208 usec\nrounds: 1428"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13423.463811092615,
            "unit": "iter/sec",
            "range": "stddev: 0.000004983253424069399",
            "extra": "mean: 74.49642015450884 usec\nrounds: 1816"
          }
        ]
      }
    ]
  }
}