window.BENCHMARK_DATA = {
  "lastUpdate": 1633530877611,
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
        "date": 1633443782123,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 265.58464253215544,
            "unit": "iter/sec",
            "range": "stddev: 0.00038494042451411614",
            "extra": "mean: 3.765277956081086 msec\nrounds: 296"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 772.626208931227,
            "unit": "iter/sec",
            "range": "stddev: 0.00028535294306054285",
            "extra": "mean: 1.2942869248291473 msec\nrounds: 878"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1511.9549288455062,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900717022592024",
            "extra": "mean: 661.3953768870458 usec\nrounds: 1921"
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
          "id": "1e26aea9f51ef200c12d532807b20155a886bcf0",
          "message": "Merge pull request #372 from TeoZosa/dependabot/pip/xdoctest-0.15.10\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@57b9c14",
          "timestamp": "2021-10-06T13:41:48Z",
          "tree_id": "07ac98a9378b926f63d82fac90973a9751d80f59"
        },
        "date": 1633530875434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 285.7899090330827,
            "unit": "iter/sec",
            "range": "stddev: 0.0003813878847680027",
            "extra": "mean: 3.499073859477107 msec\nrounds: 306"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 821.6904874599802,
            "unit": "iter/sec",
            "range": "stddev: 0.00015554943199657493",
            "extra": "mean: 1.217003257627105 msec\nrounds: 885"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1600.7752564669677,
            "unit": "iter/sec",
            "range": "stddev: 0.00015429581102964103",
            "extra": "mean: 624.697312105558 usec\nrounds: 1743"
          }
        ]
      }
    ]
  }
}