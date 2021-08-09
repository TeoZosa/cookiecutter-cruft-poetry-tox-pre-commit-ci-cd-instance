window.BENCHMARK_DATA = {
  "lastUpdate": 1628523524325,
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
          "id": "e44e16099c9e1802bb70ff52714be679f038b772",
          "message": "Merge pull request #279 from TeoZosa/dependabot/pip/xdoctest-0.15.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1fafbc7",
          "timestamp": "2021-08-09T14:24:42Z",
          "tree_id": "a279f11385946797c7bcc1a2c68450edb94ff8f0"
        },
        "date": 1628523522086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 314.8112556984985,
            "unit": "iter/sec",
            "range": "stddev: 0.00018423668692510423",
            "extra": "mean: 3.176506500001771 msec\nrounds: 122"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 898.407034602927,
            "unit": "iter/sec",
            "range": "stddev: 0.00006610744544207507",
            "extra": "mean: 1.1130812220787814 msec\nrounds: 770"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1944.9569063467159,
            "unit": "iter/sec",
            "range": "stddev: 0.00001630647863663805",
            "extra": "mean: 514.150209054419 usec\nrounds: 751"
          }
        ]
      }
    ]
  }
}