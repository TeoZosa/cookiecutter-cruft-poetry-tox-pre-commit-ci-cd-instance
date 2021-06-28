window.BENCHMARK_DATA = {
  "lastUpdate": 1624890721589,
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
          "id": "9c9367fc36269bb461e35ed12857995809fdd1c9",
          "message": "Merge pull request #231 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.1.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5bad031",
          "timestamp": "2021-06-28T14:14:40Z",
          "tree_id": "2cb62558eb41e9c0d5f34ed286e39d8c771ae892"
        },
        "date": 1624890550745,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1093.7564845214472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000350953948343043",
            "extra": "mean: 914.2802937872696 usec\nrounds: 531"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1600.8396246978068,
            "unit": "iter/sec",
            "range": "stddev: 0.000026835046732172124",
            "extra": "mean: 624.6721936238752 usec\nrounds: 1286"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12811.363396243583,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059663396498356015",
            "extra": "mean: 78.05570485130488 usec\nrounds: 1711"
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "f370709f21c7c4fbb5fa579306c934e18e5b1180",
          "message": "Merge pull request #232 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.1.7\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@940d1a1",
          "timestamp": "2021-06-28T14:24:44Z",
          "tree_id": "b5b25509099d680603f42a48319b19310343d7e2"
        },
        "date": 1624890718953,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 964.6195179433687,
            "unit": "iter/sec",
            "range": "stddev: 0.0001147148753371204",
            "extra": "mean: 1.0366781735166057 msec\nrounds: 438"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1371.5046722386246,
            "unit": "iter/sec",
            "range": "stddev: 0.00009561150289273329",
            "extra": "mean: 729.1262073265563 usec\nrounds: 1201"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9206.170425210472,
            "unit": "iter/sec",
            "range": "stddev: 0.000024078521913851996",
            "extra": "mean: 108.62279903721617 usec\nrounds: 1662"
          }
        ]
      }
    ]
  }
}