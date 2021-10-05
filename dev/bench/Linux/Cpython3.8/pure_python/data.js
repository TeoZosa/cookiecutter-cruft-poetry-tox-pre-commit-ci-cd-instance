window.BENCHMARK_DATA = {
  "lastUpdate": 1633443891537,
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
          "id": "c0bcf09c28a7d4d24a3f083aa0ba3feeb14a5a30",
          "message": "Merge pull request #367 from TeoZosa/dependabot/pip/docs/poetry-1.1.11\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2787de0",
          "timestamp": "2021-10-05T13:31:31Z",
          "tree_id": "c2f7bfd1ba0e662e7444cfd4e6d4787e4b18128a"
        },
        "date": 1633443888902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 271.43081513280663,
            "unit": "iter/sec",
            "range": "stddev: 0.0004289677804019905",
            "extra": "mean: 3.684180071856309 msec\nrounds: 334"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 807.4645128625357,
            "unit": "iter/sec",
            "range": "stddev: 0.0003607162911390033",
            "extra": "mean: 1.2384445187007767 msec\nrounds: 1016"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1559.2498720354909,
            "unit": "iter/sec",
            "range": "stddev: 0.00013967389300740572",
            "extra": "mean: 641.3340273003008 usec\nrounds: 1978"
          }
        ]
      }
    ]
  }
}