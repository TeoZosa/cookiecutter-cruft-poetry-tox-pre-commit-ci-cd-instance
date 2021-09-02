window.BENCHMARK_DATA = {
  "lastUpdate": 1630617885759,
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
        "date": 1630617883317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 318.57321192041144,
            "unit": "iter/sec",
            "range": "stddev: 0.00003100246831784242",
            "extra": "mean: 3.1389958809525647 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 907.3519703769558,
            "unit": "iter/sec",
            "range": "stddev: 0.00001961126793886484",
            "extra": "mean: 1.1021081483787971 msec\nrounds: 802"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1970.9433364044498,
            "unit": "iter/sec",
            "range": "stddev: 0.000012586331580929785",
            "extra": "mean: 507.3712579805967 usec\nrounds: 752"
          }
        ]
      }
    ]
  }
}