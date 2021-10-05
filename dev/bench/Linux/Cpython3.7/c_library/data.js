window.BENCHMARK_DATA = {
  "lastUpdate": 1633443865507,
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
        "date": 1633443862780,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 255.6314487489375,
            "unit": "iter/sec",
            "range": "stddev: 0.0003285336580218001",
            "extra": "mean: 3.911881753571435 msec\nrounds: 280"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 768.5979166728984,
            "unit": "iter/sec",
            "range": "stddev: 0.00008771678452646674",
            "extra": "mean: 1.3010704014509868 msec\nrounds: 827"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1518.3758418625898,
            "unit": "iter/sec",
            "range": "stddev: 0.00007893289072011977",
            "extra": "mean: 658.5984658273417 usec\nrounds: 1668"
          }
        ]
      }
    ]
  }
}