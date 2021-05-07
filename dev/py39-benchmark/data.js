window.BENCHMARK_DATA = {
  "lastUpdate": 1620405438843,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "f3f7a176e733c97fb362982504c29c27f9227781",
          "message": ":construction_worker: Make `cruft` pre-commit hook always succeed\n\nThe previous behavior of failing downstream projects failing CI when\nthey got out of sync with the upstream template project was too\nrestrictive. Since not all template project updates are relevant (e.g.,\nmeta-project dependency updates) project maintainers should be\nresponsible not only for merging template updates themselves, but also\nwhen they choose to merge the updates. Therefore, this hook simply logs\nthe `cruft` pre-commit hook output for transparency and maintain\nauditability.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f2bbcfe",
          "timestamp": "2021-05-07T16:33:48Z",
          "tree_id": "87e8fa7c1855db5e95526b5eeaf765a841d0e668",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f3f7a176e733c97fb362982504c29c27f9227781"
        },
        "date": 1620405437251,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1363.814821904846,
            "unit": "iter/sec",
            "range": "stddev: 0.00012043260678570422",
            "extra": "mean: 733.2373750002921 usec\nrounds: 624"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2015.4143581394317,
            "unit": "iter/sec",
            "range": "stddev: 0.00006859642072876588",
            "extra": "mean: 496.1758836149054 usec\nrounds: 1538"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16107.570053776435,
            "unit": "iter/sec",
            "range": "stddev: 0.000010550507038812172",
            "extra": "mean: 62.08261063968175 usec\nrounds: 1767"
          }
        ]
      }
    ]
  }
}