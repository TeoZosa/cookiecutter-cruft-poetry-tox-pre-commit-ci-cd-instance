window.BENCHMARK_DATA = {
  "lastUpdate": 1633531000232,
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
        "date": 1633443870666,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 372.42490420782826,
            "unit": "iter/sec",
            "range": "stddev: 0.000018294231436070474",
            "extra": "mean: 2.685105074074099 msec\nrounds: 378"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1052.0506332992297,
            "unit": "iter/sec",
            "range": "stddev: 0.000020835084410207268",
            "extra": "mean: 950.5245929694477 usec\nrounds: 1081"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2252.7048266332094,
            "unit": "iter/sec",
            "range": "stddev: 0.00001001264057122268",
            "extra": "mean: 443.91079922111 usec\nrounds: 2311"
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
        "date": 1633530997479,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 269.76724992047195,
            "unit": "iter/sec",
            "range": "stddev: 0.0007489952974344667",
            "extra": "mean: 3.7068991891892087 msec\nrounds: 296"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 778.4948147518528,
            "unit": "iter/sec",
            "range": "stddev: 0.00013207548269155486",
            "extra": "mean: 1.2845300714286099 msec\nrounds: 854"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1580.182429515429,
            "unit": "iter/sec",
            "range": "stddev: 0.00013560944473083188",
            "extra": "mean: 632.8383238045844 usec\nrounds: 1924"
          }
        ]
      }
    ]
  }
}