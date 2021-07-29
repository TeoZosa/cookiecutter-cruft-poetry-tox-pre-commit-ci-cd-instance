window.BENCHMARK_DATA = {
  "lastUpdate": 1627565889637,
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
          "id": "90c5491b3b567d75fb4d9b0727d8b7b0c5ecb2cf",
          "message": "Merge pull request #139 from TeoZosa/dependabot/pip/pylint-2.9.6",
          "timestamp": "2021-07-29T13:22:52Z",
          "tree_id": "f21db3ad820a447dee7feb94840ad086c083fc77"
        },
        "date": 1627565888343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1219.3139384886094,
            "unit": "iter/sec",
            "range": "stddev: 0.000018232225046633473",
            "extra": "mean: 820.1333294356839 usec\nrounds: 513"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1756.0669424532327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000187880813243429",
            "extra": "mean: 569.4543731931972 usec\nrounds: 1522"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13412.706308609486,
            "unit": "iter/sec",
            "range": "stddev: 0.000005999527915758096",
            "extra": "mean: 74.55616912733784 usec\nrounds: 1827"
          }
        ]
      }
    ]
  }
}