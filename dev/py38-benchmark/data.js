window.BENCHMARK_DATA = {
  "lastUpdate": 1630617830751,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "798fb29a8021c8ac1f436f8d0dda473da05b24d5",
          "message": "Merge pull request #314 from TeoZosa/make-adr-support-optional\n\n💥 Make Architecture Decision Records Support Optional\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@239a51a",
          "timestamp": "2021-09-02T21:15:25Z",
          "tree_id": "b3731d5dab81b47bea145eb69be7864bda4cadc6"
        },
        "date": 1630617827934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 301.2944697052301,
            "unit": "iter/sec",
            "range": "stddev: 0.00040663715557007576",
            "extra": "mean: 3.319012131149785 msec\nrounds: 122"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 852.0537157680463,
            "unit": "iter/sec",
            "range": "stddev: 0.0002986005662174781",
            "extra": "mean: 1.173634926406716 msec\nrounds: 693"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1826.9762150851848,
            "unit": "iter/sec",
            "range": "stddev: 0.00004647677333787258",
            "extra": "mean: 547.3525006746593 usec\nrounds: 741"
          }
        ]
      }
    ]
  }
}