window.BENCHMARK_DATA = {
  "lastUpdate": 1627565893673,
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
        "date": 1627565892392,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1437.7617544364612,
            "unit": "iter/sec",
            "range": "stddev: 0.000014534920638898753",
            "extra": "mean: 695.525525640342 usec\nrounds: 624"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2127.782920658144,
            "unit": "iter/sec",
            "range": "stddev: 0.000014122396030453873",
            "extra": "mean: 469.9727544061168 usec\nrounds: 1702"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13759.282065330353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046935071917666745",
            "extra": "mean: 72.6782106255186 usec\nrounds: 1600"
          }
        ]
      }
    ]
  }
}