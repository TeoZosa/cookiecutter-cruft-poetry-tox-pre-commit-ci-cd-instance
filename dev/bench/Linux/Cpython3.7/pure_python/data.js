window.BENCHMARK_DATA = {
  "lastUpdate": 1633530830802,
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
        "date": 1633443763207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 299.60211773705106,
            "unit": "iter/sec",
            "range": "stddev: 0.00010063261219910059",
            "extra": "mean: 3.337760118497095 msec\nrounds: 346"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 873.948191783023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000238855461579245",
            "extra": "mean: 1.1442325865561973 msec\nrounds: 1086"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1819.7337949112873,
            "unit": "iter/sec",
            "range": "stddev: 0.00002515111817469092",
            "extra": "mean: 549.5309274336747 usec\nrounds: 2260"
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
        "date": 1633530828417,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 280.60000255493355,
            "unit": "iter/sec",
            "range": "stddev: 0.00030615683367854127",
            "extra": "mean: 3.563791842105305 msec\nrounds: 323"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 828.2203206931043,
            "unit": "iter/sec",
            "range": "stddev: 0.00025366869039453334",
            "extra": "mean: 1.2074081920172404 msec\nrounds: 927"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1779.267771827975,
            "unit": "iter/sec",
            "range": "stddev: 0.00001281517195069333",
            "extra": "mean: 562.0289513661146 usec\nrounds: 1830"
          }
        ]
      }
    ]
  }
}