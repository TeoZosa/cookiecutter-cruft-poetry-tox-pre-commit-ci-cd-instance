window.BENCHMARK_DATA = {
  "lastUpdate": 1633530981060,
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
        "date": 1633443897591,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 370.71614533816626,
            "unit": "iter/sec",
            "range": "stddev: 0.000024710550992483375",
            "extra": "mean: 2.697481651595732 msec\nrounds: 376"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1058.0631328944976,
            "unit": "iter/sec",
            "range": "stddev: 0.000011996156992505552",
            "extra": "mean: 945.1231868029872 usec\nrounds: 1076"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2241.7671855024105,
            "unit": "iter/sec",
            "range": "stddev: 0.000009554393966568416",
            "extra": "mean: 446.07665170006777 usec\nrounds: 2294"
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
        "date": 1633530978624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.3211160941898,
            "unit": "iter/sec",
            "range": "stddev: 0.00020652819545286723",
            "extra": "mean: 3.4804264078947105 msec\nrounds: 304"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 805.2068056715924,
            "unit": "iter/sec",
            "range": "stddev: 0.00020687157319169524",
            "extra": "mean: 1.2419169745664755 msec\nrounds: 865"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1659.3928659331873,
            "unit": "iter/sec",
            "range": "stddev: 0.00009285892970291825",
            "extra": "mean: 602.6300465246567 usec\nrounds: 1784"
          }
        ]
      }
    ]
  }
}